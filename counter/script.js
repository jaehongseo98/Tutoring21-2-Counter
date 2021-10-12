// const $input = document.createElement('div');
// const ss = document.querySelector('#ss');
// minus.parentNode.removeChild(num);
// $input.textContent = count;

document.addEventListener('DOMContentLoaded', () => {
    const minus = document.querySelector('#minus'); //숫자 다운
    const plus = document.querySelector('#plus'); //숫자 업
    const num = document.querySelector('#num'); //숫자
    let count = 0;

    minus.addEventListener('click', () => {
        count--;
        num.value = count; //num 속성 .
    });

    plus.addEventListener('click', () => {
        count++;
        num.value = count;
    });
});
