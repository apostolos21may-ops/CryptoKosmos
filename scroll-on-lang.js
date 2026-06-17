document.addEventListener("languageChanged", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

["lang-toggle", "mobile-lang-toggle"].forEach(function (id) {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }
});