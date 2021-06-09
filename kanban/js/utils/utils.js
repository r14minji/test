const doubleNum = (num) => {
  if (String(num).length === 1) {
    return `0${num}`;
  }
  return num;
};

export const createDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const writeDate = `${year}-${doubleNum(month)}-${doubleNum(date)} ${doubleNum(
    hour
  )}:${doubleNum(minute)}`;

  return writeDate;
};

export const cardDelete = (area, list, render) => {
  const deletBtn = document.querySelectorAll(`.${area}.delete`);
  [...deletBtn].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      list.splice(i, 1);
      localStorage.setItem(area, JSON.stringify(list));
      render();
      console.log(deletBtn);
      console.log([...deletBtn]);
    });
  });
};

export const nextCard = (prevkey, prevList, nextkey, nextList, render) => {
  const nextBtn = document.querySelectorAll(`.${prevkey}.next`);
  [...nextBtn].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      nextList.push(prevList[i]);
      prevList.splice(i, 1);
      localStorage.setItem(prevkey, JSON.stringify(prevList));
      localStorage.setItem(nextkey, JSON.stringify(nextList));
      render();
    });
  });
};

export const prevCard = (prevKey, prevList, nextKey, nextList, render) => {
  const prevBtn = document.querySelectorAll(`.${prevKey}.prev`);
  [...prevBtn].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      nextList.push(prevKey[i]);
      prevList.splice(i, 1);
      localStorage.setItem(prevKey, JSON.stringify(prevList));
      localStorage.setItem(nextKey, JSON.stringify(nextList));
      render();
    });
  });
};

export const cardModify = (area, list, render) => {
  const modifyBtn = document.querySelectorAll(`.${area}.modify`);
  const modal = document.querySelector(".modal_wrap");
  const modifyTitle = document.querySelector(".modal_contents .title_input");
  const modifyContent = document.querySelector(
    ".modal_contents .content_input"
  );
  [...modifyBtn].forEach((btn, i) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      modifyTitle.value = list[i].title;
      modifyContent.value = list[i].contents;
      modifySave(area, list, i, render);
    });
  });
};

export const modifyClose = () => {
  const modalBtn = document.querySelector(".modal_close");
  const modal = document.querySelector(".modal_wrap");
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      console.log("sec");
      modal.style.display = "none";
    }
  });
};

export const modifySave = (area, list, index, render) => {
  const saveBtn = document.querySelector(".modal_footer .button");
  const modalTitle = document.querySelector(".modal_contents .title_input");
  const modalContents = document.querySelector(
    ".modal_contents .content_input"
  );
  saveBtn.addEventListener("click", () => {
    const title = modalTitle.value;
    const contents = modalContents.value;
    const modaldata = { title, contents, date: createDate() };
    list.splice(index, 1, modaldata);
    localStorage.setItem(area, JSON.stringify(list));
    modifyClose();
    render();
  });
};
