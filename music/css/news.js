
function $id(s) {
	return document.getElementById(s);
}
function myrit(el,s) {
	if(!s)s=el.value;
	if(!s)return ;
	el.value=s;
	el.onfocus=function () {
		if(this.value==s) {
			this.value='';
			this.style.color='#000';
		}
	};
	el.onblur=function () {
		if(!this.value) {
			this.value=s;
			this.style.color='#999';
		}
	};
}
void function ($) {
	var hint="«Î ‰»Î≤È—Øπÿº¸◊÷";
	var txt=$('app_s_input');
	var btn=$('app_s_sbt');
	function sub() {
		var s=txt.value;
		if(s&&s!=hint) {
			window.open('http://www.baidu.com/s?ie=utf-8&word='+encodeURIComponent(s));
		}
	}
	myrit(txt,hint);
	txt.onkeypress=function (e) {
		if(!e)e=window.event;
		if(e.keyCode==13)sub();
	};
	btn.onclick=sub;
}($id);
void function () {
	var hash=document.getElementsByName('hash'),doc=/webkit/i.test(navigator.userAgent)?parent.document.body:parent.document.documentElement;
	function f() {
		doc.scrollTop=0;
		return false;
	}
	for(var i=0,l=hash.length;i<l;i++) {
		hash[i].onclick=f;
	}
}();

parent.J.add('news',{},window);
