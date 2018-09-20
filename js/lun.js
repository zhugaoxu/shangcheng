$(function() {
				var duration = 2000;
				var playTime = 1000;
				slide(duration, playTime);
			})

			function slide(duration, playTime) {
				var $newLi = $(".slide li").eq(0).clone();
				$(".box").append($newLi);
				var $oUl = $(".box");
				var $buttons = $(".buttons").children();
				var $oLis = $oUl.children();
				var buttons = $("#buttons").children();
				var index = 0;
				var imgLength = $oLis.length - 1;

				function next() {
					index++;
					animate(index);
					if(index > imgLength) {
						index = 1;
						$oUl.css({
							"left": 0 + "px"
						})
					}
					animate(index);
				}

                 clearTimer($oUl);
                clearTimer($buttons);

				var timer = setInterval(function() {
					next();
				}, duration);

               

				function clearTimer($ele) {
					$ele.hover(function() {
						clearInterval(timer);
					}, function() {
						timer = setInterval(function() {
							next();
						}, duration);
					})
				}
				
				$buttons.each(function(){
					var _index=$(this).index();
					$(this).on("click",function(){
						if(_index>imgLength)
						{
							_index=1;
						}
						animate(_index);
					})
				})

				function animate(index) {
					$oUl.stop().animate({
						"left": index * (-$oLis.eq(0).width()) + 'px'
					}, playTime);
					$buttons.removeClass("on");
					$buttons.eq(index >= imgLength ? 0 : index).addClass("on");
				}
			}