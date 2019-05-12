$.ajax({
   url: "../json/new.json",//json文件位置
   type: "GET",//请求方式为get
   dataType: "json", //返回数据格式为json
   success:function(data) {//请求成功完成后要执行的方法 
       //each循环 使用$.each方法遍历返回的数据date
       $.each(data, function(i, item) {
var u=document.querySelector("#m>.m>ul");
var li = document.createElement("li");
u.appendChild(li);
li.innerHTML =`
							<a href="../shop/shop.html">
							<img src="${item.img}"/>
								<div class="m-1">	
      			
      					        <b>新</b>
      					        <em>进货</em>
      					     </div>
							<span>${item.span}</span>
							<div class="m-2">
							<del>24840</del>
							<u>${item.u}</u>
							</div>
							<div class="m-3">
								<i></i>
								<i></i>
								<i></i>
							</div>
							<div class="m-4"><img src="../images/19.png"/></div>
							
							</a>
							`;
							
    })

   }
})

