import {
  $wrapArea,
  $headerArea,
  $windowArea,
  $bestArea,
  $footerArea,
} from "./component.js";

function render() {
  const wrap = document.querySelector(".wrap");
  wrap.innerHTML = $wrapArea;
  const header = document.querySelector(".header");
  header.innerHTML = $headerArea;
  const banner = document.querySelector(".banner_area");
  const bannerComponent = `
    <img src="https://image.adidas.co.kr/upload/banner/a28d4598dd984e8c87c26dc6689d8f7e_0222095110.JPG" alt="아디다스 공식 온라인 홈페이지 홍보물입니다.">
    <button class="buy">구매하기</button>
    <button class="detail">자세히 보기</button>
  `;
  banner.innerHTML = bannerComponent;

  const window = document.querySelector(".window_banner");
  window.innerHTML = $windowArea;
  const best = document.querySelector(".best_product");
  best.innerHTML = $bestArea;
  const footer = document.querySelector(".footer_area");
  footer.innerHTML = $footerArea;

  const searchArea = document.querySelector(".search");
  const searchComponent = `
    <form class="item_srearch">
          <input type="text">
          <button>
            <i class="fas fa-search"></i>
          </button>
      </form>
  `;
  searchArea.innerHTML = searchComponent;

  const fSNSUl = document.querySelector(".SNS ul");
  const fSNSli = `
  <li><a href="#"><i class="fab fa-facebook"></i></a>
  </li>
  <li><a href="#"><i class="fab fa-twitter"></i></a>
  </li>
  <li><a href="#"><i class="fab fa-instagram"></i></a>
  </li>
  <li><a href="#"><i class="fab fa-youtube"></i></a>
  </li>
  `;
  fSNSUl.innerHTML = fSNSli;

  const fSiteMapUl = document.querySelector(".sitemap");
  const fSiteMapLi = `
  <dl>
    <dt>PRODUCTS</dt>
    <dd>
      <ul>
        <li>신상품</il>
        <li>인기상품</il>
        <li>할인상품</il>
        <li>공식아울렛</il>
      </ul>
    </dd>
  </dl>
  <dl>
    <dt>SPORTS</dt>
    <dd>
      <ul>
        <li>축구</il>
        <li>러닝</il>
        <li>농구</il>
        <li>트레이닝</il>
      </ul>
    </dd>
  </dl>
  <dl>
    <dt>COMPANY INFO</dt>
    <dd>
      <ul>
        <li>회사소개</li>
        <li>채용정보</li>
      </ul>
    </dd>
  </dl>
  <dl>
    <dt>MEMBERSHIP</dt>
    <dd>
      <ul>
        <li>아디클럽</li>
        <li>캠페인</li>
        <li>아디클럽 스포츠</li>
        <li>ADIDAS RUNNERS</li>
      </ul>
    </dd>
  </dl>
  <dl>
    <dt>SUPPORT</dt>
    <dd>
      <ul>
        <li>고객센터1588-8241</li>
        <li>주문/배송조회</li>
        <li>1:1문의</li>
        <li>매장안내</li>
      </ul>
    </dd>
  </dl>
  `;
  fSiteMapUl.innerHTML = fSiteMapLi;
  createUtilLi();
  createMenuLi();
  windowBannerDiv();
  createBestProduct();
  createFootMenu();
}

render();

function createUtilLi() {
  const Links = ["#", "#", "#", "#"]; // href 배열로 넣기
  const utils = ["주문조회", "회원가입", "로그인"];
  const Ul = document.querySelector(".utils_area ul");
  const ultilsLi = utils.map((util, i) => {
    const liComponent = `
    <li><a href="${Links[i]}">${util}</a></li>
    `;
    return liComponent;
  });
  Ul.innerHTML = ultilsLi.join("");
}

function createMenuLi() {
  const Ul = document.querySelector(".gnb_menu ul");
  const gnbs = ["MAN", "WOMEN", "KIDS", "SPORTS", "BRANDS"];
  const munuLi = gnbs.map((gnb) => {
    const MenuLiComponent = `
    <li>${gnb}</li>
    `;
    return MenuLiComponent;
  });
  Ul.innerHTML = munuLi.join("");
}

function windowBannerDiv() {
  const bannerWrap = document.querySelector(".banner_wrap");
  const Bannerlinks = [
    {
      url: "https://image.adidas.co.kr/upload/banner/174df423138247e689a80e1d7356f65d_0205165958.JPG",
      BUTTON: "구매하기",
    },
    {
      url: "https://image.adidas.co.kr/upload/banner/588ec794838f4252ab424f29e7c80d9d_0226134623.jpg",
      BUTTON: "구매하기",
    },
    {
      url: "https://image.adidas.co.kr/upload/banner/ec600721ca254075be354a5400160b7b_0219105556.jpg",
      BUTTON: "자세히 보기",
    },
    {
      url: "https://image.adidas.co.kr/upload/banner/12680e1c5ad64bbd8cffaa4f73298c94_0303110225.jpg",
      BUTTON: "자세히보기",
    },
  ];

  const bannerDiv = Bannerlinks.map((link) => {
    const bannerComponent = `
    <div class="banner">
      <img src="${link.url}" art="#">
    <button>${link.BUTTON}</button>
    </div>
    `;
    return bannerComponent;
  });
  bannerWrap.innerHTML = bannerDiv.join("");
}

function createBestProduct() {
  const bestProductList = [
    {
      url: "https://image.adidas.co.kr/upload/prod/basic/source/GN3577-01-04.jpg",
      art: "트라이컬러 트랙팬츠",
      title: "트라이컬러 트랙팬츠",
      price: "87,200원",
    },
    {
      url: "https://image.adidas.co.kr/upload/prod/basic/source/GN3368-01-04.jpg",
      art: "프리미엄 스웨트팬츠",
      title: "프리미엄 스웨트팬츠",
      price: "79,200원",
    },
    {
      url: "https://image.adidas.co.kr/upload/prod/basic/source/H18824-01-02.jpg",
      art: "크롭 풀집 후디",
      title: "크롭 풀집 후디",
      price: "71,200원",
    },
    {
      url: "https://image.adidas.co.kr/upload/prod/basic/source/GR0594-01-02.jpg",
      art: "마이쉘터 4-in-1 파카",
      title: "마이쉘터 4-in-1 파카",
      price: "265,300원",
    },
  ];
  const sectionItemAreas = document.querySelector(".item_area");
  const bestProcuctDiv = bestProductList.map((list) => {
    const bestComponent = `
    <div class="item">
      <img src="${list.url}" art="${list.art}" />
      <p>${list.title}</P>
      <p class="fee">${list.price}</p>
    </div>
    `;
    return bestComponent;
  });
  sectionItemAreas.innerHTML = bestProcuctDiv.join("");
}

function createFootMenu() {
  const Ul = document.querySelector(".f_menu ul");
  const liList = [
    "주문배송",
    "아디클럽",
    "공지사항",
    "매장안내",
    "고객센터1588-8241",
  ];
  const fMenuLi = liList.map((list) => {
    const fMenuComponent = `
    <li>${list}</li>
    `;
    return fMenuComponent;
  });
  Ul.innerHTML = fMenuLi.join("");
}
