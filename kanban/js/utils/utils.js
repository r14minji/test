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
