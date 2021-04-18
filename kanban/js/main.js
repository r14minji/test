

const todo = [
    {
        title:'자바스크립트 배우기', 
        contents:'자바스크립트 기초 배우기', 
        date:'2021-03-02', 
        modify:'🖌', 
        delet:'❌', 
        left:'👈', 
        right:'👉'
    },
    {
        title:'칸반보드 만들기', 
        contents:'칸반보드의 디자인 구성과 레이아웃 짜기', 
        date:'2021-03-02', 
        modify:'🖌', 
        delet:'❌', 
        left:'👈', 
        right:'👉'
    },
    {
        title:'할일 목록 구성중',  //긴글 줄바꿈은 안되는건지..?
        contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi dolor, ducimus, ratione iste et assumenda eaque quia temporibus sit ullam ad repellat nulla odit optioiure ex ea minus.', 
        date:'2021-03-02', 
        modify:'🖌', 
        delet:'❌', 
        left:'👈', 
        right:'👉'
    },
]


window.onload = () => {
    const Info = document.createElement('h3'); //얘는 왜 아래에 나올까?
    const ListArea = document.querySelector('.list_area');
    ListArea.appendChild(Info);
    Info.innerText = '📌 할일';
    Info.className = 'bg-info';

    const cardArea = document.querySelector('.card_area');
    todo.map((list)=> {
        const Card = document.createElement('li');
        const Title = document.createElement('h4');
        const Contents = document.createElement('p');
        const Date = document.createElement('p'); //클래스 네임과 변수명도 중복되면 안되는지?
        const Button = document.createElement('div');
        const Modify = document.createElement('button');
        const Delet = document.createElement('button');
        const Move = document.createElement('div');
        const Left = document.createElement('button');
        const Right = document.createElement('button');

        Card.className = 'card';
        Date.className ='date';
        Button.className ='btn_area';
        Move.className ='move_area';

        Title.innerText  = list.title; //변수명과 키이름?은 중복되어도 되는지..?
        Contents.innerText = list.contents; 
        Date.innerText = list.date;
        Modify.innerText = list.modify;
        Delet.innerText = list.delet;
        Left.innerText = list.left;
        Right.innerText = list.right;
        
        Card.appendChild(Title);
        Card.appendChild(Contents);
        Card.appendChild(Date);
        Card.appendChild(Button);
        Button.appendChild(Modify);
        Button.appendChild(Delet);
        Card.appendChild(Move);
        Move.appendChild(Left);
        Move.appendChild(Right);
        cardArea.appendChild(Card);

    })

    //전체 3번 반복
    // const SectionList = ['📌 할일', '⏳ 진행중', '✅ 종료']

    // SectionList.map((Slist) => {
    //     const SectionMain = document.querySelector('.col-md-3');
    //     const SectionListArea = document.createElement('div');
    //     const SectionName = document.createElement('h3');
    //     const SectionCardArea = document.createElement('ul'); //ul 만들면 되는건지?

    //     SectionMain.appendChild(SectionListArea);
    //     SectionListArea.appendChild(SectionName);
    //     SectionListArea.appendChild(SectionCardArea);
    //     Slist[0].className = 'list_area todo'
    //     SectionCardArea.className = 'card_area';
    //     SectionName.innerText = Slist;
    //     SectionCardArea.innerText = todo.map(list => {}) 
    // })


    //이어서
    const button = document.querySelector('.js-submit-btn');
    const input = document.querySelector('.js-todo-input')
    input.addEventListener('input', (e) => {
        // console.log(e.target.value)
    })
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(input.value)
        localStorage.setItem('title', input.value)
    })

    

   


}