const storageinput = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const storedinput = localStorage.getItem("textinput");

if (storageinput) {
  text.textContent = storedinput;
}

storageinput.addEventListener("input", (letter) => {
  // console.log(letter.target.value)
  text.textContent = letter.target.value;
});

const saveToLocalSorage = () => {
  localStorage.setItem("textinput", text.textContent);
};

button.addEventListener("click", saveToLocalSorage);
