document.addEventListener("astro:page-load", () => {
  function isL() {
    return document.documentElement.getAttribute("data-theme") !== "dark";
  }

  const Themes = {
    DARK: "dark",
    LIGHT: "light",
  };

  function setT(t) {
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("theme", t);
    } catch (e) {}
    updateTheme();
  }

  const darkThemeToggleBTN = document.getElementById("dark-theme-btn");
  const lightThemeToggleBTN = document.getElementById("light-theme-btn");

  function updateTheme() {
    const l = isL();
    
    lightThemeToggleBTN?.classList.toggle("active", l);
    darkThemeToggleBTN?.classList.toggle("active", !l);
  }

  try {
    const t = localStorage.getItem("theme");
    if (t) document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}

  updateTheme();

  darkThemeToggleBTN?.addEventListener("click", () => {
    setT(Themes.DARK);
  });

  lightThemeToggleBTN?.addEventListener("click", () => {
    setT(Themes.LIGHT);
  });


  const openSettingsPanelBTN = document.getElementById("open-settings-panel");
  const settingsPanel = document.getElementById("sp");

  let isPanelOpen = false;

  function closePanel() {
    settingsPanel?.classList.remove("open");
    isPanelOpen = false;
  }

  function openPanel() {
    settingsPanel?.classList.add("open");
    isPanelOpen = true;
  }

  openSettingsPanelBTN?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!isPanelOpen) {
      openPanel();
    } else {
      closePanel();
    }
  });

  document.addEventListener("click", (e) => {
    if (isPanelOpen &&
        !settingsPanel?.contains(e.target) &&
        !openSettingsPanelBTN?.contains(e.target)) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isPanelOpen) {
      closePanel();
    }
  });

});

  const inputs = [
    { input: document.getElementById('input-user'), label: document.getElementById('label-user') },
    { input: document.getElementById('input-password'), label: document.getElementById('label-password') }
  ];

  inputs.forEach(({ input, label }) => {
    input?.addEventListener('focus', () => {
      label?.classList.add('scale-105', 'text-(--btn-bg-hover)');
    });
    
    input?.addEventListener('blur', () => {
      label?.classList.remove('scale-105', 'text-(--btn-bg-hover)');
    });
  });