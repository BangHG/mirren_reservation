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
    stretch: '300',
    scale: '0.9',
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
  threshold: 20, //드래그무시

  effect: 'coverflow',
  coverflowEffect: {
    rotate: '0',
    modifier: 1,
    slideShadows: false,
    stretch: '300',
    scale: '0.9',
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
      $(this).parent().parent().parent().find('.tab-content').removeClass('active');

      $(this).addClass('active');
      $('#' + active).addClass('active');

      // setTimeout(() => {
      //   mediaVideoSwiper.init();
      //   mediaPictureSwiper.init();
      // }, 200);//안해도되네?
      return false;
    });
});

//  .d88b.  .d8888b   8888b.  88888b.
// d88P"88b 88K          "88b 888 "88b
// 888  888 "Y8888b. .d888888 888  888
// Y88b 888      X88 888  888 888 d88P
//  "Y88888  88888P' "Y888888 88888P"
//      888                   888
// Y8b d88P                   888
//  "Y88P"                    888
const ST_MEDIA = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-media',
    start: 'top center',
    end: 'bottom',
    //// markers: true,
    scrub: 1,
    onEnter: () => {
      TL_MEDIA.clock();
    },
    //   const activeSlide = $('.section-media .swiper .swiper-slide-active');
    //   TL_MEDIA.clock();
    //   activeSlide.addClass('initAni');
    // },
    // onEnterBack: () => {
    //   const activeSlide = $('.section-media .swiper .swiper-slide-active');
    //   activeSlide.addClass('initAni');
    // },
  },
});

gsap.set('.section-media .bg-clock--outer', { rotation: 40 });

const TL_MEDIA = {
  clock: () => {
    var tl = gsap.timeline();
    tl.to('.section-media .bg-clock--outer', {
      rotation: 0,
      duration: 5,
      // opacity: 1,
      // y: 0,
    });
  },
};
