import {
  $WriteForm,
  $GridLayout,
  $TodoList,
  $UsingList,
  $DoneList,
  $ModifyModal,
  card,
} from "./conponent.js";

import {
  createDate,
  cardDelete,
  nextCard,
  prevCard,
  cardModify,
  modifyClose,
} from "./utils/utils.js";

const todos = JSON.parse(localStorage.getItem("todos")) || [];
const usings = JSON.parse(localStorage.getItem("usings")) || [];
const dones = JSON.parse(localStorage.getItem("done")) || [];

const cardRender = (lists, btnName) => {
  const newArr = lists.map((item) => card(item, btnName));
  return newArr.join("");
};

const formEvet = () => {
  const $form = document.querySelector(".form_area form");
  const $todoInput = document.querySelector(".title_input");
  const $comentInput = document.querySelector(".content_input");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = $todoInput.value;
    const contents = $comentInput.value;
    if (!title) return alert("할일을 입력해주세요.");
    if (!contents) return alert("내용을 입력해주세요.");
    const formdata = { title, contents, date: createDate() };
    localStorage.setItem("todos", JSON.stringify(todos));
    todos.push(formdata);

    render();
  });
};

const render = () => {
  const root = document.querySelector("#root");
  const modal = document.createElement("div");
  modal.classList.add("modal_wrap");
  modal.innerHTML = $ModifyModal;
  root.innerHTML = $GridLayout;
  root.appendChild(modal);
  const col = document.querySelectorAll(".column");
  col[0].innerHTML = $WriteForm;
  col[1].innerHTML = $TodoList;
  col[2].innerHTML = $UsingList;
  col[3].innerHTML = $DoneList;

  formEvet();

  const todoUl = document.querySelector(".todo .list_area");
  const usingUl = document.querySelector(".using .list_area");
  const doneUl = document.querySelector(".done .list_area");
  todoUl.innerHTML = cardRender(todos, "todos");
  usingUl.innerHTML = cardRender(usings, "usings");
  doneUl.innerHTML = cardRender(dones, "dones");

  cardDelete("todos", todos, render);
  cardDelete("usings", usings, render);
  cardDelete("dones", dones, render);

  nextCard("todos", todos, "usings", usings, render);
  nextCard("usings", usings, "dones", dones, render);
  prevCard("usings", usings, "todos", todos, render);
  prevCard("dones", dones, "usings", usings, render);

  cardModify("todos", todos, render);
  modifyClose();
};

render();
