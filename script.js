const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const log = console.log;

const minus = select(".minus");
const plus = select(".plus");
const count = select(".count");

plus.addEventListener("click", () => (count.value = Number(count.value) + 1));

minus.addEventListener("click", () => (count.value = Number(count.value) - 1));
