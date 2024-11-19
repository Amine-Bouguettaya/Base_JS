const board = document.querySelector("#board");
const body = document.querySelector("#body");
const boxes = document.querySelectorAll(".box");

console.log(body);
function modifiyContent(body, box) {
    // console.log(body);
    // let colorIcon = box.style.backgroundColor;
    // let bodyBackgroundColor = body.style.backgroundColor;
    //     if(bodyBackgroundColor != box.backgroundColor) {
    //         body.style.backgroundColor = colorIcon;
    //         box.classList.removeProperty("outline");
    //         box.classList.add();
    //         return;
    //     }
    //     else {
    //         body.style.backgroundColor = "gray";
    //         return;
    //     }

}

console.log(boxes);

boxes.forEach(function getBox(box, body) {
    box.addEventListener("click", function(body, box){
        modifiyContent(body, box);
    })
});