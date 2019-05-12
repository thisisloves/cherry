var aside= document.querySelector("aside");
aside.innerHTML = `
					<h3>按类别查找</h3>
					<ul>
						<li><a href="">所有商品</a></li>
						<li><a href="">新商品</a></li>
						<li><a href="">打折商品</a></li>
						<li><a href="">火爆商品</a></li>
						<li><a href="">排名商品</a></li>
					</ul>
					
					<ul>
						<li><a href="">春夏新品  (2223)</a></li>
						<li><a href="">外衣 (522)</a><img src="../images/16.png"/>
						<ul class="ul-1">
						   <li><a href="">毛衣(123)</a></li>
						   <li><a href="">衬衫(212)</a></li>
						   <li><a href="">羊毛衫(223)</a></li>
						   <li><a href="">裙子(124)</a></li>
						
		
						</ul>
						</li>
						<li><a href="">连衣裙 (333)</a></li>
						<li><a href="">下装 (445)</a><img src="../images/16.png"/>
							<ul class="ul-2">
						   <li><a href="">裤子(123)</a></li>
						   <li><a href="">裙子(124)</a></li>
						</ul>
						</li>
						
						
						<li><a href="">鞋子 (123)</a></li>
						<li><a href="">包包 (439)</a></li>
						<li><a href="">杂货 (300)</a><img src="../images/16.png"/>
							<ul class="ul-3">
						   <li><a href="">围巾(123)</a></li>
						   <li><a href="">手表(212)</a></li>
						   <li><a href="">帽子(223)</a></li>
						   <li><a href="">钱包(124)</a></li>
						   <li><a href="">配件(124)</a></li>
						   
						</ul>
						</li>
						<li><a href="">其他 (231)</a></li>
						<li><a href="">特价(233)</a><img src="../images/16.png"/>
							<ul class="ul-4">
						   <li><a href="">鞋子(123)</a></li>
						   <li><a href="">高跟鞋(212)</a></li>
						   <li><a href="">裙子(223)</a></li>
						   <li><a href="">长裙(124)</a></li>
						</ul>
						</li>
					</ul>
`;


$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(2)").mouseover(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-1").stop().show(500);
}
)
$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(4)").mouseover(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-2").stop().show(500);
}
)

$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(7)").mouseover(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-3").stop().show(500);
}
)
$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(9)").mouseover(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-4").stop().show(500);
}
)


$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(2)").mouseout(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-1").stop().hide(1100);
}
)
$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(4)").mouseout(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-2").stop().hide(1100);
}
)

$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(7)").mouseout(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-3").stop().hide(1100);
}
)
$("#main .main>aside>ul:nth-of-type(2)>li:nth-of-type(9)").mouseout(function(){	
	$("#main .main>aside>ul:nth-of-type(2)>li>.ul-4").stop().hide(1100);
}
)

$.ajax({
   url: "../json/ranking.json",//json文件位置
   type: "GET",//请求方式为get
   dataType: "json", //返回数据格式为json
   success:function(data) {//请求成功完成后要执行的方法 
       //each循环 使用$.each方法遍历返回的数据date
       $.each(data, function(i, item) {
var u=document.querySelector("#main>.main>article>.article-3>ul");
var li = document.createElement("li");
u.appendChild(li);
li.innerHTML =`
							<a href="../shop/shop.html">
							<s>${item.s}</s>
							<img src="${item.img}"/>
								<div class="discount-1">	
      					        <p>新</p>
      					        <b>火爆</b>
      					        <em>打折</em>
      					     </div>
							<span>${item.span}</span>
							<div class="article-5">
							<del>￥24840</del>
							<u>${item.u}</u>
							</div>
							<div class="article-4">
								<i></i>
								<i></i>
								<i></i>
							</div>
							<div class="article-6"><img src="../images/19.png"/></div></a>
							`;
							
    })

   }
})

