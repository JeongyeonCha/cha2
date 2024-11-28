// 제품 데이터 배열
const products = [
    { title: "GRANHAND_multi Perfume", image: "granhand1.png", description: "음 향기롭군..."  },
    { title: "COS_ribbed alpaca blend beanie", image: "b.png", description:"비니는 진짜 유명한 패션 아이템임 그러나 이마를 벅벅 긁게 될 수 있기에 피가 나지 않도록 주의해야 한다" },
    { title: "ENZO BLUES_sleeve muffler", image: "muffler.png", description:"니트의 소매처럼 생겼지만 놀랍게도 이것은 머플러이다. 이러한 디자인은 사람들의 호기심을 자극하여 만나는 사람마다 머플러의 끝에 손을 넣어볼 확률이 높으며 이에 따라 끝단이 금새 늘어나버린다" },
    { title: "GRANHAND_sachet", image: "granhand2.png", description:"사쉐를 집에 걸어두면 귀가본능이 더욱 강해진다" },
    { title: "MINITMUTE_tobo bag", image: "m.png", description:"자석으로 잠금장치가 되어있는 원통 형태의 가방은 소매치기를 당할 확률이 높다" },
    { title: "LE LABO_body cream", image: "L.png", description:"히노키 향의 꾸덕한 바디크림은 빠르게 건조함을 없애주나 바르기가 귀찮다" },
    { title: "MUJI_mug cup", image: "cup.png", description:"마음에 들어 자주 쓰는 컵은 설거지가 귀찮다" },
    { title: "BCOMMAD_80s dot pillow cover", image: "pillow.png", description:"귀여운 도트 패턴을 지닌 베개커버는 환공포증을 일으킬 수 있다"},
    { title: "MORLHAUS_stripe room shoes", image: "morl.png", description:"자취를 시작하며 로망에 빠져 구매한 실내화는 오브제가 된다" },
    { title: "DIPTYQUE_eaudessens", image: "O.png", description:"오렌지 나무 향의 향수는 오렌지 냄새가 나지 않는다" },
    { title: "MINITMUTE_brett bag", image: "m2.png", description:"나같은 미니멀리스트들은 가방이 클 경우 인형을 넣어 채우면 된다" },
    { title: "TEKLA_terry towel", image: "t.png", description:"예쁘고 비싼 수건은 선물 받으면 좋다" },
    { title: "RAIVE_magaret in grey", image: "r.png", description:"예쁜 맛에 신는 양말은 하루에 5천번씩 흘러내린다" },
    { title: "OVERDUE FLAIR_of vintage cap", image: "cap.png", description:"콘헤드에게는 어려운 모자이다" },
    { title: "BCOMMAD_pink beige pillow cover", image: "pillow2.png", description:"예쁘다" },
    { title: "EFOR_wave open ring", image: "ring.png" , description:"울퉁불퉁 볼드한 링을 끼면 양쪽 손가락이 고통받는다"},
    { title: "JANSPORT_super break", image: "jansport.png", description:"많은 이들과 공유하는 커플 아이템이다" },
    { title: "GBH_daily hand wash", image: "gbh.png", description:"향이 좋다는 이유로 손을 자주 씻으면 떼수건같은 손바닥이 된다." },
    { title: "ROCKFISH WEATHERWEAR_wisley ribbon flat", image: "rock.png" , description:"얇은 플랫슈즈를 신으면 다른 이들에게 나의 발가락 생김새를 고스란히 보여줄 수 있다"},
    { title: "MINITMUTE_clo mini", image: "clo.png", description:"미니 사이즈의 가방은 너무 작다" },
    { title: "COZYMOZY_ugly bird keyring", image: "cozy.png", description:" 배보다 배꼽이 크다" },
    { title: "AESOP_geranium leaf body balm", image: "aesop.png", description:"핸드크림을 바르고 핸드폰을 하면 지문이 남는다" },
    { title: "NIKE_cortez black and sail", image: "cor.png", description:"돌돌클: 돌고 돌아 클래식" },
    { title: "APPLE_macbook pro", image: "mac.png", description:"우유를 쏟으면 수리비가 250만원이 나온다." },
    { title: "MILLIMETER MILLIGRAM_webed note L blank 2", image: "note.png", description:"예쁜 노트가 생기면 1주일 정도는 열정이 생긴다" },
    { title: "BOSS_qc35 II", image: "boss.png", description:"세상과 단절되고 싶을 때 활용하기 좋다" },
    { title: "LEXON_mina s", image: "lexon.png", description:"작고 소중해......." },
    { title: "KENYA HARA_designing design", image: "book.png", description:"나에게 몇 안 되는 완독 한 책들 중 하나이다" },
    { title: "LANEIGE_lip sleeping mask", image: "lip.png", description:"탐스러운 입술을 갖고 싶다면" },
    { title: "JBLOOM_round dounut mugcup", image: "cup2.png", description:"예쁜 노트가 생기면 딱 1주일 열정이 생긴다" }
];


