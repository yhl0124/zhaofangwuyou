
//获取到form表单下面的两个ul
var ul=document.getElementsByTagName('ul')
// console.log(ul)
//获取到普通登录 和 验证码快捷登录两个span
//span[0]普通登录
//span[1]验证码快捷登录
var span=document.getElementsByTagName('span')
// console.log(span)
// 使用排他法完成Tab切换
for(var i=0;i<span.length;i++){
    span[i].setAttribute('index',i)
    // console.log(span[i])
    span[i].onclick=function(){
        var index=this.getAttribute('index')
            //  console.log(index)
        for(var j=0;j<span.length;j++){
            span[j].className=''
            span[index].className='span'
        }

        for(var k=0;k<ul.length;k++){
            console.log(ul[k])
            ul[k].style.display='none'
            ul[index].style.display='block'
        }
    }
}



//获取到 普通登录 input框
var input=document.getElementsByClassName('input1')
// console.log(input)
//获取到所有的p
var li=document.getElementsByTagName('p')
// console.log(li)

var size=0
// 普通登录页的下面的p
input[0].oninput=function(){
    if (input[0].value!=localStorage.getItem('number')) {
        li[1].innerHTML='请输入注册时的手机号'
    }else{
        li[1].innerHTML='手机号输入正确'
        size++
        fn(size)
    }
}
input[1].oninput=function(){
    if (input[1].value!=localStorage.getItem('password')) {
        li[2].innerHTML='请输入注册时的密码'
    }else{
        li[2].innerHTML='密码输入正确'
        size++
        fn(size)
    }
}

// 验证码登录页的下面的p
var b=document.getElementsByClassName('b')
// console.log(b)

var index=0
input[2].oninput=function(){
    if (input[2].value!=localStorage.getItem('number')) {
        li[3].innerHTML='请输入注册时的手机号'
    }else{
        li[3].innerHTML='手机号输入正确'
        index++
        sn(index)
    }
}

// 获取到短信中的验证码框   input[3]
input[3].oninput=function(){
    if (input[3].value!=arry) {
        li[4].innerHTML='验证码错误'
    }else{
        li[4].innerHTML='验证码正确'
        index++
        sn(index)
    }
 }
//获取到  获取验证码按钮  点击获取验证码 60秒倒计时
var btn=document.getElementsByClassName('YZ')[0]
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





// 获取到普通登录页面的登录按钮
var btn_=document.getElementsByClassName('btn')[0]

// console.log(btn_)

btn_.style.disabled=true
btn_.style.backgroundColor='#999'

function fn(a){
   if (a>=2) {
    btn_.style.disabled=false
       btn_.style.backgroundColor = 'red';
   }
   btn_.ontouchstart=function(){
   alert('登录成功')
   window.location.href='./index.html'
}
}




// 获取到验证码登录页面的登录按钮
var btn_1=document.getElementsByClassName('btn')[1]
// console.log(btn_1)
btn_1.style.disabled=true
btn_1.style.backgroundColor='#999'

function sn(a){
   if (a>=2) {
    btn_1.style.disabled=false
       btn_1.style.backgroundColor = 'red';
   }
   btn_1.ontouchstart=function(){
   alert('登录成功')
   window.location.href='./index.html'
}

}















