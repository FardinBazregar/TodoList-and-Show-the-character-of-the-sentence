let value = "";
let counter = 1;
const inputHanlder = (e) => {
  value = e.target.value;
};
const resetCounter = () => {
  const todoItems = document.getElementsByClassName("todo-item");
  let usedNumbers = [];
  for (let i = 0; i < todoItems.length; i++) {
    const text = todoItems[i].innerText;
    const number = parseInt(text.split(".")[0], 10);
    usedNumbers.push(number);
  }

  for (let i = 1; ; i++) {
    if (!usedNumbers.includes(i)) {
      counter = i;
      break;
    }
  }
};

const inputElement = document
  .getElementById("input")
  .addEventListener("input", inputHanlder);

const btnHandler = (e) => {
  e.stopPropagation();
  if (document.getElementsByClassName("todo-item").length >= 4) {
    alert("The maximum number of items has reached 4!");
    return;
  }

  const newTodoElement = document.createElement("div");
  newTodoElement.classList.add("todo-item");

  const deletBtn = document.createElement("button");
  deletBtn.innerText = "❌";
  deletBtn.classList.add("delete-button");
  deletBtn.addEventListener("click", () => {
    newTodoElement.classList.add("removed");
    setTimeout(() => {
      newTodoElement.remove();
      resetCounter();
    }, 1000);
  });

  newTodoElement.innerText = `${counter}. ${value}`;
  newTodoElement.appendChild(deletBtn);
  counter++;

  document.getElementById("todoValue").appendChild(newTodoElement);
  document.getElementById("input").value = "";
};

const btn = document
  .getElementById("btn")
  .addEventListener("click", btnHandler);
