//倒计时导航色块点击移动
var tabs = document.getElementById('tabs').getElementsByTagName('li');
//console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName('ul');
//console.log(lists);
for(var i = 0; i < tabs.length; i++){
    tabs[i].onclick = showlist;
}

//倒计时导航栏和商品列表页面切换函数
function showlist(){
    for( var i = 0; i < tabs.length; i++){
        if( tabs[i] === this){
            tabs[i].className = "libgcolor";//导航列表
            lists[i].className = "active";//商品列表
        }else{
            tabs[i].className = " ";
            lists[i].className = " ";
        }
        
    }
}

// 当网页滑动到特定位置时倒计时导航栏固定
var seckillNav = document.getElementById('seckillNav');
window.onscroll = function(){
    //获取滑动到的位置
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0; 
    //谷歌和火狐获取滑动位置：document.documentElement.scrollTop；
    //苹果浏览器获取滑动位置：window.pageYOffset;
    // ie浏览器获取滑动位置：document.body.scrollTop;
    //用||的方式来解决浏览器兼容
    //判断
    //console.log(scrollTop);
    if( scrollTop >= 260){
        seckillNav.className = "content_ct_menu content_ct_menu_gd";
    }else{
        seckillNav.className = "content_ct_menu";
    }
    
}



// 倒计时
window.onload=clock;
function clock(){
var today=new Date(),//当前时间
    h=today.getHours(),
    m=today.getMinutes(),
    s=today.getSeconds();
  var stopTime=new Date("May 31 2019 19:00:00"),//结束时间
    stopH=stopTime.getHours(),
    stopM=stopTime.getMinutes(),
    stopS=stopTime.getSeconds();
  var shenyu=stopTime.getTime()-today.getTime(),//倒计时毫秒数
    shengyuD=parseInt(shenyu/(60*60*24*1000)),//转换为天
    D=parseInt(shenyu)-parseInt(shengyuD*60*60*24*1000),//除去天的毫秒数
    shengyuH=parseInt(D/(60*60*1000)),//除去天的毫秒数转换成小时
    H=D-shengyuH*60*60*1000,//除去天、小时的毫秒数
    shengyuM=parseInt(H/(60*1000)),//除去天的毫秒数转换成分钟
    M=H-shengyuM*60*1000;//除去天、小时、分的毫秒数
    S=parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000)//除去天、小时、分的毫秒数转化为秒
    document.getElementById("djsjs").innerHTML=("距开始:"+shengyuH+"小时"+shengyuM+"分"+S+"秒");
    // setTimeout("clock()",500);
    setTimeout(clock,500);
}