document.addEventListener('DOMContentLoaded', () => {
  startTournament();
});

const tournamentContainer = document.getElementById('tournament');
const tournamentResultContainer = document.getElementById('tournament-result');
const resultWrap = document.querySelector('#tournament-result .tournament-result-wrap');

function startTournament() {
  const items = [
    { id: '1', name: '일라' },
    { id: '2', name: '앰프사' },
    { id: '3', name: '대니' },
    { id: '4', name: '시슬리' },
    { id: '5', name: '사라' },
    { id: '6', name: '마키' },
    { id: '7', name: '제랄디아' },
    { id: '8', name: '크리슈나' },
    { id: '9', name: '이카루스' },
    { id: '10', name: '아넥스' },
    { id: '11', name: '디아' },
    { id: '12', name: '나르키소스' },
    { id: '13', name: '아이카' },
    { id: '14', name: '쿠로신' },
    { id: '15', name: '플림턴' },
    { id: '16', name: '야요이' },
    { id: '17', name: '애슐' },
    { id: '18', name: '아포피스' },
    { id: '19', name: '나피' },
    { id: '20', name: '쿠로아이' },
    { id: '21', name: '베라' },
    { id: '22', name: '캐롤린' },
    { id: '23', name: '로잘리' },
    { id: '24', name: '처칠' },
    { id: '25', name: '나나브' },
    { id: '26', name: '에어린' },
    { id: '27', name: '베르다' },
    { id: '28', name: '라일라' },
    { id: '29', name: '플로라' },
    { id: '30', name: '도로시' },
    { id: '31', name: '호무라' },
    { id: '32', name: '시아' },
  ];

  // 초기화 함수
  function initializeTournament() {
    tournamentContainer.innerHTML = '';
    tournamentResultContainer.style.display = 'none';
    playRound(items);

    //게이지초기화
    const gauge = document.querySelector('.tournament-container .gauge');
    if (gauge) gauge.style.width = '0%';
  }

  // 32강 시작
  function playRound(items) {
    // 랜덤으로 섞기
    items = shuffleArray(items);

    if (items.length === 2) {
      tournamentContainer.innerHTML = `
      <span class="sr-only">마음에 드는 성흔을 선택해주세요!</span>
      <p class="match-round match-round--${items.length}">
      <span class="sr-only">결승</span>
      </p>
      `;
    } else {
      tournamentContainer.innerHTML = `
      <span class="sr-only">마음에 드는 성흔을 선택해주세요!</span>
      <p class="match-round match-round--${items.length}">
      <span class="sr-only">${items.length}강</span>
      </p>
      <div class="gauge-wrap"><span class="gauge"></span></span></div>
      `;
    }

    let nextRound = [];
    const matchContainer = document.createElement('div');
    matchContainer.className = 'match-container';

    for (let i = 0; i < items.length; i += 2) {
      const matchDiv = createMatch(items[i], items[i + 1], nextRound);
      matchContainer.appendChild(matchDiv);

      if (i === items.length - 2) {
        matchDiv.style.opacity = '1'; // 마지막 matchDiv를 opacity 1로 설정
      }
    }

    tournamentContainer.appendChild(matchContainer);

    function checkRoundCompletion() {
      if (nextRound.length === items.length / 2) {
        if (nextRound.length === 1) {
          setTimeout(() => {
            fadeOutElement(tournamentContainer, () => {
              const winner = nextRound[0];
              localStorage.setItem('tournamentWinner', JSON.stringify(winner));

              // 우승자를 #tournament-result 에 업데이트
              const resultImg = resultWrap.querySelector('.img');
              // const resultName = resultWrap.querySelector('.name');
              const resultBtn = resultWrap.querySelector('.btn-saveImg');

              // 랜덤으로 1부터 5까지의 숫자를 생성하는 함수
              function getRandomIndex() {
                return Math.floor(Math.random() * 5) + 1;
              }

              // const randomIndex = getRandomIndex();
              resultImg.setAttribute('data-index', getRandomIndex());

              resultImg.style.backgroundImage = `url(${$rootUrl}/common/images/tournament/${winner.id}.webp)`;
              resultImg.textContent = `${winner.name}`;
              resultBtn.href = `${$rootUrl}/common/images/tournament/${winner.id}.jpg`;
              // resultBtn.href = `?down=${winner.id}.jpg &file_name=${winner.name}.jpg &board_name=${$rootUrl}/common/images/tournament/${winner.id}.jpg`;
              resultBtn.download = `${winner.name}.jpg`;

              $(document).on('click', '.tournament-result-wrap .btn-saveImg', function () {
                const url = `${$rootUrl}/common/images/tournament/${winner.id}.jpg`;
                const fileName = `${winner.name}.jpg`;
                // const url = $(this).attr('href'); //`${$rootUrl}/common/images/tournament/${winner.id}.jpg`;
                // const fileName = $(this).attr('download'); //`${winner.name}.jpg`;

                // Fetch the image and force the download
                fetch(url)
                  .then((response) => response.blob())
                  .then((blob) => {
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = fileName;

                    // Append link to body
                    document.body.appendChild(link);

                    // Simulate click
                    link.click();

                    // Remove link from body
                    document.body.removeChild(link);
                  })
                  .catch((error) => console.error('Error downloading the image:', error));
              });

              fadeInElement(tournamentResultContainer, 300);
              setTimeout(() => {
                //애니메이션용 addclass
                $('.tournament-result-wrap').addClass('initAni');
              }, 300);

              // 다시하기 버튼에 이벤트 추가
              const restartButton = document.getElementById('btn-restart');
              restartButton.addEventListener('click', () => {
                fadeOutElement(tournamentResultContainer, () => {
                  initializeTournament();
                  $('.tournament-result-wrap').removeClass('initAni');
                  fadeInElement(tournamentContainer);
                });
              });
            });
          }, 100);
        } else {
          //다음라운드
          setTimeout(() => {
            fadeOutElement(tournamentContainer, () => {
              playRound(nextRound);
              fadeInElement(tournamentContainer);
            });
          }, 100);
        }
      }
    }

    function createMatch(item1, item2, nextRound) {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'match';
      matchDiv.style.opacity = '0';

      const button1HTML = `
        <button class="item-button">
          <div class="img" style="background-image:url(${$rootUrl}/common/images/tournament/${item1.id}.webp)">${item1.name}</div>
        </button>`;
      const button2HTML = `
        <button class="item-button">
          <div class="img" style="background-image:url(${$rootUrl}/common/images/tournament/${item2.id}.webp)">${item2.name}</div>
        </button>`;

      const button1 = createElementFromHTML(button1HTML);
      const button2 = createElementFromHTML(button2HTML);

      button1.addEventListener('click', () => {
        if (matchDiv.classList.contains('done')) return;
        matchDiv.classList.add('done');
        button2.disabled = true;
        button1.classList.add('selected');
        nextRound.push(item1);
        checkRoundCompletion();
        fadeOutMatch(matchDiv);
        updateGauge();
      });

      button2.addEventListener('click', () => {
        if (matchDiv.classList.contains('done')) return;
        matchDiv.classList.add('done');
        button1.disabled = true;
        button2.classList.add('selected');
        nextRound.push(item2);
        checkRoundCompletion();
        fadeOutMatch(matchDiv);
        updateGauge();
      });

      matchDiv.appendChild(button1);
      matchDiv.appendChild(createElementFromHTML('<span class="vs"><span class="sr-only">VS</span></span>'));
      matchDiv.appendChild(button2);

      return matchDiv;
    }

    let completedMatches = 0;
    const totalMatches = items.length / 2;
    function updateGauge() {
      const gauge = document.querySelector('.tournament-container .gauge');
      completedMatches += 1;
      const progress = (completedMatches / totalMatches) * 100;
      gauge.style.width = `${progress}%`;
    }
  }

  initializeTournament();
}

