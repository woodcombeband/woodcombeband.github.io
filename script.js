(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
  }

  var stored = localStorage.getItem(STORAGE_KEY);
  var initialTheme = stored || "light";
  applyTheme(initialTheme);

  document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById("theme-toggle-checkbox");
    if (!checkbox) return;

    checkbox.checked = initialTheme === "dark";

    checkbox.addEventListener("change", function () {
      var newTheme = checkbox.checked ? "dark" : "light";
      applyTheme(newTheme);
      localStorage.setItem(STORAGE_KEY, newTheme);
    });
  });
})();
