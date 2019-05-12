var t = document.querySelector("#t");
var div = document.createElement("div");
div.className = "t-1";
t.appendChild(div);
div.innerHTML = `
			<a href=""><img src="../images/11.png" /></a>
			<div class="t-2">
				<a href="../index.html">首页</a>
				<a href="../new/new.html">新品到货</a>
				<a href="../discount/discount.html">打折</a>
				<a href="../ranking/ranking.html">排行</a>
				<a href="../commodity/commodity.html">分类</a>
				
			</div>
			<div class="t-3">

				<div class="t-3-b">
					<input type="text" placeholder="请输入你要的商品" />

					<a href="">
						<img src="../images/4.png" />
					</a>
				</div>
			</div>
`

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

