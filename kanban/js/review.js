window.onload = function() {

    //1-1. 뼈대 만들고 데이터 가져오려다가 스탑. 데이터 어디서 가져와?

    //2. 로컬에 저장할 거야. form에 입력한 값을. 입력한 값이 저장되는 변수가 필요함.

    const form = document.querySelector('.form_area form');
    const title = document.querySelector('.js-todo-input'); 
    const content = document.querySelector('.js-todo-detail');
    
    //4. 지금까지 저장된 아이들 누적해서 저장하는게 필요하겟징

    
    //3. 제출 버튼을 눌렀을 때 이 입력값들이 로컬에 저장되어야 하겟지?

    form.addEventListener('sumit', (e) => {
        e.preventDefault();
        const data = {
            title: title.value,
            contents: content.value,
            date: fullDate
        }
        todoList.push(data);
        JSON.stringify(todoList) //5. 받아올 때 스트링으로만 저장되기 때문에, 객체를 만들어서 입력하는 값들을 저장한닷
        localStorage.setItem("todo", JSON.stringify(todoList));
        window.location.reload();
    
    })

    //6. 로컬에 저장한거 다시 객체로 가져와서 변수에 담아둬
    const todos = JSON.parse(localStorage.getItem('todo'));
    
    const todoUl = document.querySelector('todo .card_area');

   //1. 반복 구조인 뼈대를 만든다. 그 다음엔 데이터를 데려와야해
   localStorage.getItem('todo') && todos.forEach((data) => {

        const li = document.createElement("LI");
        const h4 = document.createElement("H4");
        const content = document.createElement("P");
        const date = document.createElement("P");
        const btnarea = document.createElement("DIV");
        const modifyBtn = document.createElement("BUTTON");
        const deletBtn = document.createElement("BUTTON");
        const movearea = document.createElement("DIV");
        const moveLeft = document.createElement("BUTTON");
        const MoveRight = document.createElement("BUTTON");
        
        li.classList.add('card');
        date.classList.add('date');
        btnarea.classList.add('btn_area');
        movearea.classList.add('move_area');
        
        h4.innerText = data.title //title 입력한 값 로컬에 저장. 입력1번. 키 값 1개. 값에 스트링만 가능. 객체로 저장
        content.innerText = data.contents // content 입력한 값
        date.innerText = data.date //date 입력값.
        modifyBtn.innerText = "🖌";
        deletBtn.innerText = "❌";
        moveLeft.innerText = "👈";
        MoveRight.innerText = "👉";

        li.appendChild(h4);
        li.appendChild(content);
        li.appendChild(date);
        li.appendChild(btnarea);
        li.appendChild(movearea);
        btnarea.appendChild(modifyBtn);
        btnarea.appendChild(deletBtn);
        movearea.appendChild(moveLeft);
        movearea.appendChild(MoveRight);
        todoUl.appendChild(li);
})
    

    
const todoList = todos || []


}