const algorithmLabels = {
  mind_drive: "MindDrive",
  sparsedrive_scorer: "SparseDriveV2",
  hip_ad: "HiP-AD",
};

const algorithmDescriptions = {
  mind_drive: "Vision-language-action policy",
  sparsedrive_scorer: "Trajectory-vocabulary scoring policy",
  hip_ad: "Hierarchical planning policy",
};

const mainResultGains = {
  sparsedrive_scorer: {
    pretrainedDS: 66.43,
    craftDS: 71.10,
    pretrainedSR: 45.45,
    craftSR: 50.45,
  },
  mind_drive: {
    pretrainedDS: 62.60,
    craftDS: 67.45,
    pretrainedSR: 40.45,
    craftSR: 46.36,
  },
  hip_ad: {
    pretrainedDS: 73.46,
    craftDS: 75.79,
    pretrainedSR: 53.64,
    craftSR: 56.36,
  },
};

const preferredOrder = ["hip_ad", "sparsedrive_scorer", "mind_drive"];

const state = {
  manifest: [],
  algorithm: "hip_ad",
  sceneIndex: 0,
  endedVideos: new Set(),
  playbackGeneration: 0,
};

const $ = (selector) => document.querySelector(selector);

function sceneFolder(item) {
  return item.scene_dir.split("/").pop();
}

const projectVideoBasePath = "./assets/projectpage_videos";

function activeAlgorithms() {
  const available = new Set(state.manifest.map((item) => item.algorithm));
  return [
    ...preferredOrder.filter((algorithm) => available.has(algorithm)),
    ...[...available].filter((algorithm) => !preferredOrder.includes(algorithm)).sort(),
  ];
}

function videoPath(item, variant) {
  return `${projectVideoBasePath}/${item.algorithm}/${sceneFolder(item)}/${variant}/e2e_av.mp4`;
}

function formatScenarioName(name) {
  return name
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}

function score(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(number === 100 ? 0 : 1) : value;
}

function scenesForAlgorithm(algorithm) {
  return state.manifest
    .filter((item) => item.algorithm === algorithm)
    .sort((a, b) => Number(a.selection_rank) - Number(b.selection_rank));
}

function renderTabs() {
  const tabs = $(".tabs");
  if (!tabs) return;
  tabs.innerHTML = "";
  activeAlgorithms().forEach((algorithm) => {
    const button = document.createElement("button");
    button.className = "tab";
    button.type = "button";
    button.setAttribute("aria-selected", String(algorithm === state.algorithm));
    button.textContent = algorithmLabels[algorithm];
    button.addEventListener("click", () => {
      state.algorithm = algorithm;
      state.sceneIndex = 0;
      renderComparison();
    });
    tabs.appendChild(button);
  });
}

