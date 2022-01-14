const input = document.querySelector(".input-content");
const num = document.querySelectorAll(".num");
const back = document.querySelector(".back");
const push = [];
let data = "";

// Add string
document.addEventListener("click", function (e) {
  let getValue = e.target.closest(".num")?.textContent;
  if (!getValue) return;
  data += getValue;
  push.push(getValue);
  input.textContent = push.join("");
});
// Remove last string
back.addEventListener("click", function () {
  if (!push) return;
  push.pop(data);
  input.textContent = push.join("");
});
