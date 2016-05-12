

(function(){
	$.getJSON("goods.json", function(str) {
				var goodsall=str.goods;
				var goodsUl=$("#goods_ul");
				$.each(goodsall, function(index,value) {
					var li="";
					var li="<li><a><img class='lazy' src='img/gray.gif' data-original='"+value.imgurl+"'/></a><a><h3>"+value.title+"</h3><div class='buy'><span class='price_new'>"+value.price+"</span><i class='del'>"+value.oldprice+"</i><span class='salenum'>"+value.salenum+"</span></div></a></li>";
					goodsUl.append(li);
				});
				$("img.lazy").lazyload({ 
					placeholder: "img/gray.gif",
					threshold: 180,
					effect: "fadeIn"
				})
			})
})()



$(function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		width: window.innerWidth,
		autoplay: 3000
	});
})
