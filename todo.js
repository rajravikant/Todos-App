const btn_add = document.querySelector('input[type = "button"]');
const btn_remove = document.querySelector("#remove");
const list = document.getElementById("list");
const input = document.getElementById("todo-inp");

btn_add.addEventListener("click", () => {
  let newItem = document.getElementById("todo-inp").value;
  if (newItem != "") {
    const a = document.createElement("li");
    let span = document.createElement("span");
    a.appendChild(document.createTextNode(newItem));
    list.appendChild(a);
    span.innerHTML = "\u00d7";
    a.appendChild(span);
  }
  input.value = "";
});

btn_remove.addEventListener("click", () => {
  if (list.lastChild != null) {
    list.innerHTML = "";
  }
});

list.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
