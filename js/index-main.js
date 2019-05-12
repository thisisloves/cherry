var h=document.querySelector("header");
var b0=document.querySelector("#banner");
var b=document.querySelector(".banner-1");
var t=document.querySelector("#top");
var b1=document.querySelector("#all");
var t0=document.querySelector(".top-1");
var t1=document.querySelector(".top-1>a");
var t2=document.querySelector(".top-2");
var t3=document.querySelector(".top-3>.top-3-t");
var ad=document.querySelector("#add");
//console.log(add);
//console.log(t1)
//console.log(t3)
window.onscroll = function(){
    // 获取滚动的top
    var scrollT = document.documentElement.scrollTop;
//  console.log(scrollT);
    if(scrollT>80){
        h.style.display="none";
        t.style.height="70px";
        t.borderBottom="1px solid #cccccc";
        t0.style.height="70px";
        t1.style.marginTop="0";
        t1.style.height="70px";
        t3.style.display="none";
        t2.style.marginTop="28px";
        t.style.position="fixed";
        t.style.backgroundColor="#FFFFFF";
        t.style.width="100%";
        t.style.zIndex="10";
        t.style.boxShadow="0 6px 3px -3px rgba(204,204,204,0.5)";
        ad.style.top="70px";
        b.style.marginTop="80px";

        b0.style.height="500px";
    }
    if(scrollT<20){
        h.style.display="block";
        t.style.height="120px";
        t.borderBottom="none";
        t0.style.height="120px";
        t1.style.marginTop="30px";
        t1.style.height="70px";
        t3.style.display="block";
        t2.style.marginTop="72px";
        t.style.position="relative";
        t.style.backgroundColor="none";
        t.style.width="100%";
        t.style.zIndex="1";
        t.style.boxShadow="none";
        ad.style.top="150px";
        b.style.marginTop="0";
        b0.style.height="400px";
   
}
} 


$.ajax({
   url: "json/index.json",//json文件位置
   type: "GET",//请求方式为get
   dataType: "json", //返回数据格式为json
   success:function(data) {//请求成功完成后要执行的方法 
       //each循环 使用$.each方法遍历返回的数据date
       $.each(data.new, function(i, item) {
var u1=document.querySelector("#new .new .new-b ul");
var li = document.createElement("li");
u1.appendChild(li);
li.innerHTML =`
							
						<a href="">
							<img src="${item.img}" />
							<p>新</p>
							<span>${item.span}</span>
							<u>${item.u}</u>
						</a>
							`;
							
    })
     $.each(data.ranking, function(i, item) {
var u2=document.querySelector("#ranking .ranking .ranking-b ul ");
var li = document.createElement("li");
u2.appendChild(li);
li.innerHTML =`
					<a href="">
							<s>${item.s}</s>
							<img src="${item.img}" />
							<div class="ranking-1">
								<i>进货</i>
								<p>新</p>
								<b>火爆</b>
							</div>
							<span>${item.span}</span>
							<u>${item.u}</u>
						</a>
							`;
							
    })
   $.each(data.discount, function(i, item) {
var u3=document.querySelector("#discount .discount .discount-b ul");
var li = document.createElement("li");
u3.appendChild(li);
li.innerHTML =`
				<a href="">
							<img src="${item.img}" />
							<div class="discount-1">
								<p>新</p>
								<b>火爆</b>
								<i>进货</i>
								<em>打折</em>
							</div>
							<span>${item.span}</span>
							<div class="discount-2">
								<del>￥24840</del>
								<u>${item.u}</u>
							</div>
						</a>`;
							
    })

   }
})


$("#top>.top-1>.top-2>a:nth-of-type(5)").hover(function(){
    $("#add").css({display:"block",height:0})
          .stop().animate({height:262})
},function(){
//  setTimeout(function(){$("#add").css({display:"none"})}, 4000);
});

$("#add").hover(function(){
	$("#add").css({display:"block",height:262})
},function(){
	$("#add").css({display:"none"})
})



  if($("#ranking>.ranking>.ranking-b>ul>li:nth-of-type(6)").css("visibility")=="hidden")
	{		
	$("#ranking>.ranking>.ranking-b>a").on("click",function(){
	$("#ranking>.ranking>.ranking-b>ul>li:nth-of-type(6)").css({visibility:"visible"})
	$("#ranking>.ranking>.ranking-b").stop().animate({right:"1155px"})
	$("#ranking>.ranking>.ranking-b>a").css({transform: "rotate(180deg)"}) 
	})
	}
	 if($("#ranking>.ranking>.ranking-b>ul>li:nth-of-type(6)").css("visibility")=="visible")
	{
	$("#ranking>.ranking>.ranking-b>ul").on("click",function(){
	$("#ranking>.ranking>.ranking-b>ul>li:nth-of-type(6)").css({visibility:"hidden"});
	$("#ranking>.ranking>.ranking-b").stop().animate({right:"0"});
	$("#ranking>.ranking>.ranking-b>a").css({transform: "rotate(180deg)"})
	});	
	}


   class Index{
        constructor(){
        	this.a = document.querySelector("#top .top-1>.top-3>.top-3-t>a:nth-of-type(5)")
            this.p = document.querySelector("#top .top-1>.top-3>.top-3-t>p");
            this.span = document.querySelector("#top .top-1>.top-3>.top-3-t>p>span");
            this.exit = document.getElementById("exit")
            this.getData()
            this.addEvent();
   
        }
        getData(){
            this.abc = localStorage.getItem("abc");
            // 读取localStorage，如果有就解析成数组，如果没有就给一个空数组，方便操作
            if(this.abc == null){
                this.abc = [];
            }else{
                this.abc = JSON.parse(this.abc)
            }
            this.panduan()
        }
        panduan(){
            for(var i=0;i<this.abc.length;i++){
                if(this.abc[i].onoff == 1){
                    this.a.style.display = "none";
                    this.p.style.display = "block";
                    this.span.innerHTML = this.abc[i].user;
                    this.successUser = this.abc[i].user;
                    return;
                }
            }
            this.a.style.display = "block";
            this.p.style.display = "none";
            this.span.innerHTML = "";
        }
        addEvent(){
            var that = this;
            this.exit.onclick = function(){
                if(that.successUser){
                    for(var i=0;i<that.abc.length;i++){
                        if(that.abc[i].user === that.successUser){
                            that.abc[i].onoff = 0;
                            localStorage.setItem("abc",JSON.stringify(that.abc))
                            that.panduan();
                        }
                    }
                }
            }
        }
    }

    new Index();

