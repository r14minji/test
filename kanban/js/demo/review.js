window.onload = function() {
    const todos = JSON.parse(localStorage.getItem('todo'));
    const usings = JSON.parse(localStorage.getItem('using'));
    const dones = JSON.parse(localStorage.getItem('done'));
   
   
    const todoUl = document.querySelector('.todo .card_area');
    const usingUl = document.querySelector('.working .card_area');
    const doneUl = document.querySelector('.done .card_area');

    let todoList = [];
    let usingList = [];
    let doneList = [];

    localStorage.getItem('todo') && render(todos, todoUl)
    localStorage.getItem('using') && render(usings, usingUl)
    localStorage.getItem('done') && render(dones, doneUl)


    const form = document.querySelector('.form_area form');
    const submitBtn = document.querySelector('.js-submit-btn');
    const todoInput = document.querySelector('.js-todo-input');
    const contentInput = document.querySelector('.js-todo-detail');
    
    submitBtn.addEventListener('submit', (e) => {
        e.preventDefault()
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        todoList.push({
            title: todoInput.value, 
            contents: contentInput.value, 
            date: new Date()
        })
        localStorage.setItem('todo', JSON.stringify(todoList))
        window.location.reload()
    })
}

function render (data, ul) {
    const currentName = ul.parentNode.className.split(' ')[1]
    data.forEach(item => {
        const li = document.createElement('LI');
        const h4 = document.createElement('H4');
        const content = document.createElement('P');
        const date = document.createElement('P');
        const btnArea = document.createElement('DIV');
        const moveArea = document.createElement('DIV');
        const modifyBtn = document.createElement('BUTTON');
        const deleteBtn = document.createElement('BUTTON');
        const moveLeft = document.createElement('BUTTON');
        const moveRight = document.createElement('BUTTON');

        li.classList.add('card');
        date.classList.add('date');
        btnArea.classList.add('btn_area');
        moveArea.classList.add('move_area');
        moveLeft.classList.add('left_move', currentName);
        moveRight.classList.add('right_move', currentName);

        h4.innerText = item.title;
        content.innerText = item.contents;
        date.innerText = item.date;
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';

        ul.appendChild(li)
        li.appendChild(h4);
        li.appendChild(content);
        li.appendChild(date);
        li.appendChild(btnArea);
        li.appendChild(moveArea);
        btnArea.appendChild(modifyBtn)
        btnArea.appendChild(deleteBtn)
        moveArea.appendChild(moveLeft)
        moveArea.appendChild(moveRight)
    })
}
