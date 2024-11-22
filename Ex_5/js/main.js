const board = document.querySelector("#board");
for (const author in quotes) {
    const box = document.createElement('div');
    box.classList.add("box");
    const img = document.createElement("img");
    img.src = "assets/star_empty.png";
    const textLocal = `${author}: "${quotes[author]}"`;
    img.addEventListener("click", function() {
        const isActive = img.classList.contains("active");
        if (isActive) {
            img.src = "assets/star_empty.png";
            localStorage.removeItem(author);
        }
        else {
            img.src = "assets/star.png";
            localStorage.setItem(author, textLocal);
        }
        img.classList.toggle("active");
    })
    const text = document.createElement('em');
    text.innerHTML = `“${quotes[author]}”`;

    const quoteAuthor = document.createElement('p');
    quoteAuthor.innerHTML = author;

    box.appendChild(text);
    box.appendChild(quoteAuthor);
    box.appendChild(img);
    board.appendChild(box);
    }