const board = document.querySelector("#board");
for (const author in quotes) {
    const box = document.createElement('div');
    box.classList.add("box") ;

    const text = document.createElement('em');
    text.innerHTML = `“${quotes[author]}”`;

    const quoteAuthor = document.createElement('p');
    quoteAuthor.innerHTML = author;

    box.appendChild(text);
    box.appendChild(quoteAuthor);
    board.appendChild(box);
    }