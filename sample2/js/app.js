import {
  $wrapArea,
  $headerArea,
  $windowArea,
  $bestArea,
  $footerArea,
} from "./component.js";


function render () {
  const wrap = document.querySelector(".wrap");
  wrap.innerHTML = $wrapArea;
  const header = document.querySelector(".header");
  header.innerHTML = $headerArea;
  const banner = document.querySelector(".banner_area")
  const window = document.querySelector(".window_banner");
  window.innerHTML = $windowArea;
  const best = document.querySelector(".best_product");
  best.innerHTML = $bestArea;
  const footer = document.querySelector('.footer_area');
  footer.innerHTML = $footerArea;
  
  createUtilLi();

}

render();

function createUtilLi () {
  const Links = ['#', '#', '#', '#']; // href 배열로 넣기
  const utils = ['주문조회', '회원가입', '로그인']; 
  const Ul = document.querySelector('.utils_area ul')
  const ultilsLi = utils.map((util, i) => {
    const liComponent = `
    <li><a href="${Links[i]}">${util}</a></li>
    `
    return liComponent
  })
  Ul.innerHTML = ultilsLi.join('');

}


