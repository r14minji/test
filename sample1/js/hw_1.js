console.log('Hello World');

window.onload = (function() {
    
    //social_area
    const socials = ['fas fa-star','fab fa-instagram','fab fa-apple','fab fa-google-play','fab fa-facebook'];
    socials.map((social) => {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        const i = document.createElement('i');
        const ul = document.querySelector('.social_area ul');
        
        ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(i);
        a.href = "#"; // 여기에 각각의 링크를 걸려면..?
        i.className = social;
        
    })

    //utils_area
    const utils = ['로그인','장바구니','회원가입','마이페이지'];
    utils.map((util)=> {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        const ul = document.querySelector('.utils_area ul');

        ul.appendChild(li);
        li.appendChild(a);
        a.innerText =util;
    })

    //nav
    const menus = ['NEW10%','BEST100','PANTS','+PLUS SIZE','TOP']
    menus.map((menu) => {
    const li = document.createElement('LI');
    const a = document.createElement('A');
    const ul = document.querySelector('.nav ul');

    ul.appendChild(li);
    li.appendChild(a);
    a.innerText=menu;
    })
    
    //card_banner
    const links = ['http://img.just-one.co.kr/shopping_mall/mainimage/banner_four1.jpg','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four2.jpg','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four3.gif','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four4.jpg']
    links.map((link) => {
        const div = document.createElement("DIV");
        const img = document.createElement('IMG');
        const cardbanner = document.querySelector('.card_banner')
        div.className = ('card');
        img.src = link;
        
        cardbanner.appendChild(div);
        div.appendChild(img);

    })
    
    
    //item_area
    const div = document.createElement("DIV");
    const img = document.createElement('IMG');
    const ItemBox = document.querySelector('.item_area')
    div.className = ('item_img');
    img.src = "http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436";
        
    ItemBox.appendChild(div);
    div.appendChild(img);

    const h3 = document.createElement('H3');
    h3.className = ('TITLE')
    const title = document.createElement('세뮤니 뒷밴딩 플레어 데님스커트');
    h3.appendChild(title);
    ItemBox.appendChild(h3);
    
    const p1 = document.createElement('P');
    p1.className = ('PRICE')
    const price = document.createTextNode('5200원');
    p1.appendChild(price);
    ItemBox.appendChild(p1);
    
    const p2 = document.createElement('P');
    p2.className = ('label');
    const span1 = document.createElement('SPAN');
    span1.className = ('MARK1')
    const mark1 = document.createTextNode('단독입고');
    span1.appendChild(mark1);

    const span2 = document.createElement('SPAN');
    span2.className = ('MARK2');
    const mark2 = document.createTextNode('주문폭주');
    span2.appendChild(mark2);

    p2.appendChild(span1);
    p2.appendChild(span2);
    ItemBox.appendChild(p2);

    const p3 = document.createElement('P');
    p3.className = ('REVIEW')
    const review = document.createTextNode('리뷰: 40개');
    p3.appendChild(review);
    ItemBox.appendChild(p3);
    


})




