document.addEventListener("astro:page-load", () => {

  const openSettingsPanelBTN = document.getElementById("open-settings-panel");
  const settingsPanel = document.getElementById("sp");
  const closeSettingsPanelBTN = document.getElementById("desktopCloseBtn");

  let isPanelOpen = false;

  function openPanel() {
    const panel = document.getElementById("sp");
    if (!panel) return;

    panel.classList.remove("panel-setting-hidden");
    isPanelOpen = true;

    document.body.style.overflow = "hidden";
  }

  function closePanel() {
    const panel = document.getElementById("sp");
    if (!panel) return;

    panel.classList.add("panel-setting-hidden");
    isPanelOpen = false;

    document.body.style.overflow = "";
  }

  closeSettingsPanelBTN?.addEventListener("click", (e) => {
    closePanel();
  });

  openSettingsPanelBTN?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!isPanelOpen) {
      openPanel();
    } else {
      closePanel();
    }
  });

  document.getElementById("sp")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closePanel();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isPanelOpen) {
      closePanel();
    }
  });
  const inputs = [
  {
    input: document.getElementById("input-user"),
    label: document.getElementById("label-user"),
  },
  {
    input: document.getElementById("input-password"),
    label: document.getElementById("label-password"),
  },
];

inputs.forEach(({ input, label }) => {
  input?.addEventListener("focus", () => {
    label?.classList.add("scale-105", "text-(--button-bg-hover)");
  });

  input?.addEventListener("blur", () => {
    label?.classList.remove("scale-105", "text-(--button-bg-hover)");
  });
});

});