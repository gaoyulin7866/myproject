var poprule = document.getElementById('pop_rule');
var toprule = document.getElementsByClassName("show");
function show() {
	poprule.style.display = 'block';
	$('.over_lay').addClass('over-lay')
	var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });
	
};
function hide() {
	poprule.style.display = 'none';
	$('.over_lay').removeClass('over-lay')
}