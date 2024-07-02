// 이상형 카드 커서 인터랙션
$(function () {
  $('.event-content--4 .box').mousemove(function (e) {
    if ($('.tournament-container').is(':hidden')) {
      var offset = $(this).offset(),
        constante = 5,
        x = e.pageX - offset.left,
        y = e.pageY - offset.top,
        rx = (($(this).height() / 2 - y) / ($(this).height() / 2)) * constante * 2,
        ry = ((-1 * ($(this).width() / 2 - x)) / ($(this).width() / 2)) * constante;
      // console.log(`${x}`, `${y}`);
      $('.event-content--4 .box__box').css({
        transform: 'rotateX(' + rx + 'deg)' + ' ' + 'rotateY(' + ry + 'deg)',
        transition: 'none',
      });
    }
  });
  $('.event-content--4 .box').mouseleave(function (e) {
    $('.event-content--4 .box__box').css({
      transform: 'rotateX(' + 0 + 'deg)' + ' ' + 'rotateY(' + 0 + 'deg)',
      transition: '1000ms all',
    });
  });
});
