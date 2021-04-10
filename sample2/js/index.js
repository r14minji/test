window.onload = function() {
    
    //utils_area
    const utils = ['주문조회', '회원가입', '로그인']; // href 배열로 넣는 방법..?
    utils.map ((util) => {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        const ul = document.querySelector('.utils_area ul');
    
        ul.appendChild(li);
        li.appendChild(a);
        a.innerText = util;
        // a.herf = '#';
    }) 
    
    //gnb_menu
    const gnbs = ['MAN', 'WOMEN', 'KIDS', 'SPORTS', 'BRANDS'];
    gnbs.map((gnb) => {
        const li = document.createElement('LI');
        const a = document.createElement('A');
        const ul = document.querySelector('.gnb_menu ul');

        ul.appendChild(li);
        li.appendChild(a);
        a.innerText = gnb;
    })

    //gnb_contents
    const form = document.createElement('FORM');    
    const input = document.createElement('INPUT');
    const search = document.querySelector('.search');
    form.className = 'item_srearch';
    input.type = "text";
    const button = document.createElement('BUTTON');
    const i = document.createElement('I');
    button.appendChild(i);
    i.className = 'fas fa-search'
    search.appendChild(form);
    form.appendChild(input);
    form.appendChild(button);

    //banner_area
    const BannerArea = document.querySelector('.banner_area');
    const Bimg = document.createElement('IMG'); //요소 소문자로 작성해도 되는지?
    Bimg.src = "https://image.adidas.co.kr/upload/banner/a28d4598dd984e8c87c26dc6689d8f7e_0222095110.JPG"
    Bimg.art = "아디다스 공식 온라인 홈페이지 홍보물입니다."
    BannerArea.appendChild(Bimg);
    const Bbutton = document.createElement('BUTTON');
    Bbutton.className = 'buy';
    Bbutton.innerText = '구매하기';
    BannerArea.appendChild(Bbutton);
    const BBbutton = document.createElement('BUTTON'); // 버튼요소가 2개면 매번 각각 생성해주는건지? 변수명은 다르게 작성하는것 맞는지?
    BBbutton.className = 'detail';
    BBbutton.innerText = '자세히 보기';
    BannerArea.appendChild(BBbutton);




    //window_banner //map 함수 button은 어떻게 만드는건지...?
    const BWlinks = ['https://image.adidas.co.kr/upload/banner/174df423138247e689a80e1d7356f65d_0205165958.JPG', 'https://image.adidas.co.kr/upload/banner/588ec794838f4252ab424f29e7c80d9d_0226134623.jpg', 'https://image.adidas.co.kr/upload/banner/ec600721ca254075be354a5400160b7b_0219105556.jpg','https://image.adidas.co.kr/upload/banner/12680e1c5ad64bbd8cffaa4f73298c94_0303110225.jpg']
    BWlinks.map((BWlink) => {
        const BWdiv = document.createElement('DIV');
        const BWimg = document.createElement('IMG');
        const BWwarp = document.querySelector('.banner_wrap');
        BWdiv.className = 'banner'
        BWimg.src = BWlink;
        BWdiv.appendChild(BWimg);
        BWwarp.appendChild(BWdiv);
    })

    const BWbuttons = ['구매하기', '구매하기', '자세히보기', '자세히보기'];
    BWbuttons.map((BWbutton) => {
        const BWdiv = document.createElement('DIV');
        const Newbutton = document.createElement('BUTTON');
        const BWwarp = document.querySelector('.banner_wrap');
        BWdiv.className = 'banner'
        Newbutton.innerText = BWbutton;
        BWdiv.appendChild(Newbutton);
        BWwarp.appendChild(BWdiv);
    })

   
    
}