/*
データベース（連想配列）
================================================ */
// デザインされた作品一覧
const designList = [
  {
    title: "由良李海月のポートフォリオ",
    img: "24877818.png",
    tag: "website",
    tool: "VSCode/Github/Cloudflare",
    time: "1ヶ月",
    concept: `今見てるこのサイト。
              これからどんどんリニューアルするよ！`,
  },
  {
    title: "タイトル",
    img: "24877818.png",
    tag: "website",
    tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
    time: "3時間",
    concept: `簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明`,
  },
  // {
  //   title: "タイトル",
  //   img: "24877818.png",
  //   tag: "website",
  //   tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
  //   time: "3時間",
  //   concept: "簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明",
  // },
  // {
  //   title: "タイトル",
  //   img: "24877818.png",
  //   tag: "website",
  //   tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
  //   time: "3時間",
  //   concept: "簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明",
  // },
  // {
  //   title: "タイトル",
  //   img: "24877818.png",
  //   tag: "website",
  //   tool: "VSCode/Figma/Adobe XD/WordPress/Github/Cloudflare",
  //   time: "3時間",
  //   concept: "簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明簡単な説明",
  // },
  {
    title: "バナー1",
    img: "banner_image1.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `コンセプトをここに書く。
              イメージは●●`,
  },
  {
    title: "バナー2",
    img: "banner_image2.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `コンセプトをここに書く。
              イメージは●●`,
  },
  {
    title: "バナー3",
    img: "banner_image3.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `コンセプトをここに書く。
              イメージは●●`,
  },
  {
    title: "バナー4",
    img: "banner_image4.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `コンセプトをここに書く。
              イメージは●●`,
  },
  {
    title: "バナー5",
    img: "banner_image5.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `コンセプトをここに書く。
              イメージは●●`,
  },
  {
    title: "くらヒレとめんだこ",
    img: "kurahire1.png",
    tag: "illustration",
    tool: "CLIP STUDIO",
    time: "12時間",
    concept: `VTuberのキャラクターと仲良くしているめんだこのツーショット。`,
  },
  {
    title: "ミニデビとミニジェル",
    img: "minis.png",
    tag: "illustration",
    tool: "CLIP STUDIO",
    time: "1時間",
    concept: `メイトナリーのキャラクター。
              ユーピア（種族名）の遣い。`,
},
  {
    title: "バナー6",
    img: "banner_image6.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `「●●（本の名前）」を模写してさんこうコンセプトをここに書く。
              イメージは●●`,
  },
  {
    title: "バナー7",
    img: "banner_image7.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `コンセプトをここに書く。
              イメージは●●`,
  },
  {
    title: "バナー8",
    img: "banner_image8.jpg",
    tag: "banner",
    tool: "Photoshop/illustrator/CLIP STUDIO",
    time: "3時間",
    concept: `コンセプトをここに書く。
              イメージは●●`,
  },
];

// スキル一覧
const skillList = [
  {
    title: "Webデザイン",
    level: "30",
    detail: `Webサイトを作成するうえで、目的や要望に沿って作成するよう心がけてます。
            ページ階層をツリー状の図にして、大まかなデザインのラフを作成します。
            Adobe XD（やFigma）を使用した簡単なデザインカンプを作成します。`,
  },
  {
    title: "コーディング",
    level: "70",
    detail: `HTML・CSSを使用し、デザインカンプを正しく再現します。
            Javascriptを使用し、アニメーションなどサイトに簡単な動きを加えることも可能です。
            タグの配置、命名規則など見やすいコーディングを目指しています。
            使用しているエディターはVisual Studio Codeです。
            業務経験があります。`,
  },
  {
    title: "Photoshop",
    level: "60",
    detail: `写真や画像の色調補正やレタッチ、合成ができます。
            バナーやポスター、サムネなど作成できます。`,
  },
  {
    title: "Illustration",
    level: "50",
    detail: `ロゴや簡単なイラスト、名刺、図など作成できます。
            文字や図形が多めなバナーやポスター、サムネなど作成できます。`,
  },
  {
    title: "Word",
    level: "90",
    detail: `報告書や企画書、見積書、送付状などの社内外向けのビジネス文書を作成可能です。
            データや図を挿入した見やすい資料を作成します。
            テンプレートや宛名リストの差し込みを使用し、作業効率化をします。
            業務経験があります。`,
  },
  {
    title: "Excel",
    level: "90",
    detail: `リストやグラフの作成、ピボットテーブルを使用したデータ分析が可能です。
            SUM、AVERAGE、VLOOKUPなどの関数が使用可能です。
            簡易なマクロ作成ができます。
            業務経験があります。`,
  },
  {
    title: "PowerPoint",
    level: "90",
    detail: `プレゼンテーションや提案資料の作成できます。
            アニメーション効果やデザイン設定が可能です。`,
  },
  {
    title: "イラストレーション",
    level: "70",
    detail: `2頭身～5頭身のキャラクターを描くのが得意です。
            人間以外のキャラクターや無機物も描けます。
            SNSなどのアイコン作成やゲームなどの立ち絵も描くことが可能です。`,
  },
  {
    title: "動画編集",
    level: "70",
    detail: `数分の動画から長時間の動画編集が可能です。
            カット、字幕、効果音、BGMなど視聴者に飽きさせない見やすい動画制作をしています。`,
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

// 横幅が一定数いくとクラスを削除
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
  tool.classList.add("omake");
  time.classList.add("omake");

  title.textContent = web['title'];
  tag.textContent = '#' + web['tag'];
  tool.textContent = web['tool'];
  time.textContent = '制作期間：' + web['time'];
  concept.innerHTML = web['concept'].replace(/\n/g, `<br>`);

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
  tool.classList.add(".omake");
  time.classList.add(".omake");

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
const designS = document.querySelectorAll('.design');
const designM = document.querySelector('.designMain');

const designMainImg = designM.querySelector('img');
const designMainSpan = designM.querySelector('span');
const designMainH3 = designM.querySelector('h3');
const designMainText = designM.querySelectorAll('p');

// 初期設定
designMainSpan.textContent = designS[0].querySelector('span').textContent;
designMainH3.textContent = designS[0].querySelector('h3').textContent;
designMainText[0].textContent = designS[0].querySelectorAll('p')[0].textContent;
designMainText[1].textContent = designS[0].querySelectorAll('p')[1].textContent;
designMainText[2].innerHTML = designS[0].querySelectorAll('p')[2].textContent.replace(/\n/g, `<br>`);
designMainImg.src = designS[0].querySelector('img').src;

// メイン画像を変更する
designS.forEach((element) => {
  const design = element.querySelector('.designImage img');
  const span = element.querySelector('.designText span');
  const h3 = element.querySelector('.designText h3');
  const text = element.querySelectorAll('.designText p');

  design.addEventListener('mouseover', (event) => {
    designMainSpan.textContent = span.textContent;
    designMainH3.textContent = h3.textContent;
    designMainText[0].textContent = text[0].textContent;
    designMainText[1].textContent = text[1].textContent;
    designMainText[2].innerHTML = text[2].textContent.replace(/\n/g, `<br>`);
    designMainImg.src = event.target.src;
    designMainImg.animate({opacity: [0, 1]}, 500);
  });
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

  const SVG_NS = "http://www.w3.org/2000/svg";

  // タグ追加
  const divSkill = document.createElement('div');
  const skillLevel = document.createElement('div');
  const skillTitle = document.createElement('div');
  const circleBase = document.createElementNS(SVG_NS,'circle');
  const circleLine = document.createElementNS(SVG_NS,'circle');
  const svg = document.createElementNS(SVG_NS,"svg")
  const span = document.createElement('span');
  const title = document.createElement('p');
  const level = document.createElement('p');
  const tooltipText = document.createElement('span');

  // 要素追加
  divSkill.classList.add("skill", "tooltip");
  circleBase.classList.add("base");
  circleLine.classList.add("line", `lineSkill${skill['level']}`);
  skillLevel.classList.add("skillLevel");
  skillTitle.classList.add("skillTitle");
  tooltipText.classList.add("tooltipText");

  title.textContent = skill['title'];
  level.textContent = skill['level'];
  span.textContent = "%";
  tooltipText.innerHTML = skill['detail'].replace(/\n/g, `<br>`);

  // DOM追加
  divSkill.appendChild(svg);
  svg.appendChild(circleBase);
  svg.appendChild(circleLine);
  divSkill.appendChild(skillLevel);
  divSkill.appendChild(skillTitle);
  skillLevel.appendChild(level);
  skillTitle.appendChild(title);
  level.appendChild(span);
  divSkill.appendChild(tooltipText);

  skillSpace.appendChild(divSkill);
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
          filter: ['blur(.1rem)', 'blur(0)'],
          translate: ['0 4rem', 0],
          // rotate: ['z 5deg', 0],
        },
        {
          duration: 1500,
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
