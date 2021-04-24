window.onload = function() {

    const todo = JSON.parse(localStorage.getItem('todoList'));
    const usings = JSON.parse(localStorage.getItem('using'));
    const dones = JSON.parse(localStorage.getItem('done'));

    
    const todoUl = document.querySelector('.todo .card_area');
    const usingUl = document.querySelector('.working .card_area');
    const doneUl = document.querySelector('.done .card_area');

    localStorage.getItem('todoList') && todo.forEach(data => {
        const li = document.createElement('LI');
        const h4 = document.createElement('H4');
        const content = document.createElement('P');
        const Wdate = document.createElement('P');
        const btnArea = document.createElement('DIV');
        const moveArea = document.createElement('DIV');
        const modifyBtn = document.createElement('BUTTON');
        const deleteBtn = document.createElement('BUTTON');
        const moveLeft = document.createElement('BUTTON');
        const moveRight = document.createElement('BUTTON');
    
        li.classList.add('card');
        Wdate.classList.add('date');
        btnArea.classList.add('btn_area');
        moveArea.classList.add('move_area');
        moveRight.classList.add('right_move');
    
        h4.innerText = data.title
        content.innerText = data.content
        Wdate.innerText = data.date
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';
    
        todoUl.appendChild(li)
        li.appendChild(h4);
        li.appendChild(content);
        li.appendChild(Wdate);
        li.appendChild(btnArea);
        li.appendChild(moveArea);
        btnArea.appendChild(modifyBtn)
        btnArea.appendChild(deleteBtn)
        moveArea.appendChild(moveLeft)
        moveArea.appendChild(moveRight)    
    })
    
    localStorage.getItem('using') && usings.forEach(data => {
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
        moveLeft.classList.add('left_move');
        moveRight.classList.add('right_move');

        h4.innerText = data.title;
        content.innerText = data.contents;
        date.innerText = data.date;
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';

        usingUl.appendChild(li)
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


    localStorage.getItem('done') && dones.forEach(data => {
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
        moveLeft.classList.add('left_move');

        h4.innerText = data.title;
        content.innerText = data.contents;
        date.innerText = data.date;
        modifyBtn.innerText = '🖌';
        deleteBtn.innerText = '❌';
        moveLeft.innerText = '👈';
        moveRight.innerText = '👉';

        doneUl.appendChild(li)
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


    
    const form = document.querySelector('.form_area form');
    const todoInput = document.querySelector('.js-todo-input');
    const textInput = document.querySelector('.js-todo-detail');
    const todolist = todo || []
    // const submitBtn = document.querySelector('.js-submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(todoInput.value)
        const newDate = new Date();
        const fullDate =  `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`

        
        const data = {
            title: todoInput.value,
            content: textInput.value,
            date: fullDate 
        }
        todolist.push(data);
        JSON.stringify(todolist);
        localStorage.setItem("todoList", JSON.stringify(todolist)); // 
        window.location.reload();
        

    })
    
}