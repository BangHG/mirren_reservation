const witchThumbSwiper = new Swiper('.section-witch .swiper-thumb .swiper-container', {
  speed: 300,
  allowTouchMove: false,
  freeMode: true,
  threshold: 20, //드래그무시
  // watchSlidesProgress: true,
  // loop: false,
  // width: 'auto',
  // focusableElements: '',
});

const witchSwiper = new Swiper('.section-witch .swiper .swiper-container', {
  speed: 300,
  spaceBetween: 0, //100,
  loop: false,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  // thumbs: {
  //   swiper: witchThumbSwiper,
  // },
});

witchSwiper.on('slideChange', function () {
  $('.section-witch .swiper .swiper-slide').removeClass('initAni');
  // $('.section-witch .swiper .swiper-slide-active').addClass('initAni');
  // $('.section-witch .swiper-thumb .swiper-slide-thumb-active .thumb-btn').addClass('active');
});

witchSwiper.on('slideChangeTransitionStart', function () {
  $('.section-witch .swiper .swiper-slide-active').addClass('initAni');
});

$('.witch-tab .thumb-btn').on('click', function () {
  $('.section-witch .thumb-btn').removeClass('active');
  const btnIndex = $(this).attr('data-witch');
  witchSwiper.slideTo(getSlideIndexByClass('.section-witch', 'witch--' + btnIndex));
  $(this).addClass('active');
});

