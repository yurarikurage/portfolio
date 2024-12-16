/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loadingScreen');
const loadingText = document.querySelector('#loading p');
const loader = document.querySelector('#loader');

window.addEventListener('load', () => {
  // ローディング中（一枚目）
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中（二枚目）
  loadingAreaGreen.animate(
    {
      translate: ['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay: 800,
      easing: 'ease',
      fill: 'forwards',
    }
  );  

  // ローディング中の丸
  loader.animate(
    [
      {
        opacity: 1,
        offset: .8  //80%
      },
      {
        opacity: 0,
        offset: 1  //100%
      },
    ], 
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中テキスト
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8  //80%
      },
      {
        opacity: 0,
        offset: 1  //100%
      },
    ], 
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

/*
バナーギャラリー
================================================ */
const bannerMain = document.querySelector('.bannerMain img');
const bannerImage = document.querySelectorAll('.bannerImage img');

bannerImage.forEach((bannerImage) => {
  bannerImage.addEventListener('mouseover', (event) => {
    bannerMain.src = event.target.src;
    bannerMain.animate({opacity: [0, 1]}, 500);
  });
});

/*
スキル
================================================ */
const animateLine = (entries, obs) => {
  entries.forEach((entry) => {
    // console.log(entry);
    console.log(lineElements);
    if(entry.isIntersecting) {
      lineElements.forEach((lineElement) => {
        lineElement.classList.add("lineSkill");
      });
    }
  });
};
const lineObaerver = new IntersectionObserver(animateLine);
const lineElements = document.querySelectorAll('.line');
lineElements.forEach((lineElement) => {
  lineObaerver.observe(lineElement);
});

/*
スクロールで要素を表示
================================================ */
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 3rem', 0],
          // rotate: ['z 5deg', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(animateFade);
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

