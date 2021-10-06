   
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var num = document.querySelector(".count");
var cnt = 0;

plus.addEventListener('click', function() {
    cnt += 1;
    num.value = cnt;
})

minus.addEventListener('click', function() {
    cnt -= 1;
    num.value = cnt;
})