const stigmataSwiper = new Swiper('.section-stigmata .swiper .swiper-container', {
  speed: 200,
  spaceBetween: 0, //100,
  loop: false,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

stigmataSwiper.on('slideChange', function () {
  $('.section-stigmata .swiper .swiper-slide').removeClass('initAni');
});
stigmataSwiper.on('slideChangeTransitionStart', function () {
  $('.section-stigmata .swiper .swiper-slide-active').addClass('initAni');
});

//성흔 탭
$('#stigmata-tab').each(function (e) {
  $(this)
    .find('.tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();
      $(this).parent().parent().find('.tab-link').removeClass('active');
      $(this).parent().parent().parent().find('.tab-content').stop().removeClass('active');
      //.hide();
      // btn해제
      $('#stigmata-tab .thumb-btn').removeClass('active');

      $('#' + active)
        .find('.thumb-btn')
        .first()
        .addClass('active'); //탭컨텐츠 내 첫 btn에 포커스

      $(this).addClass('active'); //클릭한 탭에 active

      //슬라이드 이동
      const btnIndex = $(this).attr('data-moveTo');
      // stigmataSwiper.slideTo(btnIndex);
      stigmataSwiper.slideTo(getSlideIndexByClass('.section-stigmata', 'stigmata--' + btnIndex));

      //탭 컨텐츠 나타나기
      // setTimeout(() => {
      $('#' + active)
        .stop()
        .addClass('active');
      // .fadeIn();

      //.show();
      // }, 200);
      return false;
    });
});
function stigmataTab() {
  $('.stigmata-group').each(function () {
    $(this).find('.thumb-btn:nth-child(1)').addClass('active');
  });
  //tab 클릭하면 이동
  $('#stigmata-tab .thumb-btn').on('click', function () {
    // const id = $(this).attr('id');
    if ($(this).hasClass('active')) {
    } else {
      // console.log(id);
      $('#stigmata-tab .thumb-btn').removeClass('active');
      $(this).stop().addClass('active');
    }
  });
}

// $.ajax({
//   type: 'GET',
//   url: `${$rootUrl}/common/json/stigmata.json`,
//   dataType: 'json',
// }).done(function (data) {

const angelList = [
  { tribe: '1', id: '11', name: '신코우', cv_ja: '하세가와 이쿠미', spec: '<p>생일: 6/30</p> <p>종족: 비르투스 천사</p> <p>키: 165cm</p> <p>체중: 0.2kg * 천사의 체중은 깃털보다 가볍다</p>', desc: '인류 최초의 기록에 따르면 동틀 무렵 아침 노을과 함께 나타나 하늘을 핏빛으로 붉게 물들었다는 전설의 천사. <br> 남들이 보기엔 그저 차가운 천사 같지만, <br> 사실 그녀는 말주변이 없을 뿐…' },
  { tribe: '1', id: '12', name: '사라', cv_ja: '사토 사토미', spec: '<p>생일: 1/10</p> <p>종족: 세라프 천사</p> <p>키: 167cm</p> <p>체중 :0.25kg * 천사의 체중은 깃털보다 가볍다</p>', desc: '여섯 날개를 가진 ‘세라프 천사’ 중 가장 오래된 천사. <br> 사라는 용감하고 정직하며 <br> 확고한 신념을 가지고 있다. 약간의 황소 고집을 가진 것은 우리만의 비밀로 알고 있도록 하자.' },
  { tribe: '1', id: '13', name: '그레이', cv_ja: '오조라 나오미', spec: '<p>생일: 8/31</p> <p>종족: 케루브 천사</p> <p>키: 165cm</p> <p>체중: 0.14kg * 천사의 체중은 깃털보다 가볍다</p>', desc: '인간세상에서 전사한 영혼들을 <br>천계로 인도하는 사명을 가진 천사.<br> 그레이는 10만년 이상 무예를 갈고 닦으며 살아왔기 때문에 융통성이라고는  없어 보이지만 따뜻한 마음을 가지고 있다.' },
  { tribe: '1', id: '14', name: '호무라', cv_ja: '네모토 미야리', spec: '<span>생일 : 8/2</span> <span>종족: 비르투스 천사</span> <span>키 : 148cm</span> <span>체중 : 0.13kg * 천사의 체중은 깃털보다 가볍다</span>', desc: '작고 동글동글하게 생겨 귀여운 여동생 같은 이미지가 강하지만  의외로 성숙하고 책임감이 강한 천사.<br> 오랜 세월을 살아왔기 때문에 여동생보다는 손주를 대하듯 따뜻한 할머니의 느낌이 난다.' },
  { tribe: '1', id: '15', name: '디아', cv_ja: '사토미 사토', spec: '<span>생일 : 6/22</span> <span>종족: 비르투스 천사</span> <span>키 : 161cm</span> <span>체중 : 0.18kg * 천사의 체중은 깃털보다 가볍다</span>', desc: '천계의 질서를 상징하는 천사. 늘 차가워 보이고 무정해 <br>보인다.  디아는 천계의 질서를 지키는 사명을 가지고 있어 <br>늘 엄.근.진한 모습을 자주 보여주지만 <br> 속으로는 더 관대해지고 싶어 한다.' },
  { tribe: '2', id: '21', name: '나나브', cv_ja: '아라미 사토미', spec: '<p>생일: 9/16</p> <p>종족:  야고르인</p> <p>키: 165cm</p> <p>체중: 53kg</p>', desc: '거리 마술로 생계를 유지하는 고아 출신 마술사.<br> 가장 자신 있는 마술이 고작 흰 비둘기를 소환하는 것 뿐이지만 사실 그녀는 본인도 모르는 <br> 천부적인 마법 능력을 가지고 있다.' },
  { tribe: '2', id: '22', name: '캐롤린', cv_ja: '이시카와 유이', spec: '<p>생일: 1/5</p> <p>종족: 발라르인</p> <p>키:  163cm</p> <p>체중: 47kg</p>', desc: '왕국의 허락없이 귀족과 악마 사이에서 태어난 혼혈인. <br> 그녀의 아버지는 딸을 지키기 위해 그녀를 멀리 떨어진 곳에 숨겼고 그녀는 부모의 얼굴도 모른 채 살아간다. ' },
  { tribe: '2', id: '23', name: '도로시', cv_ja: '호리에 유이', spec: '<p>생일: 9/29</p> <p>종족:  야고르인</p> <p>키:  144cm</p> <p>체중: 40kg</p>', desc: '작은 체구와 귀여운 외모와 달리<br> 말을 거침없이 하는 스타일.<br> 자신이 생각하는 정의를 따르기 위해 성직자가 되었고 항상 마음 속에 신실하고 경건한 마음을 가지고 있다.' },
  { tribe: '2', id: '24', name: '에어린', cv_ja: '아카오 히카루', spec: '<span>생일 : 7/20</span> <span>종족 :  야고르인</span> <span>키 :  135cm</span> <span>체중 : 32kg</span>', desc: '사파릴 왕국의 둘째 공주. <br> 주변 사람을 잘 챙기며 따뜻한 심성을 가졌다. <br> 암투로 가득한 다른 왕실과는 다르게 <br>매우 행복한 어린 시절을 보냈다. ' },
  { tribe: '2', id: '25', name: '시슬리', cv_ja: '토마츠 하루카', spec: '<span>생일 : 10/11</span> <span>종족 :  야고르인</span> <span>키 :  135cm</span> <span>체중 : 32kg</span>', desc: '이중인격의 소녀.<br> 순수하고 사랑스러운 소녀와 <br>차갑고 잔인한 소녀의 인격을 가지고 있다. ' },
  { tribe: '3', id: '31', name: '야요이', cv_ja: '아마미야 소라', spec: '<p>생일: 3/7</p> <p>종족: 오카즈 하프 </p> <p>키: 132cm</p> <p>체중 :31kg</p>', desc: '상냥하고 따뜻한 마음을 가지고 있고 모성애가 강하다. <br>그녀는 폰티 제국에서 재위 기간이 <br>두번째로 긴 군주이기도 했다.' },
  { tribe: '3', id: '32', name: '아넥스', cv_ja: '오나카 아이', spec: '<p>생일: 11/23</p> <p>종족: 오카즈 하프 </p> <p>키: 165cm</p> <p>체중 :55kg</p>', desc: '아기 때 숲에 버려졌지만 <br>씩씩하고 명랑한 성격을 가지고 있다. <br>천둥번개를 조종하는 능력을 가지고 있어서 <br>많은 음유시인들은 그녀를 천둥의 요괴라고 부르기도 한다.' },
  { tribe: '3', id: '33', name: '코스모스', cv_ja: '모니시타 치사키', spec: '<p>생일: 3/10</p> <p>종족: 오카즈 하프 </p> <p>키:  148cm</p> <p>체중: 40kg</p>', desc: '겁도 많고 수줍음도 많다.<br> 친해지면 애교도 많고 들이대는 성격. <br>허약한 체질이기 때문에 성흔이 되기 어려웠지만 자신의 힘을 증명하여 성흔이 되었다.' },
  { tribe: '3', id: '34', name: '마키', cv_ja: '타무라 유카리', spec: '<span>생일 : 3/15</span> <span>종족 : 오카즈 하프 </span> <span>키 :  145cm</span> <span>체중 : 40kg</span>', desc: '화이트&블랙 컬러의 긴 양 갈래 머리와 <br>오드아이 눈동자를 가지고 있다. <br>평소에는 매우 사납지만, <br>주인 앞에서는 한 마리의 순한 양이 된다.' },
  { tribe: '3', id: '35', name: '샌디', cv_ja: '치넨 아키호', spec: '<span>생일 : 3/18</span> <span>종족 : 콜른 하프 </span> <span>키 :  141cm</span> <span>체중 : 38kg</span>', desc: '매사 적극적으로 남을 돕고<br> 믿음직한 모습을 보여주려고 하지만 <br>강약 조절이 부족해 매번 일을 <br>엉망으로 만들어 버리는 천진난만한 소녀.' },
  { tribe: '4', id: '41', name: '나피', cv_ja: '아라이 사토미', spec: '<p>생일: 11/1</p> <p>종족: 안자스 악마</p> <p>키: 145cm</p> <p>체중: 40kg</p>', desc: '장난기 가득한 악마.<br> 나피는 마왕의 마지막 자손으로,  <br>태어났을 때 &quot;마왕에 못지않은 대마왕이 될 것&quot;이라는 <br>예언을 받기도 했다.' },
  { tribe: '4', id: '42', name: '스파클', cv_ja: '오구라 유이', spec: '<p>생일: 10/10</p> <p>종족: 아카시 악마</p> <p>키: 143cm</p> <p>체중: 3.6kg</p>', desc: '강자를 숭상하는 심연의 여러 종족 사이에서도 <br>역사상 가장 위대한 악마로 꼽히는 악마 종족의 무녀이다. ' },
  { tribe: '4', id: '43', name: '페넬로페', cv_ja: '아스미 카나', spec: '<p>생일: 1/15</p> <p>종족: 아델라 악마</p> <p>키: 163cm</p> <p>체중: 47kg</p>', desc: '귀여운 외모를 가지고 있지만 성격이 괴팍하고 나태하다.<br> 타인과 말 섞는 것을 극도로 꺼려 하여 <br>인형의 몸속에 자신의 심장을 이식했다.<br> 늘 인형을 껴안고 혼잣말을 하는 버릇이 있다.' },
  { tribe: '4', id: '44', name: '쿠로신', cv_ja: '키토 아카리', spec: '<span>생일 : 5/25</span> <span>종족 : 플레임 악마</span> <span>키 : 157cm</span> <span>체중 : 45kg</span>', desc: '다른 세계에서 온 인기 아이돌이자 플레임 데빌의 둘째 공주. <br>말이나 행동이 평범한 여고생 같지만, <br>화가 나면 심한 장난으로 보복하는 귀여운 악마.' },
  { tribe: '4', id: '45', name: '메르티', cv_ja: '코하라 코노미', spec: '<span>생일 : 9/28</span> <span>종족 : 아델라 악마</span> <span>키 : 154cm</span> <span>체중 : 53kg</span>', desc: '이상한 요술을 부리는 마법사로 <br>서커스단에 들어간 악마 소녀.<br> 서커스단과 함께 여러 지역을 돌아다니며<br> 인간과의 교류가 늘어나면서 인간이 되고 싶다고 생각한다.' },
  { tribe: '5', id: '51', name: '플로라', cv_ja: '아스미 카나', spec: '<p>생일: 밝혀지지 않음</p> <p>종족: 우드 엘프</p> <p>키: 156cm</p> <p>체중: 6kg * 엘프는 매우 가볍다.</p>', desc: '활발하고 명랑한 시골 소녀같은 엘프 소녀. <br>인간에 대한 호기심이 강하지만<br> 인간에게 무시 당할까봐 두려워하는 마음도 가지고 있다. ' },
  { tribe: '5', id: '52', name: '크리슈나', cv_ja: '카쿠마 아이', spec: '<p>생일: 2/20</p> <p>종족: 우드엘프 </p> <p>키: 157cm</p> <p>체중: 5.7kg * 엘프는 매우 가볍다.</p>', desc: '일찍 부모님을 여읜 우드 엘프. <br>우연한 기회에 엘프 여왕을 모시게 되었고 이후 수백 년간의 독서와 연구로 마법 구조 분야의 대가로 불리게 된다.' },
  { tribe: '5', id: '53', name: '필리시아', cv_ja: '사토 리나', spec: '<p>생일: 11/20</p> <p>종족: 우드엘프</p> <p>키: 165cm</p> <p>체중: 6.7kg * 엘프는 매우 가볍다.</p>', desc: '알프 제국 역사상 첫 우드 엘프 사령관. <br>여러 전쟁에 참여하여 전투 경험이 매우 풍부한 베테랑이다. <br>엄격한 사령관이지만 적당히 풀어 줄 줄도 아는 츤데레이다.' },
  { tribe: '5', id: '54', name: '로잘리', cv_ja: '히라츠카 사에', spec: '<span>생일 : 12/28 </span> <span>종족 : 로스트엘프</span> <span>키 : 158cm</span> <span>체중 : 5.9kg * 엘프는 매우 가볍다.</span>', desc: '평소 나무 아래에 앉아 ‘류트’라는 악기를 연주하면<br> 휴식을 취하는 것을 좋아한다.<br> 조용한 성격이라 시끄러운 것을 싫어한다.' },
  { tribe: '5', id: '55', name: '애슐', cv_ja: '오미가와 치아키', spec: '<span>생일 : </span> <span>종족 : 다크엘프</span> <span>키 : 162cm</span> <span>체중 : 6.2kg * 엘프는 매우 가볍다.</span>', desc: '마조히즘 성향의 과격한 다크 엘프. <br>가족의 반대를 무릅쓰고 희망의 땅으로 향했다가 <br>잔혹한 현실에 눈을 뜨게 된다.' },
  { tribe: '6', id: '61', name: '제랄디아', cv_ja: '이시카와 유이', spec: '<p>생일: 2/10</p> <p>종족: 글로리아 드래곤</p> <p>키: 165cm</p> <p>체중: 79kg</p>', desc: '시간이 흐를수록 점점 강해져 <br>모든 힘의 한계를 뛰어넘은 힘의 상징이 된다.<br> 하지만 세상 물정에는 어두워 <br>상식이 조금 부족해 보이기도 한다.' },
  { tribe: '6', id: '62', name: '대니', cv_ja: '사토 리나', spec: '<p>생일: 4/27</p> <p>종족:  글로리아 드래곤</p> <p>키: 175cm</p> <p>체중: 97kg</p>', desc: '드래곤 왕국의 마지막 후계자. <br>조기 교육의 폐해?로 집착 수준의 정의를 추구한다.<br> 가끔 어딘가 부족하지만 귀엽게 느껴지는 수준이다. <br>드래곤의 본성 때문에 의의로 물욕이 있는 편이다.' },
];

function playStigmata(list) {
  var stigmataItem = '';

  //성흔 탭(썸네일) 뿌리기
  var stigmataTab1 = '';
  var stigmataTab2 = '';
  var stigmataTab3 = '';
  var stigmataTab4 = '';
  var stigmataTab5 = '';
  var stigmataTab6 = '';

  $.each(list, function (index, item) {
    if (item.tribe === '1') {
      stigmataTab1 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '2') {
      stigmataTab2 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '3') {
      stigmataTab3 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '4') {
      stigmataTab4 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '5') {
      stigmataTab5 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '6') {
      stigmataTab6 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
  });

  $('#tabContent1 .stigmata-group').html(stigmataTab1);
  $('#tabContent2 .stigmata-group').html(stigmataTab2);
  $('#tabContent3 .stigmata-group').html(stigmataTab3);
  $('#tabContent4 .stigmata-group').html(stigmataTab4);
  $('#tabContent5 .stigmata-group').html(stigmataTab5);
  $('#tabContent6 .stigmata-group').html(stigmataTab6);

  stigmataTab();

  // 성흔 리스트 뿌리기
  $.each(list, function (index, angel) {
    stigmataItem += `<div class="swiper-slide stigmata stigmata--` + angel.id + `">`;
    stigmataItem += `<div class="bg"></div> <div class="ch"> </div>`;
    stigmataItem += `<div class="spec"> <img loading="lazy" src="${$rootUrl}/web/assets/images/stigmata/` + angel.id + `_spec.webp"> <p class="sr-only"> ` + angel.spec + `</p> </div>`;
    stigmataItem += `<div class="title-bx">`;
    stigmataItem += `<p class="name"> ` + angel.name + ` </p>`;
    stigmataItem += `<dl class="cv"><dt>CV</dt>`;
    // stigmataItem += `<dd><img loading="lazy" src="${$rootUrl}/common/audio/` + angel.id + `_ko.png" alt="` + angel.cv_ko + `" /><button class="cv-btn" data-audio="` + angel.id + `_ko"></button></dd>`;
    stigmataItem += `<dd><img loading="lazy" src="${$rootUrl}/common/audio/` + angel.id + `_ja.png" alt="` + angel.cv_ja + `" /><button class="cv-btn" data-audio="` + angel.id + `_ja"></button></dd>`;
    stigmataItem += `</dl>`;
    stigmataItem += `<p class="desc"> ` + angel.desc + ` </p>`;
    stigmataItem += `</div></div>`;
  });

  $('#stigmataList').html(stigmataItem);

  $('#stigmata-tab .thumb-btn').on('click', function () {
    const btnIndex = $(this).attr('id');
    stigmataSwiper.slideTo(getSlideIndexByClass('.section-stigmata', btnIndex));
    // console.log('여기로갑시다 ' + btnIndex);
  });
  audioCv();
}
playStigmata(angelList);

//오디오 제어
function audioCv() {
  var audio = document.getElementById('cv_audio');
  $('.cv-btn').on('click', function () {
    $('.cv-btn').removeClass('active');
    audio.pause();

    // 갈아끼기
    const resource = $(this).attr('data-audio');

    $('#cv_audio').attr('src', `${$rootUrl}/common/audio/${resource}.wav`);
    // console.log(resource);
    $(this).addClass('active');
    //재생
    audio.play();
  });
  //재생이 완료되면 버튼 불끄기
  audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    $('.cv-btn').removeClass('active');
  });
}

const worldSwiper = new Swiper('.section-world .swiper-container', {
  speed: 500,
  spaceBetween: 0, //100,
  loop: true,
  // allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.section-world .swiper-button--next',
    prevEl: '.section-world .swiper-button--prev',
  },
});
