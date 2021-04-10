
// sample1의 card_banner 만들고 싶어서

 const cards = ['http://img.just-one.co.kr/shopping_mall/mainimage/banner_four1.jpg','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four2.jpg','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four3.gif','http://img.just-one.co.kr/shopping_mall/mainimage/banner_four4.jpg']
    cards.map((link)=> {
        const img = document.createElement('IMG');
        const card = document.getElementById('card');
        const banner = document.querySelector('.card_banner');
        banner.appendChild(card);
        card.appendChild(img);
        img.src = link
    })

//A: 요소가 틀렸음. createElement('요소') 
//요소에 대한 설명은 https://heropy.blog/2019/05/26/html-elements/


//sample2의 window_banner 만들고 싶어서
//카드배너꺼 가지고왔씀 위와 아래 비교해서 수정함.
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
    
    const BWdiv = document.createElement('DIV');
    const BWwarp = document.querySelector('.banner_wrap');
    BWdiv.className = 'banner'
    const BWlinks = ['https://image.adidas.co.kr/upload/banner/174df423138247e689a80e1d7356f65d_0205165958.JPG', 'https://image.adidas.co.kr/upload/banner/588ec794838f4252ab424f29e7c80d9d_0226134623.jpg', 'https://image.adidas.co.kr/upload/banner/ec600721ca254075be354a5400160b7b_0219105556.jpg','https://image.adidas.co.kr/upload/banner/12680e1c5ad64bbd8cffaa4f73298c94_0303110225.jpg']
    BWlinks.map((BWlink) => {
        const BWimg = document.createElement('IMG');
        BWimg.src = "BWlink";
    })
    BWdiv.appendChild('BWlink')

    const BWbuttons = ['구매하기', '구매하기', '자세히보기', '자세히보기'];
    BWbuttons.map((BWbutton) => {
        const BW_button = document.createElement('BUTTON');
        BW_button.innerText = 'BWbutton'; 
    })
    BWdiv.appendChild('BWbuttons')
    BWwarp.appendChild('BWdiv');


    //sample2의 banner_wrap 만들 때, 이중으로 map함수를 사용할 경우 >>3번쨰 오답노트 이미지파일 참고
    const BWlinks = ['https://image.adidas.co.kr/upload/banner/174df423138247e689a80e1d7356f65d_0205165958.JPG', 'https://image.adidas.co.kr/upload/banner/588ec794838f4252ab424f29e7c80d9d_0226134623.jpg', 'https://image.adidas.co.kr/upload/banner/ec600721ca254075be354a5400160b7b_0219105556.jpg','https://image.adidas.co.kr/upload/banner/12680e1c5ad64bbd8cffaa4f73298c94_0303110225.jpg']
    const BWbuttons = ['구매하기', '구매하기', '자세히보기', '자세히보기'];
    BWlinks.map((BWlink) => {
        const BWdiv = document.createElement('DIV');
        const BWimg = document.createElement('IMG');
        const BWwarp = document.querySelector('.banner_wrap');
        BWdiv.className = 'banner'
        BWimg.src = BWlink;
        BWdiv.appendChild(BWimg);

        BWbuttons.map((BWbutton) => {
            const Newbutton = document.createElement('BUTTON');
            Newbutton.innerText = BWbutton
            BWdiv.appendChild(Newbutton); // BWdiv를 가지고 올 수 있는건지?
        })

        BWwarp.appendChild(BWdiv);
    })
