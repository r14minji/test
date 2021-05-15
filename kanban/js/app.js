import {
  $contentArea,
  $writeForm,
  $todoList,
  $usingList,
  $doneList,
} from "./conponent.js";

function wraprender(data, ul) {
  const wrap = document.querySelector("#wrap");
  wrap.innerHTML = $contentArea;
  const col = document.querySelectorAll(".col-md-3");
  col[0].innerHTML = $writeForm;
  col[1].innerHTML = $todoList;
  col[2].innerHTML = $usingList;
  col[3].innerHTML = $doneList;
}
wraprender();

const todos = JSON.parse(localStorage.getItem("todo"));
const usings = JSON.parse(localStorage.getItem("using"));
const dones = JSON.parse(localStorage.getItem("done"));

const todoUl = document.querySelector(".todo .card_area");
const usingUl = document.querySelector(".working .card_area");
const doneUl = document.querySelector(".done .card_area");

let todoList = [];
let usingList = [];
let doneList = [];

if (todoList.length === 0 && localStorage.getItem("todo")) {
  todoList = todos;
}
if (usingList.length === 0 && localStorage.getItem("using")) {
  usingList = usings;
}
if (doneList.length === 0 && localStorage.getItem("done")) {
  doneList = dones;
}

localStorage.getItem("todo") && render(todos, todoUl);
localStorage.getItem("using") && render(usings, usingUl);
localStorage.getItem("done") && render(dones, doneUl);

// form
const form = document.querySelector(".form_area form");
const submitBtn = document.querySelector(".js-submit-btn");
const todoInput = document.querySelector(".js-todo-input");
const contentInput = document.querySelector(".js-todo-detail");

todoInput.focus();

if (todoList.length === 0 && localStorage.getItem("todo")) {
  todoList = todos;
}
submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!todoInput.value) return alert("할일을 입력해주세요");
  if (!contentInput.value) return alert("내용을 입력해주세요");
  todoList.push({
    title: todoInput.value,
    contents: contentInput.value,
    date: `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`,
  });
  localStorage.setItem("todo", JSON.stringify(todoList));
  todoInput.value = null;
  contentInput.value = null;
  render(todoList, todoUl);
});

function render(data, ul) {
  const currentName = ul.parentNode.className.split(" ")[1];
  const a = data.map((item) => {
    const component = `
            <li class="card">
                <h4>${item.title}</h4>
                <p>${item.contents}</p>
                <p class="date">${item.date}</p>
                <div class="btn_area">
                    <button>🖌</button>
                    <button class="delete_content ${currentName}">❌</button>
                </div>
                <div class="move_area">
                    <button class="left_move ${currentName}">👈</button>
                    <button class="right_move ${currentName}">👉</button>
                </div>
            </li>
        `;
    return component;
  });
  ul.innerHTML = a;
}

const todoBtnsRight = document.querySelectorAll(".right_move.todo");
const usingBtnsRight = document.querySelectorAll(".right_move.working");
const usingBtnsLeft = document.querySelectorAll(".left_move.working");
const doneBtnsRight = document.querySelectorAll(".left_move.done");

moveControl(
  todoBtnsRight,
  todoList,
  usingList,
  "todo",
  "using",
  todoUl,
  usingUl
);
moveControl(
  usingBtnsRight,
  usingList,
  doneList,
  "using",
  "done",
  usingUl,
  doneUl
);
moveControl(
  usingBtnsLeft,
  usingList,
  todoList,
  "using",
  "todo",
  usingUl,
  todoUl
);
moveControl(
  doneBtnsRight,
  doneList,
  usingList,
  "done",
  "using",
  doneUl,
  usingUl
);

function moveControl(
  elementBtns,
  prevList,
  nextList,
  prevName,
  nextName,
  prevUl,
  nextUl
) {
  elementBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      nextList.push(prevList[i]);
      prevList.splice(i, 1);
      localStorage.setItem(prevName, JSON.stringify(prevList));
      localStorage.setItem(nextName, JSON.stringify(nextList));
      render(prevList, prevUl);
      render(nextList, nextUl);
    });
  });
}

//delete
const todoDelete = document.querySelectorAll(".delete_content.todo");
const workingDelete = document.querySelectorAll(".delete_content.working");
const doneDelete = document.querySelectorAll(".delete_content.done");

todoDelete.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    todoList.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(todoList));
    render(todoList, todoUl);
  });
});
workingDelete.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    usingList.splice(i, 1);
    localStorage.setItem("using", JSON.stringify(usingList));
    render(usingList, usingUl);
  });
});
doneDelete.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    doneList.splice(i, 1);
    localStorage.setItem("done", JSON.stringify(doneList));
    render(doneList, doneUl);
  });
});
