const board = document.querySelector("#board");
const box = document.createElement("div");
box.classList.add("box");

for (let i = 1; i <= 4; i++) {
    console.log(i);
    let newBox = box.cloneNode();
    newBox.innerText = i;
    board.appendChild(newBox);
    newBox.addEventListener("click", function() {
        let className = newBox.getAttribute("class");
        console.log(className);
        if (className == "box") {
            newBox.classList.remove("box");
            newBox.classList.add("box-clicked");
            return;
        }
        if (className == "box-clicked") {
            newBox.classList.remove("box-clicked");
            newBox.classList.add("box");
            return;
        }

    })
}

