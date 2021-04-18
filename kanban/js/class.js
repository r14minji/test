//전체 3번 반복


window.onload = () => {
    const SectionList = [
        {
            sectiontitle:'📌 할일',
            titleclassname:'bg-info',
            sectionclassname:'list_area todo'
        },
        {
            sectiontitle:'⏳ 진행중',
            titleclassname:'bg-primary',
            sectionclassname:'list_area working'
        },
        {
            sectiontitle:'✅ 종료',
            titleclassname:'bg-warning',
            sectionclassname:'list_area done'
        }
    ]


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
            title:'할일 목록 구성중',  
            contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quasi dolor, ducimus, ratione iste et assumenda eaque quia temporibus sit ullam ad repellat nulla odit optioiure ex ea minus.', 
            date:'2021-03-02', 
            modify:'🖌', 
            delet:'❌', 
            left:'👈', 
            right:'👉'
        },
    ]

    SectionList.map((Slist) => {
        const SectionMain = document.querySelector('.col-md-3');
        const SectionListArea = document.createElement('div');
        const SectionName = document.createElement('h3');
        const SectionCardArea = document.createElement('ul'); 

        SectionMain.appendChild(SectionListArea);
        SectionListArea.appendChild(SectionName);
        SectionListArea.appendChild(SectionCardArea);
        SectionListArea.className =  Slist.sectionclassname;
        SectionName.className = Slist.titleclassname;
        SectionName.innerText = Slist.sectiontitle;
        
        
        SectionCardArea = todo.map((list) => {
                const Card = document.createElement('li');
                const Title = document.createElement('h4');
                const Contents = document.createElement('p');
                const Date = document.createElement('p'); 
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
        
                Title.innerText  = list.title; 
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
                SectionCardArea.appendChild(Card);
        
            })

    })

}


    


// class1 note
// const animal = [{name:'dog', leg:4}, {name:'fish', leg:0}, {name:'spider', leg:8}];
// console.log(animal);

// console.log(animal[0]);
// console.log(animal[0].name);
// animal.map((abc)=> {
//     console.log(abc);
//     console.log(abc.name);
// })

// const kang = {
//     name: 'kang',
//     age: 12,
//     job: ['font', 'back', 'fullstack'], 
// }


// const todo = [
//     {
//         title:'자바스크립트 배우기', 
//         contents:'abc', 
//         date:'0411', 
//         modify:'수정', 
//         delet:'X', 
//         left:'<', 
//         right:'>'
//     },
//     {
//         title:'자바스크립트 배우기', 
//         contents:'abc', 
//         date:'0411', 
//         modify:'수정', 
//         delet:'X', 
//         left:'<', 
//         right:'>'
//     },
//     {
//         title:'자바스크립트 배우기', 
//         contents:'abc', 
//         date:'0411', 
//         modify:'수정', 
//         delet:'X', 
//         left:'<', 
//         right:'>'
//     },
// ]


// window.onload = () => {
    
//     const cardArea = document.querySelector('.card_area');
//     todo.map((list)=> {
//         const title = document.createElement('h4');
//         const contents = document.createElement('p');
//         const card = document.createElement('li');
//         title.innerText  = list.title;
//         contents.innerText = list.contents;
//         card.appendChild(title);
//         card.appendChild(contents);
//         cardArea.appendChild(card);

//     })

//     const button = document.querySelector('.js-submit-btn');
//     const input = document.querySelector('.js-todo-input')
//     input.addEventListener('input', (e) => {
//         // console.log(e.target.value)
//     })
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(input.value)
//         localStorage.setItem('title', input.value)
//     })

// }