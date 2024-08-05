const inputBox = document.querySelector(".input")
const listContainer = document.querySelector(".list-container")
const btn = document.querySelector("button")

console.log (inputBox)
console.log(listContainer)
console.log(btn)

btn.addEventListener("click", () => {
    if(inputBox.value === ""){
        alert("Add a Task First!")
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
})

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();