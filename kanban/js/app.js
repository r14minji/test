import {
    $contentArea,
    $writeForm,
    $todoList,
    $usingList,
    $doneList,
} from './conponent.js';

function cardRender () {

}

function formEvent () {

}

function render () {
    const wrap = document.querySelector('#wrap');
    wrap.innerHTML = $contentArea;

    const col = document.querySelectorAll('.col-md-3');
    col[0].innerHTML = $writeForm
    col[1].innerHTML = $todoList
    col[2].innerHTML = $usingList
    col[3].innerHTML = $doneList

    formEvent()
    
    cardRender()
}

render();