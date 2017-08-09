/* 
 * by zhe-he
 * 特别说明 1rem = 100px
 */
(function () {
		var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = window.innerWidth;
			if (!clientWidth) return;
			if (clientWidth >= 600 && clientWidth < 768)
			{
				document.documentElement.style.fontSize = '18.5px';
			}
			else if (clientWidth >= 768)
			{
				document.documentElement.style.fontSize = '30px';
			}
			else
			{
				document.documentElement.style.fontSize = (clientWidth / 20) + 'px';
			}
		};
	window.addEventListener(resizeEvt, recalc, false);
	recalc();
})();