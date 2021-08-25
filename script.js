const countView = document.querySelector('.count');
const btnMinus = document.querySelector('.minus');
const btnPlus = document.querySelector('.plus');

btnMinus.addEventListener('click', () => {
  countView.value = countView.value - 1;
})

btnPlus.addEventListener('click', () => {
  countView.value = +countView.value + 1;
})