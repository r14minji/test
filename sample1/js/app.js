import {
  $contentArea,
  $headerArea,
  $navArea,
  $slideBaber,
  $contentsArea,
  $bestArea,
  $footerArea,
} from "./component.js";

function createUtilsLi() {
  const ul = document.querySelector(".utils_area ul");
  const Links = ["#", "#", "#", "#"]; // href 배열로 넣기
  const utils = ["주문조회", "회원가입", "로그인"];
  const createUtils = utils.map((util, i) => {
    const utilCoponent = `
  <li>
    <a href=${Links[i]}>${util}</a>
  </li>
  `;
    return utilCoponent;
  });

  ul.innerHTML = createUtils;
}

function createSocialLi() {
  const ul = document.querySelector(".social_area ul");
  const links = [
    "fas fa-star",
    "fab fa-instagram",
    "fab fa-apple",
    "fab fa-google-play",
    "fab fa-facebook",
  ];
  console.log(links);
  const createSocials = links.map((link) => {
    const socialComponent = `
      <li>
        <a href= "#"><i class="${link}"></i></a>
      </li>
    `;
    return socialComponent;
  });
  ul.innerHTML = createSocials;
}

function render() {
  const wrap = document.querySelector(".wrap");
  wrap.innerHTML = $contentArea;
  const header = document.querySelector(".header");
  header.innerHTML = $headerArea;
  createUtilsLi();

  const nav = document.querySelector(".nav_area");
  nav.innerHTML = $navArea;

  const slideBanner = document.querySelector(".slide_banner");
  slideBanner.innerHTML = $slideBaber;

  // $slideBaber.setAttribute(
  //   "src",
  //   "http://img.just-one.co.kr/shopping_mall/mainimage/spot1111.jpg"
  // );

  const constents = document.querySelector(".contents_area");
  constents.innerHTML = $contentsArea;
  const bestArea = document.querySelector(".weekly_best");
  bestArea.innerHTML = $bestArea;

  const footer = document.querySelector(".footer");
  footer.innerHTML = $footerArea;

  createSocialLi();
}

render();