function renderSelect(scenes) {
  const select = $(".scenario-select");
  if (!select) return;
  select.innerHTML = "";
  scenes.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${item.town_name} · ${formatScenarioName(item.scenario_name)}`;
    select.appendChild(option);
  });
  select.value = String(state.sceneIndex);
  select.onchange = (event) => {
    state.sceneIndex = Number(event.target.value);
    renderComparison();
  };
}

function updateVideo(selector, src) {
  const video = $(selector);
  if (!video) return;
  if (video.getAttribute("src") !== src) {
    video.pause();
    video.currentTime = 0;
    video.setAttribute("src", src);
    video.muted = true;
    video.loop = false;
    video.autoplay = true;
    video.playsInline = true;
    video.load();
  }
}

function playComparisonVideos() {
  const videos = [$(".pretrained-video"), $(".craft-video")].filter(Boolean);
  state.endedVideos = new Set();
  state.playbackGeneration += 1;
  const generation = state.playbackGeneration;
  videos.forEach((video) => {
    video.muted = true;
    video.loop = false;
    video.autoplay = true;
    video.currentTime = 0;
    video.removeAttribute("data-ended");
    video.removeAttribute("data-autoplay-blocked");
  });

  window.setTimeout(() => {
    if (generation !== state.playbackGeneration) return;
    videos.forEach((video) => {
      video.play().catch(() => {
        video.setAttribute("data-autoplay-blocked", "true");
      });
    });
  }, 80);
}

function renderComparison() {
  const scenes = scenesForAlgorithm(state.algorithm);
  const item = scenes[state.sceneIndex] || scenes[0];
  if (!item) return;

  renderTabs();
  renderSelect(scenes);

  $(".scenario-kicker").textContent = `${algorithmLabels[item.algorithm]} · ${algorithmDescriptions[item.algorithm]}`;
  $(".scenario-title").textContent = `${item.town_name}: ${formatScenarioName(item.scenario_name)}`;
  $(".score-pill").textContent = `Driving score ${score(item.pretrained_score_composed)} -> ${score(item.craft_score_composed)}`;
  $(".pretrained-status").textContent = item.pretrained_status;
  $(".craft-status").textContent = item.craft_status;
  $(".scenario-route").textContent = item.route_id;

  updateVideo(".pretrained-video", videoPath(item, "pretrained"));
  updateVideo(".craft-video", videoPath(item, "craft_finetuner"));
  playComparisonVideos();
}

function renderGallery() {
  const grid = $(".gallery-grid");
  if (!grid) return;
  grid.innerHTML = "";
  activeAlgorithms().forEach((algorithm) => {
    const gains = mainResultGains[algorithm];
    if (!gains) return;
    const dsGain = gains.craftDS - gains.pretrainedDS;
    const srGain = gains.craftSR - gains.pretrainedSR;
    const card = document.createElement("article");
    card.className = "insight";
    card.innerHTML = `
      <div class="metric">+${dsGain.toFixed(2)} DS / +${srGain.toFixed(2)} SR</div>
      <h3>${algorithmLabels[algorithm]}</h3>
      <p>${algorithmDescriptions[algorithm]}. On the full Bench2Drive closed-loop evaluation, CRAFT improves Driving Score from ${gains.pretrainedDS.toFixed(2)} to ${gains.craftDS.toFixed(2)} and Success Rate from ${gains.pretrainedSR.toFixed(2)}% to ${gains.craftSR.toFixed(2)}% over the pre-trained policy.</p>
    `;
    grid.appendChild(card);
  });
}

function renderComparisonCount() {
  const countNode = document.querySelector('[data-stat="comparison-count"]');
  if (!countNode) return;
  countNode.textContent = String(state.manifest.length);
}

function syncComparisonPlayback() {
  const videos = [$(".pretrained-video"), $(".craft-video")].filter(Boolean);
  videos.forEach((video) => {
    video.addEventListener("ended", () => {
      video.setAttribute("data-ended", "true");
      state.endedVideos.add(video.dataset.role);
      if (state.endedVideos.size === videos.length) {
        playComparisonVideos();
      }
    });
    video.addEventListener("play", () => {
      videos.forEach((other) => {
        if (other !== video && other.paused) {
          other.currentTime = video.currentTime;
          other.play().catch(() => {});
        }
      });
    });
    video.addEventListener("seeked", () => {
      videos.forEach((other) => {
        if (other !== video && Math.abs(other.currentTime - video.currentTime) > 0.3) {
          other.currentTime = video.currentTime;
        }
      });
    });
  });
}

function init() {
  state.manifest = window.CRAFT_MANIFEST || [];
  if (!state.manifest.length) {
    const shell = $(".comparison-shell");
    if (shell) {
      shell.innerHTML = `<div class="scenario-panel"><h3>Video manifest unavailable</h3><p class="caption">The embedded video manifest did not load. Check that assets/manifest.js is present next to assets/app.js.</p></div>`;
    }
    return;
  }
  renderComparisonCount();
  renderComparison();
  renderGallery();
  syncComparisonPlayback();
}

document.addEventListener("DOMContentLoaded", init);
