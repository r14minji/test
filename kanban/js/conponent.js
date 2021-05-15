export const $writeForm = `
<div class="form_area">
<form>
    <div class="form-group">
        <label for="todo">할일</label>
        <input type="text" class="form-control js-todo-input" id="todo" placeholder="할일을 입력해주세요" name="title">
    </div>
    <div class="form-group">
        <label for="coment">설명</label>
        <input type="text" class="form-control js-todo-detail" id="coment" placeholder="상세 내용을 적어주세요" name="description">
        <input type="radio" />
        <input type="checkbox" name="" id="">
    </div>
    <button type="submit" class="btn btn-default btn-primary js-submit-btn">제출</button>
</form>
</div>
`;

export const $contentArea = `
<div class="row">
    <div class="col-md-3">1</div>
    <div class="col-md-3">2</div>
    <div class="col-md-3">3</div>
    <div class="col-md-3">4</div>
</div>
`;

export const $todoList = `
<div class="list_area todo">
    <h3 class="bg-info">📌 할일</h3>
    <ul class="card_area">
    </ul>
</div>
`;

export const $usingList = `
<div class="list_area working">
    <h3 class="bg-primary">⏳ 진행중</h3>
    <ul class="card_area">
    </ul>
</div>
`;

export const $doneList = `
<div class="list_area done">
    <h3 class="bg-warning">✅ 종료</h3>
    <ul class="card_area">
    </ul>
</div>
`;
