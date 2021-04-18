window.onload = function() {
    
    const MenuList = [
        {
            MenuFA: 'fas fa-home',
            MunuTITLE: '홈'
        },
        {
            MenuFA: 'fas fa-fire',
            MunuTITLE: '인기'
        },
        {
            MenuFA: 'fab fa-youtube',
            MunuTITLE: '구독'
        }
    ]

    MenuList.map((Mlist) => {
        const MenuGroup = document.querySelector('.menu_groub ul');
        const MenuContent = document.createElement('li');
        const MenuLine = document.createElement('p');
        const MenuFavicon = document.createElement('i');
        const MenuName = document.createElement('p');

        MenuFavicon.className = Mlist.MenuFA;
        MenuName.innerText = Mlist.MunuTITLE;
        MenuGroup.appendChild(MenuContent);
        MenuContent.appendChild(MenuLine);
        MenuContent.appendChild(MenuName);
        MenuLine.appendChild(MenuFavicon);

    })


    //section
    const SectionLIst = [
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
        {
            SectionIMG:'https://i.ytimg.com/vi/E9JRrbxhI3k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARVErKVg7fj8KHKVhm51UuFT-f6w',
            SectionALT:'동영상 썸네일',
            SectionTITLE: '신나게 공놀이하는 유기견 강아지, 페퍼가족 #17',
            SectionWriter: '진트리버박칠둥',
            SectionHITS: '조회수 9.5천회. 1년전'
        },
    ]

    SectionLIst.map((Slist) => {
        const VideoArea = document.querySelector('.video_area');
        const VodeoContent = document.createElement('div');
        const VodeoImg = document.createElement('img');
        const VodeoTextArea = document.createElement('div');
        const VodeoTitle = document.createElement('p');
        const VodeoWriter = document.createElement('p');
        const VodeoHits = document.createElement('p');

        VodeoTitle.innerText = Slist.SectionTITLE;
        VodeoWriter.innerText = Slist.SectionWriter;
        VodeoHits.innerText = Slist.SectionHITS;
        VodeoTextArea.className ='title';
        VodeoContent.className = 'content';
        VodeoImg.src = Slist.SectionIMG;
        VodeoImg.alt = Slist.SectionALT;
        VideoArea.appendChild(VodeoContent);
        VodeoContent.appendChild(VodeoImg);
        VodeoContent.appendChild(VodeoTextArea);
        VodeoTextArea.appendChild(VodeoTitle);
        VodeoTextArea.appendChild(VodeoWriter);
        VodeoTextArea.appendChild(VodeoHits);
    })



}