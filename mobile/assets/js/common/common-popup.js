//## 팝업열기
$(document).on('click', '.popup-link', function () {
  var targetPopupName = $(this).attr('data-popup');
  $('#' + targetPopupName)
    .fadeIn()
    .css('display', 'flex');
  return false;
});

// ## 팝업 닫기 함수.
function closed_popup() {
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

// 팝업 영역 외 클릭시 닫기
// $('.popup').on('click', function (e) {
//   if (!$(e.target).closest('.popup__wrap').length) {
//     closed_popup();
//   }
// });

$(document).ready(function () {
  // ## 동영상 팝업 열기
  $('body').on('click', '.popup-link--video', function () {
    $('.popup--video').addClass('open').fadeIn('300');
    SetYoutube($(this).attr('data-content'));
    return false;
  });
});

// ## 동영상 세팅
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
    // audio.pause();

    youtube = '<iframe id="video" width="900" height="576" src="' + youtubeUrl + '?autoplay=1" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen></iframe>';
    $('.you_tube').html(youtube);
  }
}
