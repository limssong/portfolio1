function showMenu() {
	document.getElementById('header-wrap').className = 'header-wrap menu-on';
}

function hideMenu() {
	document.getElementById('header-wrap').className = 'header-wrap';
	document.getElementById('bg-menu-wrap').className = 'bg-menu-wrap';
}
function showRegularBox() {
	document.getElementById('header-wrap').className = 'header-wrap regular-box-on';
}

function hideRegularBox() {
	document.getElementById('header-wrap').className = 'header-wrap';
	document.getElementById('bg-menu-wrap').className = 'bg-menu-wrap';
}

function moveSlide(obj) {
	if ( obj == 'p1' ) {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap01';
	}
	else if ( obj == 'p2' ) {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap02';
	}
	else if ( obj == 'p3' ) {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap03';
	}
}

function prevSlide() {
	if ( document.getElementById('img-slide-wrap').className == 'img-slide-wrap img-slide-wrap01') {
		alert('첫 이미지입니다');
	}
	else if ( document.getElementById('img-slide-wrap').className == 'img-slide-wrap img-slide-wrap02' ) {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap01';
	}
	else if ( document.getElementById('img-slide-wrap').className == 'img-slide-wrap img-slide-wrap03' ) {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap02';
	}
	else {
		alert('첫 이미지입니다');
	}
}

function nextSlide() {
	if ( document.getElementById('img-slide-wrap').className == 'img-slide-wrap img-slide-wrap01') {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap02'
	}
	else if ( document.getElementById('img-slide-wrap').className == 'img-slide-wrap img-slide-wrap02' ) {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap03'
	}
	else if ( document.getElementById('img-slide-wrap').className == 'img-slide-wrap img-slide-wrap03' ) {
		alert('마지막 이미지입니다');
	}
	else {
		document.getElementById('img-slide-wrap').className = 'img-slide-wrap img-slide-wrap02'
	}
}

function showSearch() {
	document.getElementById('wrap').className='wrap search-on';
	document.getElementById('bg-menu-wrap').className = 'bg-menu-wrap bg-menu-on';
	document.getElementById('search-cont').className='search-cont';
}

function hideSearch() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('bg-menu-wrap').className = 'bg-menu-wrap';
	document.getElementById('search-cont').className='search-cont';
}

function toggleSearchResult() {
	if ( document.getElementById('search-cont').className=='search-cont search-result-on' )
	{
		document.getElementById('search-cont').className='search-cont';
	}
	else {
		document.getElementById('search-cont').className='search-cont search-result-on';
	}
}

function onToggleThis(obj){
	if ( obj.className == '' )
	{
		obj.className='on';
	}
	else {
		obj.className='';
	}
}

function toggleAsk(obj){
	if ( obj.parentNode.parentNode.parentNode.className == 'direct-ask-cont' )
	{
		obj.parentNode.parentNode.parentNode.className = 'direct-ask-cont direct-ask-on';
	}
	else {
		obj.parentNode.parentNode.parentNode.className = 'direct-ask-cont';	
	}
}

function toggleCheck(obj){
	if ( obj.parentNode.className == 'ask-category' )
	{
		obj.parentNode.className = 'ask-category ask-category-on';
	}
	else {
		obj.parentNode.className = 'ask-category';	
	}
}

function showJoin() {
	document.getElementById('wrap').className='wrap layer-on join-on';
	document.getElementById('join-wrap').className='layer-wrap join-wrap';
}

function hideJoin() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('join-wrap').className='layer-wrap join-wrap';
}

function showProfile() {
	document.getElementById('wrap').className='wrap layer-on photo-on';
}

function hideProfile() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('photo-wrap').className='layer-wrap photo-wrap';
}

function showCancel() {
	document.getElementById('wrap').className='wrap layer-on cancel-on';
}

function hideCancel() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('cancel-wrap').className='layer-wrap cancel-wrap';
}

function showStandingOrder() {
	document.getElementById('wrap').className='wrap layer-on layer-standing-order-on';
}

function hideStandingOrder() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('layer-standing-order-wrap').className='layer-wrap layer-standing-order-wrap';
}

function showChange() {
	document.getElementById('wrap').className='wrap layer-on change-on';
}

function hideChange() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('change-wrap').className='layer-wrap change-wrap';
}

function showAwardDetail() {
	document.getElementById('wrap').className='wrap layer-on award-detail-on';
}

function hideAwardDetail() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('award-detail-wrap').className='layer-wrap award-detail-wrap';
}

function showWriteReply() {
	document.getElementById('wrap').className='wrap layer-on write-reply-on';
}

function hideWriteReply() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('write-reply-wrap').className='layer-wrap write-reply-wrap';
}

function showAddress() {
	document.getElementById('wrap').className='wrap layer-on address-on';
}

function hideAddress() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('address-wrap').className='layer-wrap address-wrap';
}

