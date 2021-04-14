window.onload = function() {

    //utils_area li null 값으로 나오는 오류
    const UtilList = ['네이버를시작페이지로','쥬니어네이버','해피빈'];
    UtilList.map((Ulist) => {
        const utils = document.createElement('li');
        const Putils = document.querySelector('.utils_area ul');
        Putils.appendChild(utils);
        utils.innerText = Ulist;
    })

  
    //nav sub 메뉴 만드는 방법??
    const Navlist = ['메일','카페','블로그','지식인','쇼핑','pay','사전','뉴스','증권','부동산'];
    Navlist.map((Mlist) => {
        const navli = document.createElement('li');
        const NavArea = document.querySelector('.nav ul');
        NavArea.appendChild(navli);
        navli.innerText = Mlist;

        //appendchild로 해주면 될 것같은데 왜 클래스 명이 또 같냐...ㅎ li태그라 일단 대기.
    })

    // //sum_news
    // const Sumnewslist = 
    //     [
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png',
    //     'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/032.png'
    //     ];
        
    //     Sumnewslist.map((Sumlist) => {
    //     const Sumli = document.createElement('li');
    //     const Sumimg = document.createElement('img');
    //     const SumArea = document.querySelector('.sum_news ul');
    //     SumArea.appendChild(Sumli);
    //     Sumli.appendChild(Sumimg);
    //     Sumimg.src = Sumlist;
    // })

    //today_article
    const TopicList = [
        {
            TopicIMG:'https://s.pstatic.net/static/www/mobile/edit/2021/0304/mobile_192837920240.jpg',
            TopicALT:'강아지',
            TopicTITLE:'심쿵 내새끼',
            TopicCONTENT:'못 짖어서 126만 너튜브 스타 된 댕댕이의 사생활'
        },
        {
            TopicIMG:'https://s.pstatic.net/static/www/mobile/edit/2021/0304/cropImg_196x196_56794290063436102.jpeg',
            TopicALT:'고양이',
            TopicTITLE:'해외동물이야기',
            TopicCONTENT:'얼마나 추웠으면... 묻지도 따지지도 않고 사람에게 뛰어든 아깽이'
        },
        {
            TopicIMG:'https://s.pstatic.net/static/www/mobile/edit/2021/0304/cropImg_196x196_56794418855250155.jpeg',
            TopicALT:'우리집 묘르신',
            TopicTITLE:'심쿵 내새끼',
            TopicCONTENT:`'뭣이 중헌디~' 밤새 일하다 현타 온 냥집사`
        },
        {
            TopicIMG:'https://s.pstatic.net/static/www/mobile/edit/2021/0226/mobile_213230395978.jpg',
            TopicALT:'고양이 양치질',
            TopicTITLE:'동물공감 핫템',
            TopicCONTENT:'이제 양치전쟁 끝~ 5초만에 뚝딱 강아지 치카펜'
        }
    ]
    
    // 첫번째 객체만 className = 'TopicPoint' 변경하려면??
    TopicList.map((Tlist) => {
        const TopicSub = document.createElement('div');
        const TopicImg = document.createElement('img');
        const TopicMain = document.createElement('div');
        const TopicTitle = document.createElement('p');
        const TopicContent = document.createElement('p');
     
        const Topic = document.querySelector('.topic');
        TopicSub.appendChild(TopicImg);
        TopicSub.appendChild(TopicMain);
        TopicMain.appendChild(TopicTitle);
        TopicMain.appendChild(TopicContent);
        Topic.appendChild(TopicSub);

        TopicSub.className = 'sub'
        TopicImg.src = Tlist.TopicIMG;
        TopicImg.alt = Tlist.TopicALT;
        TopicTitle.innerText = Tlist.TopicTITLE;
        TopicContent.innerText = Tlist.TopicCONTENT;


    })

    //shop_contents

    const ShopList = [
        {
            ShopIMG:'https://s.pstatic.net/shopping.phinf/20210226_10/b6b19bfd-b609-4289-8038-604d52749be9.jpg?type=f214_292',
            ShopALT:'매트리스',
            ShopTITLE:'매트리스 SALE',
            ShopPRICE: '최대 52%'
        },
        {
            ShopIMG:'https://s.pstatic.net/shopping.phinf/20210226_10/b6b19bfd-b609-4289-8038-604d52749be9.jpg?type=f214_292',
            ShopALT:'매트리스',
            ShopTITLE:'매트리스 SALE',
            ShopPRICE: '최대 52%'
        },
        {
            ShopIMG:'https://s.pstatic.net/shopping.phinf/20210226_10/b6b19bfd-b609-4289-8038-604d52749be9.jpg?type=f214_292',
            ShopALT:'매트리스',
            ShopTITLE:'매트리스 SALE',
            ShopPRICE: '최대 52%'
        }
    ]

    ShopList.map((Slist) => {
        const ShopTable = document.createElement('div');
        const ShopImg = document.createElement('img');
        const ShopMain = document.createElement('div');
        const ShopTitle = document.createElement('p');
        const Shopdiscount = document.createElement('p');

        const ShopContents = document.querySelector('.shop_contents');
        ShopTable.appendChild(ShopImg);
        ShopTable.appendChild(ShopMain);
        ShopMain.appendChild(ShopTitle);
        ShopMain.appendChild(Shopdiscount);
        ShopContents.appendChild(ShopTable);

        ShopTable.className = 'table';
        ShopTable.classList.add = 'a';
        ShopImg.src = Slist.ShopIMG;
        ShopImg.alt = Slist.ShopALT;
        ShopTitle.innerText = Slist.ShopTITLE;
        Shopdiscount.innerText = Slist.ShopPRICE;
    })
	
	// f_banner_area
    const FBannerList = [
        {
            FBIMG: 'https://ssl.pstatic.net/tveta/libs/1328/1328292/f3e5e27e3d746ade9b22_20210302164937220.jpg',
            FBALT: '선거 정당자료를 구임합니다',
            FBTITLE: '중앙선거관리위원회',
            FBCONTENT:'선거, 정당자료 공개구입',
            FBDATE:'2021.3.8~3.22 <br>지금확인하러 가기(클릭)'
        },
        {
            FBIMG: 'https://ssl.pstatic.net/tveta/libs/1328/1328292/f3e5e27e3d746ade9b22_20210302164937220.jpg',
            FBALT: '선거 정당자료를 구임합니다',
            FBTITLE: '중앙선거관리위원회',
            FBCONTENT:'선거, 정당자료 공개구입',
            FBDATE:'2021.3.8~3.22 <br>지금확인하러 가기(클릭)'
        },
        {
            FBIMG: 'https://ssl.pstatic.net/tveta/libs/1328/1328292/f3e5e27e3d746ade9b22_20210302164937220.jpg',
            FBALT: '선거 정당자료를 구임합니다',
            FBTITLE: '중앙선거관리위원회',
            FBCONTENT:'선거, 정당자료 공개구입',
            FBDATE:'2021.3.8~3.22 <br>지금확인하러 가기(클릭)'
        },
    ]

    FBannerList.map((FBlist) => {
        const FBBox = document.createElement('div');
        const FBImg = document.createElement('img');
        const FBSmallbox = document.createElement('div');
        const FBTitle = document.createElement('p');
        const FBContent = document.createElement('p');
        const FBDate = document.createElement('p');

        const FBannerArea = document.querySelector('.f_banner_area');
        FBBox.appendChild(FBImg);
        FBBox.appendChild(FBSmallbox);
        FBSmallbox.appendChild(FBTitle);
        FBSmallbox.appendChild(FBContent);
        FBSmallbox.appendChild(FBDate);
        FBannerArea.appendChild(FBBox);

        FBBox.className = 'box';
        FBSmallbox.className ='smallbox';
        FBImg.src = FBlist.FBIMG;
        FBImg.alt = FBlist.FBALT;
        FBTitle.innerText = FBlist.FBTITLE;
        FBContent.innerText = FBlist.FBTITLE;
        FBDate.innerText = FBlist.FBCONTENT;
        
    })

}