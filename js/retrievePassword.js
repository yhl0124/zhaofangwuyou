//获取到所有的input框
var input=document.getElementsByTagName('input')
// console.log(input)

//获取到两个ul下面的li   
//li[4] [5] [6] [7] 表示隐藏的li
var li=document.getElementsByTagName('li')
// console.log(li)



var size=0
// 手机号
input[0].oninput=function(){
    if (input[0].value!=localStorage.getItem('number')) {
        li[4].innerHTML='请输入注册时的手机号'
    }else{
        li[4].innerHTML='手机号输入正确'
        size++
        fn(size)
    }
}
// 验证码
input[1].oninput=function(){
    if (input[1].value!=arry) {
        li[5].innerHTML='验证码不正确'
    }else{
        li[5].innerHTML='验证码正确'
        size++
        fn(size)
    }
}
// 密码
input[2].oninput=function(){
    var arr = /^\w{6,10}$/;
    if (!arr.test(input[2].value)) {
        li[6].innerHTML='请输入长度最小为6位的密码'
    }else{
        li[6].innerHTML='输入正确'
        size++
        fn(size)
    }
}

// 确认密码
input[3].oninput=function(){
    if (input[2].value!=input[3].value) {
        li[7].innerHTML='两次密码输入不一致'
    }else{
        li[7].innerHTML='输入正确'
        size++
        fn(size)
    }
}
//获取到发送验证码按钮  60秒倒计时
var btn=document.getElementsByClassName('btn')[0]
// console.log(btn)
var min=60
var flg=true
var timer;
btn.onclick=function(){
    clearInterval(timer)
    timer=setInterval(function(){
        min--
        btn.innerHTML=min+'秒后重发';
        if (min==0) {
            clearInterval(timer)
            btn.innerHTML='获取验证码'
        }

        if (min==57) {
            flg=false
            var arr=[]
            for(var i=0;i<4;i++){
                arr[i]=Math.round(Math.random()*4)
            }

            arry=arr.join('')
            alert(arry)

            setTimeout(function(){
                flg=true
            },6000)
        }
    },1000)
}

var btn_=document.getElementsByClassName('btn2')[0]
// console.log(btn_)
btn_.style.disabled=true
btn_.style.backgroundColor='#999'

function fn(a){
    if (a>=4) {
        btn_.style.disabled=false
        btn_.style.backgroundColor = 'red';
    }
    btn_.ontouchstart=function(){
    alert('修改成功,即将跳转到登录页')
    window.location.href='./login.html'
    localStorage.setItem('password', input[2].value);
}

}

