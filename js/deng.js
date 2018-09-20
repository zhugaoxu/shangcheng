var mon = document.getElementById('mon');
		var moo = document.getElementById('moo');
		var sp = document.querySelector('.sp');

		moo.onclick = function() {
			sp.style.display = 'none';
		}

		function ss(str) {
			return str.replace(/[^\x00-xff]/g, "xx").length;
		}
		var la = document.getElementsByTagName("input");
		var lan = document.getElementById("ssd");
		var la1 = la[0];
		var la2 = la[1];
		var la3 = la[2];
		var p = document.getElementsByTagName("p")
		var p1 = p[0];
		var p2 = p[1];
		var p3 = p[2];
		var length = 0;
		var count = document.getElementById("count");
		var coun = document.getElementById("coun");
		var ll = document.getElementsByName("ss");
		la1.onfocus = function() {
			p1.style.opacity = 0.6;
			lan.style.opacity = 0.6;

		}
		la1.onkeyup = function() {
			length = ss(this.value);

			if(length == 0) {
				count.style.opacity = 0;
			} else {
				count.style.opacity = 0.6;
				count.innerHTML = length + "个字符";
			}
			if(length > 5) {
				la3.style.disable = "";
			}

		}
		la1.onblur = function() {
			var re = /[^/w\u4e00-\u9fa5+\w/g]/;
			if(re.test(this.value)) {
				p1.innerHTML = "含有非法字符";
			} else if(this.value == "") {
				p1.innerHTML = "不能为空";
			} else if(length > 25) {
				p1.innerHTML = "长度不能大于25";
			} else if(length < 6) {
				p1.innerHTML = "长度不能小于6";
			} else {
				p1.innerHTML = "OK";
			}
			count.style.opacity = 0;

		}
		la2.onfocus = function() {
			p2.style.opacity = 0.7;
			coun.style.opacity = 1;
		}
		la2.onkeyup = function() {

			length = ss(la2.value);
			if(length > 6) {
				la3.removeAttribute("disabled");
			}
			if(length < 5) {
				ll[0].style.backgroundColor = "yellow";
				ll[1].style.backgroundColor = "red";
				ll[2].style.backgroundColor = "red";
				la3.setAttribute("disabled");
			} else if(length > 4 && length < 10) {
				ll[1].style.backgroundColor = "yellow";
				ll[0].style.backgroundColor = "red";
				ll[2].style.backgroundColor = "red";
			} else {
				ll[2].style.backgroundColor = "yellow";
				ll[0].style.backgroundColor = "red";
				ll[1].style.backgroundColor = "red";
			}

		}
		la2.onblur = function() {
			coun.style.opacity = 0;

			var sad = /[^\d]/g;
			if(this.value == "") {
				p2.innerHTML = "不能为空";
			} else if(!(sad.test(this.value))) {
				p2.innerHTML = "不能权威数字";
			} else if(length > 16 || length < 6) {
				p2.innerHTML = "长度不符合要求";
			} else {
				p2.innerHTML = "OK";
			}
			// if(this.value=""){
			// 	p2.innerHTML="不能为空";
			// }
			// else if(length>16||length<6){
			// 	p2.innerHTML="长度不符合要求";
			// }
			// else if(!sad.test(this.value)){
			// 	p2.innerHTML="不能权威数字";
			// }
			// else{
			// 	p2.innerHTML="OK";
			// }
			//  

		}
		la3.onfocus = function() {
			p3.innerHTML = "输入你的密码";
			p3.style.opacity = 0.7;
		}
		la3.onblur = function() {

			if(this.value == "") {
				p3.innerHTML = "不能为空";
			} else if(this.value == la2.value) {
				p3.innerHTML = "OK";
				p3.style.opacity = 0.7;
			} else {
				p3.innerHTML = "两次输入不一致";
				p3.style.opacity = 0.7;
			}
		}
		mon.onclick = function() {

		}