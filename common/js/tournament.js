document.addEventListener('DOMContentLoaded', () => {
  startTournament();
});

function startTournament() {
  const tournamentContainer = document.getElementById('tournament');

  const tournamentResultContainer = document.getElementById('tournament-result');

  const resultWrap = document.querySelector('#tournament-result .tournament-result-wrap');

  const items = [
    { id: '1', name: '일라' },
    { id: '2', name: '앰프사' },
    // { id: '3', name: '대니' },
    // { id: '4', name: '시슬리' },
    // { id: '5', name: '사라' },
    // { id: '6', name: '마키' },
    // { id: '7', name: '제랄디아' },
    // { id: '8', name: '크리슈나' },
    // { id: '9', name: '이카루스' },
    // { id: '10', name: '아넥스' },
    // { id: '11', name: '디아' },
    // { id: '12', name: '나르키소스' },
    // { id: '13', name: '아이카' },
    // { id: '14', name: '쿠로신' },
    // { id: '15', name: '플림턴' },
    // { id: '16', name: '야요이' },
    // { id: '17', name: '애슐' },
    // { id: '18', name: '아포피스' },
    // { id: '19', name: '나피' },
    // { id: '20', name: '쿠로아이' },
    // { id: '21', name: '베라' },
    // { id: '22', name: '캐롤린' },
    // { id: '23', name: '로잘리' },
    // { id: '24', name: '처칠' },
    // { id: '25', name: '나나브' },
    // { id: '26', name: '에어린' },
    // { id: '27', name: '베르다' },
    // { id: '28', name: '라일라' },
    // { id: '29', name: '플로라' },
    // { id: '30', name: '도로시' },
    // { id: '31', name: '호무라' },
    // { id: '32', name: '시아' },
  ];

  // 초기화 함수
  function initializeTournament() {
    tournamentContainer.innerHTML = '';
    playRound(items);
  }

  // 32강 시작
  function playRound(items) {
    // 랜덤으로 섞기
    items = shuffleArray(items);

    if (items.length === 2) {
      tournamentContainer.innerHTML = `
      <p class="title--select"><span class="sr-only">성흔을 선택해주세요!</span></p>
      `;
      // /* /<h2>결승전</h2>
    } else {
      tournamentContainer.innerHTML = `
      <p class="title--select"><span class="sr-only">성흔을 선택해주세요!</span></p>
      `;
      // /* /<h2>${items.length}강</h2>
    }

    let nextRound = [];

    const matchContainer = document.createElement('div');
    matchContainer.className = 'match-container';

    for (let i = 0; i < items.length; i += 2) {
      const matchDiv = document.createElement('div');
      matchDiv.className = 'match';

      const item1 = items[i];
      const item2 = items[i + 1];

      const button1HTML = `
        <button class="item-button">
          <div class="img" style="background-image:url(../common/images/tournament/${item1.id}.png)"> <span class="sr-only">${item1.name}</span></div>          
        </button>`;
      const button2HTML = `
        <button class="item-button">
          <div class="img" style="background-image:url(../common/images/tournament/${item2.id}.png)"> <span class="sr-only">${item2.name}</span></div>          
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
      });

      button2.addEventListener('click', () => {
        if (matchDiv.classList.contains('done')) return;
        matchDiv.classList.add('done');
        button1.disabled = true;
        button2.classList.add('selected');
        nextRound.push(item2);
        checkRoundCompletion();
        fadeOutMatch(matchDiv);
      });

      matchDiv.appendChild(button1);
      matchDiv.appendChild(createElementFromHTML('<span class="vs"><span class="sr-only">VS</span></span>'));
      matchDiv.appendChild(button2);

      matchContainer.appendChild(matchDiv);
    }

    tournamentContainer.appendChild(matchContainer);

    function checkRoundCompletion() {
      if (nextRound.length === items.length / 2) {
        //S: 결과 내오기
        if (nextRound.length === 1) {
          setTimeout(() => {
            tournamentContainer.style.transition = 'opacity 0.3s';
            tournamentContainer.style.opacity = '0';

            setTimeout(() => {
              const winner = nextRound[0];
              localStorage.setItem('tournamentWinner', JSON.stringify(winner));

              // 우승자를 #tournament-result 에 업데이트
              const resultImg = resultWrap.querySelector('.img');
              const resultName = resultWrap.querySelector('.name');
              const resultBtn = resultWrap.querySelector('.download-btn');

              resultImg.style.backgroundImage = `url(../common/images/tournament/${winner.id}.png)`;
              resultName.textContent = `${winner.name}`;
              resultBtn.href = `../common/images/tournament/${winner.id}.png`;
              resultBtn.download = `${winner.name}.png`;

              // 페이드인/페이드아웃 효과 적용
              tournamentContainer.style.display = 'none';
              tournamentResultContainer.style.display = '';
              setTimeout(() => {
                tournamentResultContainer.style.transition = 'opacity 0.3s';
                tournamentResultContainer.style.opacity = '1';
              }, 100);

              // 다시하기 버튼에 이벤트 추가
              const restartButton = document.getElementById('restart-btn');
              restartButton.addEventListener('click', initializeTournament);

              tournamentContainer.style.opacity = '1';
            }, 500);
          }, 100);
        } //E: 결과 내오기
        else {
          setTimeout(() => {
            tournamentContainer.style.transition = 'opacity 0.3s';
            tournamentContainer.style.opacity = '0';
            setTimeout(() => {
              playRound(nextRound);
              tournamentContainer.style.opacity = '1';
            }, 500);
          }, 100);
        }
      }
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

// 매치 페이드 아웃 함수
function fadeOutMatch(matchDiv) {
  setTimeout(() => {
    matchDiv.style.transition = 'opacity 0.3s';
    matchDiv.style.opacity = '0';
    setTimeout(() => {
      // matchDiv.style.display = 'none';
      matchDiv.remove();
    }, 200);
  }, 500); //0.5초간 정지
}

function tournamentStart() {
  $('.tournament-container').fadeIn();
}
function tournamentEnd() {
  $('.tournament-container').fadeOut();
}
