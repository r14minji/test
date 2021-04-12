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


const todo = [
    {
        title:'자바스크립트 배우기', 
        contents:'abc', 
        date:'0411', 
        modify:'수정', 
        delet:'X', 
        left:'<', 
        right:'>'
    },
    {
        title:'자바스크립트 배우기', 
        contents:'abc', 
        date:'0411', 
        modify:'수정', 
        delet:'X', 
        left:'<', 
        right:'>'
    },
    {
        title:'자바스크립트 배우기', 
        contents:'abc', 
        date:'0411', 
        modify:'수정', 
        delet:'X', 
        left:'<', 
        right:'>'
    },
]


window.onload = () => {
    
    const cardArea = document.querySelector('.card_area');
    todo.map((list)=> {
        const title = document.createElement('h4');
        const contents = document.createElement('p');
        const card = document.createElement('li');
        title.innerText  = list.title;
        contents.innerText = list.contents;
        card.appendChild(title);
        card.appendChild(contents);
        cardArea.appendChild(card);

    })

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