const floatingObjects = document.querySelector('.floating-objects');

products.forEach((product, index) => {
    const silhouette = document.createElement('div');
    silhouette.classList.add('silhouette');

    silhouette.style.backgroundImage = `url(${product.image})`;
    silhouette.style.width = '100px';  
    silhouette.style.height = '100px'; 
    silhouette.style.position = 'absolute';
    silhouette.style.backgroundSize = 'contain';
    silhouette.style.backgroundRepeat = 'no-repeat';
    silhouette.style.backgroundPosition = 'center';
    silhouette.style.filter = 'brightness(0) saturate(100%)'; 

    silhouette.style.top = `${Math.random() * 70}%`;
    silhouette.style.left = `${10 + Math.random() * 70}%`; 

    silhouette.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`;

    floatingObjects.appendChild(silhouette);
});

// 메인 페이지로 전환 함수
function navigateToMain() {
    const introScreen = document.getElementById('intro-screen');
    const mainPage = document.getElementById('main-page');

    introScreen.style.display = 'none'; // 첫 화면 숨기기
    mainPage.classList.remove('hidden'); // 메인 페이지 표시
    document.body.style.overflow = 'auto'; // 스크롤 활성화
}

// HTML 요소 선택
const gridContainer = document.querySelector('.grid-container');
const popup = document.getElementById('popup');
const popupImg = popup.querySelector('img'); 
const popupTitle = popup.querySelector('.popup-title'); 
const popupDescription = popup.querySelector('.popup-description'); 

// 메인 페이지 제품 목록 동적 추가
products.forEach((product, index) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    // 이미지 추가 (초기에는 실루엣 이미지를 추가)
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    img.style.filter = 'brightness(0) saturate(100%)'; // 검은 실루엣으로 초기 설정

    gridItem.appendChild(img);
    gridContainer.appendChild(gridItem);

    // 마우스 오버 시 실루엣 대신 실제 이미지 표시
    gridItem.addEventListener('mouseover', () => {
        img.style.filter = 'none';
    });

    // 마우스 아웃 시 다시 실루엣으로 변경
    gridItem.addEventListener('mouseout', () => {
        img.style.filter = 'brightness(0) saturate(100%)';
    });

    // 팝업 열기 이벤트
    gridItem.addEventListener('click', () => openPopup(product));
});

// 팝업 열기 함수
function openPopup(product) {
    popupImg.src = product.image; 
    popupImg.alt = product.title;
    popupImg.style.filter = 'none'; // 팝업 이미지에서는 필터를 제거하여 실제 이미지 표시
    popupTitle.textContent = product.title;
    popupDescription.textContent = product.description || "설명이 없습니다."; 
    popup.classList.add('visible'); 
}

// 팝업 닫기 함수
function closePopup() {
    popup.classList.remove('visible'); 
}