// HTML 문자열을 DOM 요소로 변환하는 함수
function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

// 배열을 랜덤으로 섞기 위한 함수
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 요소 페이드 아웃 함수
function fadeOutElement(element, callback) {
  element.style.transition = 'opacity 0.3s';
  element.style.opacity = '0';
  setTimeout(() => {
    element.style.display = 'none';
    if (callback) callback();
  }, 300);
}

// 요소 페이드 인 함수
function fadeInElement(element, timing = 100) {
  element.style.opacity = '0';
  element.style.display = 'block';
  setTimeout(() => {
    element.style.transition = 'opacity 0.3s';
    element.style.opacity = '1';
  }, timing);
}

// 매치 페이드 아웃 함수
function fadeOutMatch(matchDiv) {
  setTimeout(() => {
    matchDiv.style.transition = 'opacity 0.3s';
    matchDiv.style.opacity = '0';
    const previousMatch = matchDiv.previousElementSibling;
    if (previousMatch && previousMatch.classList.contains('match')) {
      previousMatch.style.opacity = '1';
    }
    setTimeout(() => {
      matchDiv.remove();
    }, 200);
  }, 300); //0.3초간 정지
}

function tournamentEnd() {
  $('.dimmed').fadeOut();
  $('.tournament-container').fadeOut();
  $('.tournament-result-wrap').removeClass('initAni');
}

function tournamentStart(r) {
  startTournament();
  $('.dimmed').fadeIn();
  $('.tournament-container').fadeIn();
  // fadeOutElement(tournamentResultContainer, () => {
  //   initializeTournament();
  fadeInElement(tournamentContainer);
  // });

  // $('body,html').animate({ scrollTop: $('.tournament-start-btn').offset().top - 250 }, 300);

  //시작시 모달이 화면 중앙으로 오도록 조정
  const target = $('.tournament-container');
  const targetOffset = target.offset().top;
  const targetHeight = target.outerHeight();

  const windowHeight = $(window).height();

  const scrollTopPosition = targetOffset - windowHeight / 2 + targetHeight / 2;

  if (r == 'mo') {
    $('body,html').animate({ scrollTop: $('.event-content--4').offset().top }, 300);
  } else {
    $('body,html').animate({ scrollTop: scrollTopPosition }, 300);
  }
}
