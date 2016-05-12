window.onload = function() {
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		loop: true,
		// 如果需要滚动条
		/*scrollbar: '.swiper-scrollbar',*/
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}

	})
	var audiodiv=document.querySelector("#audioDiv");
	var audioid=document.querySelector("#audioId");
	audiodiv.addEventListener("click",function(e){
		if(audioid.paused){
			audioid.play();
			audiodiv.className="playanimation";
			/*animation-play-state: paused|running;*/
		}else{
			audioid.pause();
			audiodiv.className="pauseanimation";
		}
	})

}


$(function(){
	$("#phone").blur(function(){
		var phone=$(this).val();
		var regphone=/^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}$/;
		if(!regphone.test(phone)){
			console.info("11");
			$(".info").html("手机号码输入不正确");
		}
	})
	
	$("#psw").blur(function(){
		var password=$(this).val();
		var regpassword=/^[0-9a-zA-Z_]{6,16}$/;
		if(!regpassword.test(password)){
			console.info("11");
			$(".info").html("密码输入不正确");
		}
	})
	
	$("#btn").click(function(e){
		$("#phone").trigger("blur");
		$("#psw").trigger("blur");
		var e=e||window.event;
		e.preventDefault();
		e.returnValue=false;
		var $this=$(this);
		var phonevalue=$(this).siblings("#phone").val();
		var pswvalue=$this.siblings("#psw").val();	
		if(phonevalue!=""&&pswvalue!=""){
			$(".info").html("");
			var value=phonevalue+"@"+pswvalue;
			window.localStorage.setItem("register",value);
		}
		  
	})
	
})

