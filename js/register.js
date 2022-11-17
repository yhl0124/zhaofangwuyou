//获取到所有的input框
var input=document.getElementsByTagName('input')
// console.log(input)

// 获取到所有id为list的li
var li=document.getElementsByTagName('li')
// console.log(li)


var size=0

// 获取手机号input框  input[0]
  input[0].oninput=function(){
    var arr=/^1[3578]\d{9}$/;
    if (!arr.test(input[0].value)) {
        li[3].innerHTML='请输入纯数字11位手机号'
    }else{
        li[3].innerHTML='输入正确'
        size++;
        fn(size)
    }
  }
// 获取到短信中的验证码框   input[1]
 input[1].oninput=function(){
    if (input[1].value!=arry) {
        li[4].innerHTML='验证码错误'
    }else{
        li[4].innerHTML='验证码正确'
        size++
        fn(size)
    }
 }
// 获取密码input框   input[2]
input[2].oninput=function(){
    var arr = /^\w{6,10}$/;
    if (!arr.test(input[2].value)) {
        li[5].innerHTML='请输入最小长度为6位的密码'
    }else{
        li[5].innerHTML='输入正确'
        size++
        fn(size)
    }
}


//获取到  获取验证码按钮  点击获取验证码 60秒倒计时
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
console.log(btn_)
 btn_.style.disabled=true
 btn_.style.backgroundColor='#999'

function fn(a){
    if (a>=3) {
        btn_.style.disabled=false
        btn_.style.backgroundColor = 'red';
    }
    btn_.ontouchstart=function(){
    alert('注册成功')
    window.location.href='./login.html'
    localStorage.setItem('number', input[0].value);
    localStorage.setItem('password', input[2].value);
}
}

