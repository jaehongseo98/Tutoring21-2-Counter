var cnt = 0;

$('.plus').on("click", function () {
    cnt += 1;
    console.log(cnt);
    document.getElementById("num").value = cnt;
});

$('.minus').on("click", function () {
    cnt -= 1;
    console.log(cnt);
    document.getElementById("num").value = cnt;
});