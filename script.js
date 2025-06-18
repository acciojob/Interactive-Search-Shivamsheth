//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector(".search");
  const input = document.querySelector(".input");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", () => {
    search.classList.add("active");
    input.focus();
  });
});
