//## 팝업열기
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  open_blind();
  $('.' + targetPopupName)
    .fadeIn()
    .css('display', 'flex');
  return false;
});

// ## 팝업 요청 시 블라인드 액션 함수.
function open_blind() {
  $('.blind, .blind--btnClosed').fadeIn(300);
}
// ## 팝업 닫기 요청 시 액션 함수.
function closed_popup() {
  $('.blind, .blind--btnClosed').fadeOut(300);
  $('.popup--video').removeClass('open');
  $('.you_tube').empty();
  $('.popup').hide();
  return false;
}

$(document).keyup(function (e) {
  if (e.key === 'Escape') {
    closed_popup();
  }
});

// ## 동영상팝업 열기
$(document).ready(function () {
  $('body').on('click', '.popup-link--video', function () {
    open_blind();
    $('.popup--video').addClass('open').fadeIn('300');
    SetYoutube($(this).attr('data-content'));
    return false;
  });
});

// ## 게임영상 부분 유튜브 url 설정
function SetYoutube() {
  var youtube = '';
  var youtubeUrl = arguments[0];
  if (youtubeUrl == '' || youtubeUrl == null) {
    closed_popup();
    $('.popup--video').removeClass('open');
    alert('Coming soon.');
  } else {
    //오디오 정지

    var audio = document.getElementById('cv_audio');
    audio.pause();

    youtube = '<iframe id="video" width="900" height="576" src="' + youtubeUrl + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    $('.you_tube').html(youtube);
  }
}
