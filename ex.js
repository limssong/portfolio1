function pw(){
	var pw = document.getElementById('pw').value;
	if ( pw == 'dlathdgml' )
	{
		document.getElementById('indexWrap').className='indexWrap indexMenuOn';
	}
	else {
		alert('관계자외 출입금지!!!');
	}
}

function enter(){
	if (event.keyCode == 13) {
		pw();
	}
}

// function toggleMy(obj){
// 	if ( obj.parentNode.className == 'my-wrap' )
// 	{
// 		obj.parentNode.className = 'my-wrap my-on';
// 	}
// 	else {
// 		obj.parentNode.className = 'my-wrap';
// 	}
// }

// function toggleMy2(obj){
// 	if ( obj.parentNode.className == 'my-wrap2' )
// 	{
// 		obj.parentNode.className = 'my-wrap2 my2-on';
// 	}
// 	else {
// 		obj.parentNode.className = 'my-wrap2';
// 	}
// }

// window.onload = function userAgentFunction(){
// 	var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
// 	useragentW = document.getElementById("useragent-w");
// 	useragentM = document.getElementById("useragent-m");

// 	if (varUA.match("android") != null) {
// 		alert("Android로 접속하셨습니다.");
// 		useragentW.innerHTML="Android";
// 		useragentM.innerHTML="Android";
// 		useragentW.classList.add("Android");
// 		useragentM.classList.add("Android");
// 	} else if (varUA.indexOf("iphone")>-1||varUA.indexOf("ipad")>-1||varUA.indexOf("ipod")>-1) { 
// 		alert("iOS로 접속하셨습니다.");
// 		useragentW.innerHTML="iOS";
// 		useragentM.innerHTML="iOS";
// 		useragentW.classList.add("iOS");
// 		useragentM.classList.add("iOS");

// 	} else {
// 		alert("아이폰, 안드로이드 외 OS로 접속하셨습니다.");
// 		useragentW.innerHTML="아이폰, 안드로이드 외 OS";
// 		useragentM.innerHTML="아이폰, 안드로이드 외 OS";
// 		useragentW.classList.add("another");
// 		useragentM.classList.add("another");
// 	}
// }