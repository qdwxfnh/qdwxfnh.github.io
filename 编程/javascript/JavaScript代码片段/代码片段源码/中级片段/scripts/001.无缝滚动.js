var oDiv = document.getElementById('slide');
var oBtn01 = document.getElementById('btn01');
var oBtn02 = document.getElementById('btn02');

//通过标签获取元素，获取的是选择集，加上下标才能获取到元素
var oUl = oDiv.getElementsByTagName('ul')[0];
var iLeft = 0;
var iSpeed = -2;
var iNowspeed = null;
oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;

function moving() {
  iLeft += iSpeed;
  // 当ul向左滚动到第5个li时，瞬间将整个ul拉回到初始位置
  if(iLeft<-1000) {
    iLeft = 0;
  };
  //当ul在起始位置往右滚动时候，瞬间将整个ul拉回到往左的第5个li的位置
  if(iLeft>0) {
    iLeft = -1000;
  };
  oUl.style.left = iLeft + 'px';
};

var timer = setInterval(moving, 30);

oBtn01.onclick = function(){
  iSpeed = -2;
}

oBtn02.onclick = function(){
  iSpeed = 2;
}

// 当鼠标移入的时候
oDiv.onmouseover = function(){
  iNowspeed = iSpeed;
  iSpeed = 0;
};

// 当鼠标移出的时候
oDiv.onmouseout = function(){
  iSpeed = iNowspeed;
};

