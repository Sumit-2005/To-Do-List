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
    }
    inputBox.value = "";
})