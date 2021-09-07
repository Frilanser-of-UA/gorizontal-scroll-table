$(document).ready(function () {
	$('.scrollable').each(function () {
		var caption = $(this).find('caption');
		var th = $(this).find('th');
		var captionHeight = caption.outerHeight(true);
		var thHeight = th.outerHeight();
		var totalHeight = captionHeight + thHeight;
		caption.css({ marginTop: '-' + totalHeight + 'px' });
		$(this).css({ marginTop: 'calc(' + captionHeight + 'px' + ' + 1em)' });
	});
});
$(document).ready(function () {
});
// ========================спойлер===============
$(document).ready(function () {
	$('.faq__toggle').click(function (event) {
		if ($('.faq__item').hasClass('_open-one')) {
			$('.faq__toggle').not($(this)).removeClass('active');
			$('.faq__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});