console.log('Hello World');

window.onload = (function() {
    
    //social_area
    const SicialLink = ['#', '#', '#', '#', '#'];
    const socials = ['fas fa-star','fab fa-instagram','fab fa-apple','fab fa-google-play','fab fa-facebook'];
    socials.map((social, i) => {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        const i = document.createElement('i');
        const ul = document.querySelector('.social_area ul');
        
        ul.appendChild(li);
        li.appendChild(a);
        a.appendChild(i);
        a.setAttribute('href', SicialLink[i]) = "#"; // 링크거는 법
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
   const LIST = [
        {
            ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
            art:'데님스커트',
            title:'세뮤니 뒷밴딩 플레어 데님스커트',
            fee: '17900원',
            label: '단독주문',
            labels:'주문폭주',
            review: '리뷰: 40개'
        },
        {
            ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
            art:'데님스커트',
            title:'세뮤니 뒷밴딩 플레어 데님스커트',
            fee: '17900원',
            label: '단독주문',
            labels:'주문폭주',
            review: '리뷰: 40개'
        },
        {
            ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
            art:'데님스커트',
            title:'세뮤니 뒷밴딩 플레어 데님스커트',
            fee: '17900원',
            label: '단독주문',
            labels:'주문폭주',
            review: '리뷰: 40개'
        },
        {
            ref:'http://www.justone.co.kr/shopimages/jojean/0430010011463.gif?1614675436',
            title:'세뮤니 뒷밴딩 플레어 데님스커트',
            fee: '17900원',
            label: '단독주문',
            labels:'주문폭주',
            review: '리뷰: 40개'
        }

    ]

    const ItemArea = document.querySelector('.item_area');
    LIST.map((item)=> {
        const ItemBox = document.createElement("DIV");
        ItemBox.className = 'item_box';
        const img = document.createElement('div');
        img.className = 'img';
        const ItemIMG = document.createElement('img');
        const h3 = document.createElement('H3');
        h3.className = 'item_title';
        const p1 = document.createElement('P');
        p1.className = 'item_fee';
        const p2 = document.createElement('P');
        p2.className = 'item_label';
        const span1 = document.createElement('SPAN');
        const span2 = document.createElement('SPAN');
        const p3 = document.createElement('P');
        p3.className = 'item_review';

        ItemIMG.src = item.ref;
        h3.innerText = item.title;
        p1.innerText = item.fee;
        span1.innerText = item.label;
        span2.innerText = item.labels;
        p3.innerText = item.review;

        img.appendChild(ItemIMG);
        p2.appendChild(span1); //얘네 줄바꿈 안하고 연결되서 나오는 이유...?
        p2.appendChild(span2);
        ItemBox.appendChild(img);
        ItemBox.appendChild(h3);
        ItemBox.appendChild(p1);
        ItemBox.appendChild(p2);
        ItemBox.appendChild(p3);
        ItemArea.appendChild(ItemBox);


    })

    //전체 3번 반복
    // const SectionList = ['📌 할일', '⏳ 진행중', '✅ 종료']

    // SectionList.map((Slist) => {
    //     const SectionMain = document.querySelector('.col-md-3');
    //     const SectionListArea = document.createElement('div');
    //     const SectionName = document.createElement('h3');
    //     const SectionCard = document.createElement('div');

    //     SectionMain.appendChild(SectionListArea);
    //     SectionListArea.appendChild(SectionName);
    //     SectionListArea.appendChild(SectionCard);
    //     SectionCard.className = 'card';
    //     SectionCard.
    // })


})