function showViewImg() {
	document.getElementById('wrap').className='wrap layer-on view-img-on';
}

function hideViewImg() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('view-img-wrap').className='layer-wrap view-img-wrap';
}

function showWriteRegular() {
	document.getElementById('wrap').className='wrap layer-on write-regular-on';
}

function hideWriteRegular() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('write-regular-wrap').className='layer-wrap write-regular-wrap';
}

function showReturn() {
	document.getElementById('wrap').className='wrap layer-on return-on';
}

function hideReturn() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('return-wrap').className='layer-wrap return-wrap';
}

function showToast() {
	document.getElementById('wrap').className='wrap toast-on';
}

function hideToast() {
	document.getElementById('wrap').className='wrap';
}

function showPopup() {
	document.getElementById('wrap').className='wrap layer-on popup-on';
}

function hidePopup() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('popup-wrap').className='layer-wrap popup-wrap';
}

function showLogin() {
	document.getElementById('wrap').className='wrap layer-on login-on';
}

function hideLogin() {
	document.getElementById('wrap').className='wrap';
	document.getElementById('login-wrap').className='layer-wrap login-wrap';
}

function showJoinEmail() {
	document.getElementById('join-wrap').className='layer-wrap join-wrap join-email-on';
}

function showJoinSns() {
	document.getElementById('join-wrap').className='layer-wrap join-wrap join-sns-on';
}

function showJoinComplete() {
	document.getElementById('join-wrap').className='layer-wrap join-wrap join-complete-on';
}

function hideJoinComplete() {
	document.getElementById('join-wrap').className='layer-wrap join-wrap';
	document.getElementById('wrap').className='wrap logined';
}

function completeLogin() {
	document.getElementById('login-wrap').className='layer-wrap login-wrap';
	document.getElementById('wrap').className='wrap logined';
}

function toggleBtnSex(obj) {
	document.getElementById('btn-sex-female').className ='btn-sex';
	document.getElementById('btn-sex-male').className ='btn-sex';

	if ( obj.className == 'btn-sex' ){
		obj.className = 'btn-sex btn-sex-on';
	}
	else {
		obj.className = 'btn-sex';
	}
}

function toggleSelectList(obj) {
	if ( document.getElementById('select-list-wrap').className == 'select-list-wrap' ){
		document.getElementById('select-list-wrap').className = 'select-list-wrap select-on';
	}
	else {
		document.getElementById('select-list-wrap').className = 'select-list-wrap';
	}
}

function logout() {
	alert('로그아웃 되었습니다.');
	document.getElementById('wrap').className='wrap';
}

function inputStar(obj) {
	for ( i=1 ; i<11 ; i++ )
	{
		if ( obj == 's'+i )
		{
			document.getElementById('input-star-wrap').className = 'input-star-wrap input-star-on' + i;
		}
	}
}

function classDetail(obj) {
	document.getElementById('detail-explain').className='class-detail-wrap';
	document.getElementById('detail-intro').className='class-detail-wrap';
	document.getElementById('detail-epilogue').className='class-detail-wrap';
	document.getElementById('detail-delivery').className='class-detail-wrap';
	document.getElementById('tab-detail-list').className='tab-detail-list';

	if ( obj == 'tab01' ) {
		document.getElementById('detail-explain').className='class-detail-wrap block';
		document.getElementById('tab-detail-list').className='tab-detail-list tab-on01';
	}
	else if ( obj == 'tab02') {
		document.getElementById('detail-intro').className='class-detail-wrap block';
		document.getElementById('tab-detail-list').className='tab-detail-list tab-on02';		
	}
	else if ( obj == 'tab03') {
		document.getElementById('detail-epilogue').className='class-detail-wrap block';
		document.getElementById('tab-detail-list').className='tab-detail-list tab-on03';		
	}
	else {
		document.getElementById('detail-delivery').className='class-detail-wrap block';	
		document.getElementById('tab-detail-list').className='tab-detail-list tab-on04';	
	}
}

function detailMyclass(obj) {
	document.getElementById('detail-ready').className='class-detail-wrap';
	document.getElementById('detail-intro').className='class-detail-wrap';
	document.getElementById('detail-epilogue').className='class-detail-wrap';
	document.getElementById('tab-detail-list').className='tab-detail-list';

	if ( obj == 'tab01' ) {
		document.getElementById('detail-intro').className='class-detail-wrap block';
		document.getElementById('tab-detail-list').className='tab-detail-list tab-on01';
	}
	else if ( obj == 'tab02') {
		document.getElementById('detail-ready').className='class-detail-wrap block';
		document.getElementById('tab-detail-list').className='tab-detail-list tab-on02';		
	}
	else if ( obj == 'tab03') {
		document.getElementById('detail-epilogue').className='class-detail-wrap block';
		document.getElementById('tab-detail-list').className='tab-detail-list tab-on03';		
	}
}