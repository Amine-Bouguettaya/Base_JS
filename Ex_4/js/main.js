const board = document.querySelector("#board");
const body = document.querySelector("#body");
const boxes = document.querySelectorAll(".box");

boxes.forEach(box=> {
    //ajouter un ecouteur d'évenementt qui se déclanche quand un utilisateur clic sur un élément box.
    box.addEventListener("click", function(){
        // verifier si class active est présente sur lémément box.
        const isActive = box.classList.contains('active');
        const img = box.querySelector("img");
        const pText = box.querySelector("p");
        if (isActive) {
            box.classList.remove("boxClicked");
            box.classList.add("box");
            body.style.backgroundColor = "gray";
            box.removeChild(pText);
        }
        else {
            box.classList.remove("box");
            box.classList.add("boxClicked");
            body.style.backgroundColor = img.getAttribute("id");
            box.style.backgroundColor = img.getAttribute("id");
            newChild = document.createElement("p");
            newChild.classList.add("p");
            newChild.innerHTML = img.getAttribute("alt");
            box.appendChild(newChild);
        }
        box.classList.toggle("active");
    })
}
);