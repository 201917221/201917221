var temp = 1; //用来保存哪个图片显示
function showImg(changNum) { //让背景图片显示
    if (Number(changNum)) {//判断点击了要显示图片的按钮
        clearTimeout(t);
        temp = changNum;
    }
    document.getElementById("ad").style.backgroundImage = "url(images/ad-0" + temp + ".jpg)";
    temp++;
    if(temp === 5) {
        temp = 1;
    }
    t = setTimeout("showImg()", 2000);//刷新时间
}
function random(number) {
        return Math.floor(Math.random()*number);
      }

      function bgChange() {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        return rndCol;
      }

      var container1 = document.querySelector(".jieshao");
      container1.addEventListener('click', event => event.target.style.backgroundColor = bgChange());
      var container2 = document.querySelector(".biao-shi");
      container2.addEventListener('click', event => event.target.style.backgroundColor = bgChange());