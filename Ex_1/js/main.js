const box = document.querySelector(".box"); //get box 

box.addEventListener("click", function() { // listener on click
    let nameClass = box.getAttribute("class"); // get class name
    let styleList = getComputedStyle(box); // set class properties (name and value) in a array

    let classContent = "";
    let i = 0;

    while (i < styleList.length) {
        if (styleList[i] == "background-color" || styleList[i] == "color" || styleList[i] == "height" || styleList[i] == "width" || styleList[i] == "display" || styleList[i] == "font-family" || styleList[i] == "font-size") {
            classContent += styleList[i] + " : " + styleList.getPropertyValue(styleList[i]) + "\n";
        }
        i++;
    }
    alert("Class name: " + nameClass + "\n" + classContent);
})