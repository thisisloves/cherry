function getCookie(key){
        var arr = document.cookie.split("; ");
        for(var i=0;i<arr.length;i++){
            if(arr[i].split("=")[0] == key){
                return arr[i].split("=")[1]
            }
        }
        return "";
    }


getCookie("id");
console.log(getCookie("id"));

$.ajax({
   url: "../json/shop.json",//json文件位置
   type: "GET",//请求方式为get
   dataType: "json", //返回数据格式为json
   success:function(data) {//请求成功完成后要执行的方法 
       var html="";
       var html1=""
       var html2=""
       var html3=""
//     console.log(data);
       $.each(data[getCookie("id")].img, function(i, item) {
//console.log(data[0].img)
 //j数组索引 

html+=`<a><img src="${data[getCookie("id")].img[i]}"></a>`;
html1=`<img src="${data[getCookie("id")].img[0]}">`;
html2=`<img src="${data[getCookie("id")].img[1]}">`;
html3=`<img src="${data[getCookie("id")].img[2]}">`;
html4=`<img src="${data[getCookie("id")].img[3]}">`;
$("#shop-main>.shop-main>.shop-main-right>.shop-mian-right-l>a:nth-of-type(1)").html(html1);
$("#shop-main>.shop-main>.shop-main-right>.shop-mian-right-l>a:nth-of-type(2)").html(html2);
$("#shop-main>.shop-main>.shop-main-right>.shop-mian-right-l>a:nth-of-type(3)").html(html3);
$("#shop-main>.shop-main>.shop-main-right>.shop-mian-right-l>a:nth-of-type(4)").html(html4);
$("#shop-main>.shop-main>.shop-main-left>.shop-main-left-1").html(html);
$("#shop-main>.shop-main>.shop-main-left>.shop-main-left-2").html(html);
	
})

   }
})




		function Banner() {
		this.img = document.querySelectorAll("#shop-main>.shop-main>.shop-main-left>.shop-main-left-1>a");
		this.left = document.querySelector("#shop-main>.shop-main>.shop-main-left>.s-l>.s-l-l");
		this.right = document.querySelector("#shop-main>.shop-main>.shop-main-left>.s-l>.s-l-r");
        console.log(this.img)

		this.index = 0;
		this.Last = this.img.length - 1;
		this.addEvent();
}
	Banner.prototype.addEvent = function () {
		var that = this;
		this.left.onclick = function () {
			that.changeIndex(1);
		}
		this.right.onclick = function () {
			that.changeIndex(2)
		}
	}
	Banner.prototype.changeIndex = function (type) {
		if (type == 1) {
			if (this.index == 0) {
				this.index = this.img.length - 1;
				this.Last = 0;
			}
			else {
				this.index--; this.Last = this.index + 1;
			}
			this.display(-1);
		}
		else {
			if (this.index == this.img.length - 1) {
				this.index = 0;
				this.Last = this.img.length - 1;
			} else {
				this.index++;
				this.Last = this.index - 1;
			}
			this.display(1);
		}
		console.log(this.index);
	}
	Banner.prototype.display = function (type) {
		this.img[this.Last].style.left = 0;
		move(this.img[this.Last], { left: -this.img[0].offsetWidth * type })
		this.img[this.index].style.left = this.img[0].offsetWidth * type + "px";
		move(this.img[this.index], { left: 0 })

	}
	new Banner();
	
	
function move(ele,json,callback){
    clearInterval(ele.a);
    ele.a = setInterval(() => {
        var onoff = true;
        for(var attr in json){
            if(attr == "opacity"){
                var iNow = parseFloat(getStyle(ele,attr)) * 100;
            }else{
                var iNow = parseFloat(getStyle(ele,attr));
            }
            
            var speed = (json[attr] - iNow)/8;
            speed = speed < 0 ? Math.floor(speed): Math.ceil(speed)
            if(json[attr] != iNow){
                onoff = false;
            }
            if(attr == "opacity"){
                ele.style[attr] = (iNow + speed)/100;
            }else{
                ele.style[attr] = iNow + speed + "px";
            }
        }
        if(onoff == true){
            clearInterval(ele.a);
            callback && callback();
        }
    }, 30);
}

function getStyle(ele,attr){
    if(getComputedStyle){
        return getComputedStyle(ele,false)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}