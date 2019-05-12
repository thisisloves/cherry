var hh=document.querySelector("header");

var tt=document.querySelector("#top");
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
        hh.style.display="none";
        tt.style.height="70px";
        tt.borderBottom="1px solid #cccccc";
        t0.style.height="70px";
        t1.style.marginTop="0";
        t1.style.height="70px";
        t3.style.display="none";
        t2.style.marginTop="28px";
        tt.style.position="fixed";
        tt.style.backgroundColor="#FFFFFF";
        tt.style.width="100%";
        tt.style.zIndex="10";
        tt.style.boxShadow="0 6px 3px -3px rgba(204,204,204,0.5)";
        ad.style.top="70px";
      

    }
    if(scrollT<20){
        hh.style.display="block";
        tt.style.height="120px";
        tt.borderBottom="none";
        t0.style.height="120px";
        t1.style.marginTop="30px";
        t1.style.height="70px";
        t3.style.display="block";
        t2.style.marginTop="72px";
        tt.style.position="relative";
        tt.style.backgroundColor="none";
        tt.style.width="100%";
        tt.style.zIndex="1";
        tt.style.boxShadow="none";
        ad.style.top="150px";
  
   
}
} 

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


//$("#ranking>.ranking>.ranking-b>a").on("click",function(){
//	$("#ranking>.ranking>.ranking-b>ul>li:nth-of-type(6)").css({visibility:"visible"})
//	$("#ranking>.ranking>.ranking-b").stop().animate({right:"1155px"})
//	$("#ranking>.ranking>.ranking-b>a").css({transform: "rotate(180deg)"})
//	
//
//})


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

