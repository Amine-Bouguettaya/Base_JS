const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector("#clicked-box");

box1.addEventListener("click", function() {
    temp = getComputedStyle(box1);
    for (i = 0; i < temp.length; i++) {
        if (temp[i] == "background-color") {
            box5.style.backgroundColor = temp.getPropertyValue(temp[i]);
            box5.innerHTML = temp.getPropertyValue(temp[i]);
        }
    }
})

box2.addEventListener("click", function() {
    temp = getComputedStyle(box2);
    for (i = 0; i < temp.length; i++) {
        if (temp[i] == "background-color") {
            box5.style.backgroundColor = temp.getPropertyValue(temp[i]);
            box5.innerHTML = temp.getPropertyValue(temp[i]);
        }
    }
})

box3.addEventListener("click", function() {
    temp = getComputedStyle(box3);
    for (i = 0; i < temp.length; i++) {
        if (temp[i] == "background-color") {
            box5.style.backgroundColor = temp.getPropertyValue(temp[i]);
            box5.innerHTML = temp.getPropertyValue(temp[i]);
        }
    }
})

box4.addEventListener("click", function() {
    temp = getComputedStyle(box4);
    for (i = 0; i < temp.length; i++) {
        if (temp[i] == "background-color") {
            box5.style.backgroundColor = temp.getPropertyValue(temp[i]);
            box5.innerHTML = temp.getPropertyValue(temp[i]);
        }
    }
})