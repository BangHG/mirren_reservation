const mediaVideoSwiper = new Swiper('.mediaSwiper--video .swiper-container', {
  speed: 500,
  spaceBetween: 0,
  loop: false,
  threshold: 20, //드래그무시

  effect: 'coverflow',
  coverflowEffect: {
    rotate: '0',
    modifier: 1,
    slideShadows: false,
    depth: '0',
    scale: '1',
    scale: '0.77',
    stretch: '630',
  },
  pagination: {
    el: '.mediaSwiper--video .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.mediaSwiper--video .swiper-button--next',
    prevEl: '.mediaSwiper--video .swiper-button--prev',
  },
});
const mediaPictureSwiper = new Swiper('.mediaSwiper--picture .swiper-container', {
  speed: 500,
  spaceBetween: 0,
  loop: false,

  effect: 'coverflow',
  coverflowEffect: {
    rotate: '0',
    modifier: 1,
    slideShadows: false,
    depth: '0',
    scale: '1',
    scale: '0.77',
    stretch: '630',
  },
  pagination: {
    el: '.mediaSwiper--picture .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.mediaSwiper--picture .swiper-button--next',
    prevEl: '.mediaSwiper--picture .swiper-button--prev',
  },
});

$('#media-tab').each(function (e) {
  $(this)
    .find('.tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();

      $(this).parent().parent().find('.tab-link').removeClass('active');
      // $(this).parent().parent().parent().find('.tab-content').removeClass('active'); //fadeOut();
      $(this).parent().parent().parent().find('.tab-content').removeClass('active'); //.hide(); //fadeOut();

      $(this).addClass('active');
      // $('#' + active).addClass('active'); //fadeIn();
      $('#' + active).addClass('active');
      // .show();

      // setTimeout(() => {
      //   mediaVideoSwiper.init();
      //   mediaPictureSwiper.init();
      // }, 200);
      return false;
    });
});
