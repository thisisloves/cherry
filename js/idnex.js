var h = document.querySelector("header");
var div = document.createElement("div");
h.appendChild(div);
div.className = "header";
div.innerHTML = `
<div class="header-l">
<a href="">
	<img src="images/1.png">
	<span>上海</span>
	<u>[切换]</u>
</a>
<a href="login/login.html">
	<span>登录</span>
</a>
<a href="login/registered.html">
	<span>注册</span>
</a>
</div>
<div class="header-r">
<a href="">
	
<a href="shop/shop-1.html">
	<img src="images/2.png" />
	<span>购物车</span>
	<b>0</b>
	<img src="https://i.loli.net/2019/05/10/5cd4d0f31083c.jpg" />
</a>
<a href="">
	<span>愿望录</span>
</a>

<a href="">
	<img src="images/3.png" />
	<span>关注</span>
	<img src="https://i.loli.net/2019/05/10/5cd4d0f31083c.jpg" />
</a>
<a href="">
	<span>帮助中心</span>
	<img src="https://i.loli.net/2019/05/10/5cd4d0f31083c.jpg" />
</a>
<a href="">
	<span>收藏本站</span>
</a>

</div>`;

var t = document.querySelector("#top");
var div = document.createElement("div");
t.appendChild(div);
div.className = "top-1";
div.innerHTML = `<a href=""><img src="images/11.png" /></a>
<div class="top-2">
<a href="brand/brand.html">品牌</a>
<a href="new/new.html">新品到货</a>
<a href="discount/discount.html">打折</a>
<a href="ranking/ranking.html">排行</a>
<a href="commodity/commodity.html">分类</a>
</div>
<div class="top-3">
<div class="top-3-t">
	 <p>欢迎<span>XXX</span>登录<em id="exit">退出</em></p>
	<a href="shop/shop-1.html">
		<img src="images/57.png" />
		<span class="num">0</span>
	</a>
	<a href="shop/shop-1.html">购物包</a>
	<a href="discount/discount.html">火爆</a>
	<a href="login/registered.html">会员</a>
	<a href="login/login.html">登录</a>
</div>
<div class="top-3-b">
	<input type="text" placeholder="请输入你要的商品" />

	<a href="">
		<img src="images/4.png" />
	</a>
</div>
</div>`;

var b = document.querySelector(".banner");
var div = document.createElement("div");
div.className = "banner-1";
b.appendChild(div);
div.innerHTML = `
<a href=""><img src="images/banner/1.jpg"/></a>
<a href=""><img src="images/banner/3.jpg"/></a>
<a href=""><img src="images/banner/4.jpg"/></a>
<a href=""><img src="images/banner/5.jpg"/></a>
<a href=""><img src="images/banner/6.jpg"/></a>
<a href=""><img src="images/banner/7.jpg"/></a>
`;

var add = document.querySelector("#add");
var div = document.createElement("div");
div.className = "add";
add.appendChild(div);
div.innerHTML = `
<div class="add-1">
			<ul>
				<li><a href=""><img src="images/37.png"/>春夏新品</a></li>
				<li><a href=""><img src="images/38.png"/>外衣</a></li>
				<li><a href=""><img src="images/39.png"/>上衣</a></li>
				<li><a href=""><img src="images/40.png"/>针织毛衣</a></li>
				<li><a href=""><img src="images/41.png"/>羊毛衣</a></li>
				<li><a href=""><img src="images/42.png"/>衬衫</a></li>
				<li><a href=""><img src="images/43.png"/>长裙</a></li>
				<li><a href=""><img src="images/44.png"/>下装</a></li>
				<li><a href=""><img src="images/45.png"/>裤子</a></li>
				<li><a href=""><img src="images/46.png"/>短裙</a></li>
			</ul>
		</div>
		<div class="add-2">
			<ul>

				<li><a href=""><img src="images/47.png"/>鞋子</a></li>
				<li><a href=""><img src="images/48.png"/>包包</a></li>
				<li><a href=""><img src="images/49.png"/>杂货</a></li>
				<li><a href=""><img src="images/50.png"/>消音器</a></li>
				<li><a href=""><img src="images/51.png"/>泳装</a></li>
				<li><a href=""><img src="images/52.png"/>望远镜</a></li>
				<li><a href=""><img src="images/53.png"/>帽子</a></li>
				<li><a href=""><img src="images/44.png"/>钱包</a></li>
				<li><a href=""><img src="images/54.png"/>腰带</a></li>
				<li><a href=""><img src="images/55.png"/>装饰</a></li>
			</ul>
		</div>
		<div class="add-3">
			<ul>
				<li><a href=""><img src="images/56.png"/>特价</a></li>
				<li><a href=""><img src="images/45.png"/>裙子</a></li>
				<li><a href=""><img src="images/39.png"/>上衣</a></li>
				<li><a href=""><img src="images/47.png"/>鞋子</a></li>
				<li><a href=""><img src="images/48.png"/>包包</a></li>

			</ul>
		</div>

`;



var f = document.querySelector("#footer");
var div = document.createElement("div");
div.className = "footer";
f.appendChild(div);
div.innerHTML = `
<div class="footer-1">
	<dl>
		<dt><a href="">支持</a></dt>
		<dd><a href="">注册</a></dd>
		<dd><a href="">新会员注册</a></dd>
		<dd><a href="">邮件</a></dd>
		<dd><a href="">查询</a></dd>
	</dl>
	<dl>
		<dt><a href="">购物指南</a></dt>
		<dd><a href="">第一次购物</a></dd>
		<dd><a href="">关于运输</a></dd>
		<dd><a href="">关于退货</a></dd>
		<dd><a href="">关于货物</a></dd>
	</dl>
	<dl>
		<dd><a href="">关于付款</a></dd>
		<dd><a href="">关于产品</a></dd>
		<dd><a href="">帮助</a></dd>
	</dl>
	<dl>
		<dt><a href="">商品</a></dt>
		<dd><a href="">裙子</a></dd>
		<dd><a href="">裤子</a></dd>
		<dd><a href="">外套</a></dd>
		<dd><a href="">鞋子</a></dd>
	</dl>
	<dl>

		<dd><a href="">春夏新品</a></dd>
		<dd><a href="">包</a></dd>
		<dd><a href="">杂货</a></dd>
	</dl>
	<dl>
		<dt><a href="">品牌</a></dt>
		<dd><a href="">Louis Vuitton</a></dd>
		<dd><a href="">Dior</a></dd>
		<dd><a href="">Versace</a></dd>
		<dd><a href="">Prada</a></dd>
	</dl>
</div>
<div class="footer-2">
	<a href="">客户支持/联系</a>
	<a href=""> TEL 050-3684-9740（平日电话接待时间10:00至18:00）</a>
	<a href="">邮件 ming19980401@gmail.com</a>
</div>
<div class="footer-3">
	<a href="">社会概要</a>
	<a href="">招聘信息</a>
	<a href="">使用条款</a>
	<a href="">隐私政策</a>
	<a href="">关于特定商业的指示</a>
	<a href="">使用条款</a>
</div>
`;



