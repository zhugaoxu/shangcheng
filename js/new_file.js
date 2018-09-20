window.onload = function() {
	var duration = 3000;
	var playTime = 1000;
	
	slide(duration, playTime);
    dong(duration, playTime);
}

function slide(duration, playTime) {
	var $ul = $('.lun1');
	var $cc = $('.lun1 img').eq(0).clone();
	$ul.append($cc);
	var li = $ul.children();

	var imglength = li.length - 1;
	var index = 0;

	function next() {
		index++;

		animate(index);
		if(index > imglength) {
			index = 1;
			$ul.css('left', 0 + 'px');
		}
		animate(index);
	}

	var timer = setInterval(next, duration);

	clearTimer($ul);

	function clearTimer(ele) {
		ele.hover(
			function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(next, duration);
			});

	}

	$('.lun3 li').click(function() {
		var index2 = $(this).index();
		index = index2;
		animate(index + 1);
	})

	function animate(index) {
		$('.lun3 li').css('background', 'white')
		$('.lun3 li').eq(index - 1).css('background', 'red');
		$ul.stop().animate({
			'left': index * (-1600) + 'px'
		}, playTime);

	}
}
function dong(duration, playTime) {
	var $box = $('.lun8');
	var $cc = $('.lun8 p').eq(0).clone();
	$box.append($cc);
	var img = $box.children();

	var imglength = img.length - 1;
	var index = 0;

	function next() {
		index++;

		animate(index);
		if(index > imglength) {
			index = 1;
			$box.css('top', 0 + 'px');
		}
		animate(index);
	}

	var timer = setInterval(next, duration);

	clearTimer($box);

	function clearTimer(ele) {
		ele.hover(
			function() {
				clearInterval(timer);
			},
			function() {
				timer = setInterval(next, duration);
			});

	}

	function animate(index) {

		$box.stop().animate({
			'top': index * (-40) + 'px'
		}, playTime);

	}
}

	