// 导航栏选择
var box_a = document.getElementById('box-a');
// 获取区域按钮
var area_a = document.getElementById('area_a');
var btn_ = document.getElementsByClassName('btn')[0];
// console.log(btn_);
// console.log(typeof (btn_));

// 获取月租按钮
var btn_1 = document.getElementsByClassName('btn')[1];
var price_a = document.getElementById('price_a');
console.log(btn_1);
console.log(typeof (btn_1));

// 获取房型按钮
var btn_2 = document.getElementsByClassName('btn')[2];
var house_a = document.getElementById('house_a');

// 获取更多按钮
var btn_3 = document.getElementsByClassName('btn')[3];
var more_a = document.getElementById('more_a');
// console.log(more_a);
btn_.onclick = function () {
    box_a.style.display = 'block';
    area_a.style.display = 'block';

}

btn_1.onclick = function () {
    price_a.style.display = 'block';
    box_a.style.display = 'block';
    area_a.style.display = 'none';

}

btn_2.onclick = function () {
    box_a.style.display = 'block';
    house_a.style.display = 'block';
    area_a.style.display = 'none';
    // console.log(1111);
    price_a.style.display = 'none';

}
btn_3.onclick = function () {
    // console.log(111);
    more_a.style.display = 'block';
    box_a.style.display = 'block';
    area_a.style.display = 'none';
    house_a.style.display = 'none';
    price_a.style.display = 'none';
}


// 获取导航栏要点击的按钮
// var btn1 = document.getElementsByClassName('btn1');
var btn1_ = document.getElementsByClassName('bt');
console.log(btn1_);
console.log(typeof (btn1_));
var row_ = document.getElementsByClassName('row');

var co_ = document.getElementsByClassName('co');

for (var i = 0; i < btn1_.length; i++) {
    // 给btn1附加下标
    btn1_[i].setAttribute('index', i);

    // 当点击btn1
    btn1_[i].onclick = function () {
        // 拿到点击btn1的值
        var index = this.getAttribute('index', i);
        for (var j = 0; j < btn1_.length; j++) {
            btn1_[j].className = '';
            // btn1_[index].className = 'btn1_';
        }
        for (var k = 0; k < row_.length; k++) {
            row_[k].style.display = 'none';
            row_[index].style.display = 'block';
        }
    }

}

box_a.onmouseleave = function () {
    box_a.style.display = 'none';

}


