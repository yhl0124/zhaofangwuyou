// 点击x消失
var close_ = document.getElementsByClassName('close')[0];
console.log(close_);
var sectionFive_ = document.getElementsByClassName('sectionFive')[0];
console.log(sectionFive_);


close_.onclick = function () {
    sectionFive_.style.display = 'none';
    console.log(1111);

}