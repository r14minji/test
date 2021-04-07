console.log('Hello World');

window.onload = (function() {
    const menus = ['NEW10%','BEST100','PANTS','+PLUS SIZE','TOP']
   menus.map((menu) => {
    const li = document.createElement('LI');
    const a = document.createElement('A');
    const ul = document.querySelector('.nav ul');

    ul.appendChild(li);
    li.appendChild(a);
    a.innerText=menu;

    })
    
    // const cards = ['http://img.just-one.co.kr/shopping_mall/mainimage/banner_four1.jpg','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four2.jpg','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four3.gif','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four4.jpg']
    // cards.map((link)=> {
    //     const img = document.createElement('IMG');
    //     const card = document.getElementById('card');
    //     const banner = document.querySelector('.card_banner');
    //     banner.appendChild(card);
    //     card.appendChild(img);
    //     img.src = link
    // })

    
    const utils = ['로그인','장바구니','회원가입','마이페이지'];
    utils.map((util)=> {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        const ul = document.querySelector('.utils_area ul');

        ul.appendChild(li);
        li.appendChild(a);
        a.innerText=util;
    })
})
