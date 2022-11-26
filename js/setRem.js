function setRem() {
     var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.boby.clientWidth;
     var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
    
    
    }
    // 防抖
    var timer = null;
    window.onresize = function () {
     clearTimeout(timer);
    timer = setTimeout(setRem, 300);
    }
    // 当页面加载的时候 也要调用一下setRem 目的 默认 把html 根节点的字体大小 设置位10px
    
    window.onload = setRem;