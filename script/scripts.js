// Загрузка критического JS после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  /* FAQ toggle */
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      document
        .querySelectorAll(".faq-item")
        .forEach((i) => i.classList.toggle("active", i === item));
    });
  });

  /* копирование промокода */
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = "1WIN2024";
      // Проверка поддержки clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(code)
          .then(() => {
            showCopyFeedback(btn);
          })
          .catch(() => {
            fallbackCopyTextToClipboard(code, btn);
          });
      } else {
        fallbackCopyTextToClipboard(code, btn);
      }
    });
  });

  function showCopyFeedback(btn) {
    btn.classList.add("copied");
    btn.innerHTML =
      '<svg class="copy-icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML =
        '<svg class="copy-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
    }, 1000);
  }

  function fallbackCopyTextToClipboard(text, btn) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.cssText =
      "position:fixed;top:-100px;left:-100px;width:1px;height:1px;";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showCopyFeedback(btn);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  }
});
/* ===== бургер-меню ===== */
const burger = document.getElementById('burger');
const nav    = document.getElementById('main-nav');

burger.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('open');
});