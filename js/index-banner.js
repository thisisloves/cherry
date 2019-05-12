function Banner(options) {
var bannerObj = {

index: 0,
iPrev: options.items.length - 1
};
if (options.list == undefined || options.list == true) {
bannerObj.list = true;
} else {
bannerObj.list = false;
}

if (options.autoPlay == undefined || options.autoPlay == true) {
bannerObj.autoPlay = true;
} else {
bannerObj.autoPlay = false;
}

bannerObj.delayTime = options.delayTime || 2000;
bannerObj.moveTime = options.moveTime || 200;


if (bannerObj.list = true) {
var $ul = $("<ul>");
var $d = $("<div>");
$ul.append($d);
for (var i = 0; i < options.items.length; i++) {
	$d.append($("<li>" + (i + 1) + "</li>"))
}
$("#banner .banner").append($ul)
$ul.css({
	height: "30px",
	position: "absolute",
	width: "100%",
	padding: "0px",
	margin: "0px",
	bottom: "15px",
	opacity: "0.8"
}).children("div").css({
	width: "30%",
	margin: "auto",
	display: "flex"
})
	.children("li").css({
		listStyle: "none",
		width: "30px",
		flex: "1",
		height: "30px",
		borderRadius: "50%",
		lineHeight: "30px",
		color: "white",
		float: "left",
		margin: "auto",
		margin: "0 15px",
		textAlign: "center",
		borderLeft: "1px solid skybule",
		cursor: "pointer",
		background: "salmon",
		fontFamily: "微软雅黑"
	}).eq(bannerObj.index).css({
		background: "skyblue"
	})


function leftClick() {

	if (bannerObj.index == 0) {
		bannerObj.index = options.items.length - 1;
		bannerObj.iPrev = 0;

	} else {
		bannerObj.index--;
		bannerObj.iPrev = bannerObj.index + 1;
	}

	options.items.eq(bannerObj.iPrev).css({ left: 0 })
		.stop().animate({ left: options.items.eq(0).width() })
	options.items.eq(bannerObj.index).css({ left: -options.items.eq(0).width() })
		.stop().animate({ left: 0 })
	$ul.children("div").children("div").children("li").siblings().css({
		background: "salmon"
	})
	$ul.children("div").children("div").children("li")[bannerObj.index].style.background = "skyblue";
}

function rightClick() {
	if (bannerObj.index == options.items.length - 1) {
		bannerObj.index = 0;
		bannerObj.iPrev = options.items.length - 1;

	} else {
		bannerObj.index++;
		bannerObj.iPrev = bannerObj.index - 1;

	}
	options.items.eq(bannerObj.iPrev).css({ left: 0 })
		.stop().animate({ left: -options.items.eq(0).width() })
	options.items.eq(bannerObj.index).css({ left: options.items.eq(0).width() })
		.stop().animate({ left: 0 })

	$ul.children("div").children("li").siblings().css({
		background: "salmon"
	})
	$ul.children("div").children("li")[bannerObj.index].style.background = "skyblue";

}


//list功能
$ul.children("div").children("li").on("click", function () {
	if ($(this).index() > bannerObj.index) {
		//点击的比当前大，左

		options.items.eq(bannerObj.index).css({ left: 0 })
			.stop().animate({
				left: -options.items.eq(0).width()
			})
		options.items.eq($(this).index())
			.css({ left: options.items.eq(0).width() })
			.stop().animate({
				left: 0
			})
	}
	if ($(this).index() < bannerObj.index) {
		//点击的比当前小，右

		options.items.eq(bannerObj.index).css({ left: 0 })
			.stop().animate({
				left: options.items.eq(0).width()
			})
		options.items.eq($(this).index())
			.css({ left: -options.items.eq(0).width() })
			.stop().animate({
				left: 0
			})
	}
	//一次点击之后，本次点击的就是下次的当前
	bannerObj.index = $(this).index();
	$(this).css({ background: "skyblue" }).siblings().css({
		background: "salmon"
	})
})
}
//判断是否传入左右按钮
if (options.left != undefined && options.left.length != 0 &&
options.right != undefined && options.right.length != 0) {
options.left.on("click", leftClick)
options.right.on("click", rightClick)
}
//判断是否自动播放
if (bannerObj.autoPlay) {
//模拟右按钮
bannerObj.timer = setInterval(() => {
	rightClick()
}, bannerObj.delayTime);
$("#banner .banner").hover(function () {
	clearInterval(bannerObj.timer)
}, function () {
	bannerObj.timer = setInterval(() => {
		rightClick();
	}, bannerObj.delayTime);
})
}
}


Banner({
items: $(".banner").children(".banner-1").children("a"),//必选
left: $(".banner1 .btn").find("#left"),  //非必填 默认无
right: $(".banner1 .btn").find("#right"), //非必填 默认无
list: true, //可选，下拉按钮 默认true,false不生成
autoPlay: true, //自动播放 默认为true,falae不生成
delayTime: 4000, //每张图片的延时 默认2000
moveTime: 500 //每张图片的移动耗时 默认200
})

