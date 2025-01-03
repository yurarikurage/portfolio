/*
データベース（連想配列）
================================================ */
// デザインされた作品一覧
const designList = [
  {
    title: "由良李海月のポートフォリオ",
    img: "24877818.png",
    tag: "website",
    tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
    concept: "今見てるこのサイト。これからどんどんリニューアルするよ！",
    time: "3時間",
  },
  {
    title: "タイトル",
    img: "24877818.png",
    tag: "website",
    tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
    time: "3時間",
    concept: "簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明",
  },
  {
    title: "タイトル",
    img: "24877818.png",
    tag: "website",
    tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
    time: "3時間",
    concept: "簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明",
  },
  {
    title: "タイトル",
    img: "24877818.png",
    tag: "website",
    tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
    time: "3時間",
    concept: "簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明",
  },
  {
    title: "タイトル",
    img: "24877818.png",
    tag: "website",
    tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
    time: "3時間",
    concept: "簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明",
  },
  {
    title: "バナー",
    img: "banner_image1.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
  {
    title: "バナー",
    img: "banner_image2.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
  {
    title: "バナー",
    img: "banner_image3.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
  {
    title: "バナー",
    img: "banner_image4.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
  {
    title: "バナー",
    img: "banner_image5.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
  {
    title: "バナー",
    img: "banner_image6.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
  {
    title: "バナー",
    img: "banner_image7.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
  {
    title: "バナー",
    img: "banner_image8.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: "コンセプトをここに書く。",
  },
];

// スキル一覧
const skillList = [
  {
    title: "Webサイト",
    level: "70",
  },
  {
    title: "Photoshop",
    level: "60",
  },
  {
    title: "illustrator",
    level: "50",
  },
  {
    title: "Word",
    level: "90",
  },
  {
    title: "Excel",
    level: "90",
  },
  {
    title: "PowerPoint",
    level: "90",
  },
];

// SNS一覧
const snsList = [
  {
    title: "X",
    url: "url",
  },
  {
    title: "pixiv",
    url: "url",
  },
  {
    title: "FANBOX",
    url: "url",
  },
  {
    title: "skeb",
    url: "url",
  },
  {
    title: "ココナラ",
    url: "url",
  },
];

console.log(designList);
console.log(skillList);
console.log(snsList);

/*
マウスストーカー
================================================ */
const mouseStalker = document.getElementById('mouseStalker');
let msPos = {
  // マウスストーカーの位置
  s: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2
  },
  // マウスポインターの位置
  m: {
    x: document.documentElement.clientWidth / 2,
    y: document.documentElement.clientHeight / 2
  }
};
// マウスポインターの位置取得
document.addEventListener('mousemove', function(e){
  msPos.m.x = e.clientX;
  msPos.m.y = e.clientY;
});
// アニメーション開始
requestAnimationFrame(msPosUpdate);
// マウスストーカーを動かす関数
function msPosUpdate() {
  msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
  msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
  const x = Math.round(msPos.s.x * 10) / 10;
  const y = Math.round(msPos.s.y * 10) / 10;
  mouseStalker.style.transform = `translate3d(` + x + 'px,' + y + 'px, 0)';
  requestAnimationFrame(msPosUpdate);
}

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
ナビゲーションメニュー
================================================ */
const menuBtn = document.querySelector('.menuBtn');
const menuBack = document.querySelector('.menuBack');
const menuNav = document.querySelector('#nav');
const activeDel = document.querySelectorAll('.active');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuBack.classList.toggle("active");
  menuNav.classList.toggle("active");
  // menuBack.animate({translate: ['100vw', 0]}, menuOptions);
});

console.log(window.innerWidth);

if (window.innerWidth <= 1000) {
  console.log(window.innerWidth);
  activeDel.forEach(() => {
    activeDel.classList.remove("active");
  });
}

/*
ウェブサイトギャラリー
================================================ */
const webSpace = document.querySelector('#webSpace');
const designSpace = document.querySelector('#designSpace .designEyecatch');

designList.forEach((designList) => {
  if (designList['tag'] == "website") {
    inWeb(designList);
  } else {
    inDesign(designList);
  }
});

// ウェブサイトリスト
function inWeb(web) {
  // タグ追加
  const divWeb = document.createElement('a');
  const webEyecatch = document.createElement('div');
  const webText = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('h3');
  const tag = document.createElement('span');
  const tool = document.createElement('p');
  const concept = document.createElement('p');
  const time = document.createElement('p');
  const imgsrc = `images/${web['img']}`;

  // 要素追加
  divWeb.classList.add("web", "fadein");
  webEyecatch.classList.add("webEyecatch");
  img.setAttribute('src', imgsrc);
  img.setAttribute('alt', web['title']);
  webText.classList.add("webText");
  title.classList.add("h3");
  tag.classList.add("text");
  tool.classList.add("text", "omake");
  time.classList.add("text", "omake");
  concept.classList.add("text");

  title.textContent = web['title'];
  tag.textContent = '#' + web['tag'];
  tool.textContent = web['tool'];
  time.textContent = '制作期間：' + web['time'];
  concept.textContent = web['concept'];

  // DOM追加
  // divWeb.appendChild(a);
  divWeb.appendChild(webEyecatch);
  webEyecatch.appendChild(img);
  divWeb.appendChild(webText);
  webText.appendChild(tag);
  webText.appendChild(title);
  webText.appendChild(tool);
  webText.appendChild(time);
  webText.appendChild(concept);

  webSpace.appendChild(divWeb);
  // console.log(divWeb);
};

// デザインリスト
function inDesign(design) {
  // タグ追加
  const divDesign = document.createElement('div');
  const designImage = document.createElement('div');
  const designText = document.createElement('div');
  const img = document.createElement('img');
  const title = document.createElement('h3');
  const tag = document.createElement('span');
  const tool = document.createElement('p');
  const concept = document.createElement('p');
  const time = document.createElement('p');
  const imgsrc = `images/${design['img']}`;

  // 要素追加
  divDesign.classList.add("design");
  designImage.classList.add("designImage");
  img.setAttribute('src', imgsrc);
  img.setAttribute('alt', design['title']);
  designText.classList.add("designText");
  title.classList.add("h3");
  tag.classList.add("text");
  tool.classList.add("text", ".omake");
  time.classList.add("text", ".omake");
  concept.classList.add("text");

  title.textContent = design['title'];
  tag.textContent = '#' + design['tag'];
  tool.textContent = design['tool'];
  concept.textContent = design['concept'];
  time.textContent = design['time'];

  // DOM追加
  divDesign.appendChild(designImage);
  designImage.appendChild(img);
  divDesign.appendChild(designText);
  designText.appendChild(tag);
  designText.appendChild(title);
  designText.appendChild(tool);
  designText.appendChild(time);
  designText.appendChild(concept);

  designSpace.appendChild(divDesign);
  // console.log(divDesign);
};


/*
デザインギャラリー
================================================ */
const designMain = document.querySelector('.designMain img');
const designImage = document.querySelectorAll('.designImage img');
const designMainText = document.querySelector('.designMainText');
const designText = document.querySelectorAll('.designText');

const designS = document.querySelectorAll('.design');
const designM = document.querySelectorAll('.designMain');


designImage.forEach((designImage) => {
  console.log(designImage);
  designImage.addEventListener('mouseover', (event) => {
    designMain.src = event.target.src;
    designMain.animate({opacity: [0, 1]}, 500);
  });
});


designS.forEach((element) => {
  const design = element.querySelector('.designImage img');
  const text = element.querySelector('.designText');
  console.log(design);
  console.log(text);

  // console.log(text);
  // image.addEventListener('mouseover', (event) => {
  //   designMain.src = event.target.src;
  //   designMain.animate({opacity: [0, 1]}, 500);
  // });
});

/*
スキル
================================================ */
const skillSpace = document.querySelector('#skillSpace');

skillList.forEach((skillList) => {
  inSkill(skillList);
});

// ウェブサイトリスト
function inSkill(skill) {
  // タグ追加
  const divSkill = document.createElement('div');
  const skillLevel = document.createElement('div');
  const skillTitle = document.createElement('div');
  const circleBase = document.createElement('circle');
  const circleLine = document.createElement('circle');
  const svg = document.createElement('svg');
  const span = document.createElement('span');
  const title = document.createElement('p');
  const level = document.createElement('p');

  // 要素追加
  divSkill.classList.add("skill", "fadein");
  circleBase.classList.add("base");
  // circleBase.setAttribute('cx', "100");
  // circleBase.setAttribute('cy', "100");
  // circleBase.setAttribute('r', "80");
  circleLine.classList.add("line", `lineSkill${skill['level']}`);
  // circleLine.setAttribute('cx', "100");
  // circleLine.setAttribute('cy', "100");
  // circleLine.setAttribute('r', "80");
  skillLevel.classList.add("skillLevel");
  skillTitle.classList.add("skillTitle");

  title.textContent = skill['title'];
  level.textContent = skill['level'];
  span.textContent = "%";

  // DOM追加
  divSkill.appendChild(svg);
  svg.appendChild(circleBase);
  svg.appendChild(circleLine);
  divSkill.appendChild(skillLevel);
  divSkill.appendChild(skillTitle);
  skillLevel.appendChild(level);
  skillTitle.appendChild(title);
  level.appendChild(span);

  // skillSpace.appendChild(divSkill);
  // console.log(divSkill);
};

// 動きを付与する
const animateLine = (entries, obs) => {
  entries.forEach((entry) => {
    // console.log(entry);
    // console.log(lineElements);
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
          duration: 1200,
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
