
let userInput = prompt("Enter a number");
const MAX_SQUARE = "800";
for (let x = 0; x < Math.pow(userInput, 2); x++) {
    let board = document.createElement('div');
    board.className = 'grid';
    board.id = 'gridId';
    document.getElementById('myContainer').appendChild(board);
    board.style.width = (MAX_SQUARE / userInput) + "px";
    board.style.height = (MAX_SQUARE / userInput) + "px";
}

let divs = document.querySelectorAll('.grid');
let r = Math.random(0, 255);
let mouseDown = false;
function getRandomInt() {
    return Math.floor(Math.random() * 255);
}

let myContainer = document.getElementById('myContainer');

myContainer.addEventListener("mousedown", () => {
    mouseDown = true;
})

myContainer.addEventListener("mouseup", () => {
    mouseDown = false;
})



divs.forEach((div) => {
    let r = getRandomInt();
    let g = getRandomInt();
    let b = getRandomInt();

    div.addEventListener('mouseover', () => {

        if (mouseDown) {
            if (div.style.backgroundColor == '') {

                div.style.backgroundColor = ('rgb(' + r + ',' + g + ',' + b + ')');
            } else {
                r -= 10;
                g -= 10;
                b -= 10;
                div.style.backgroundColor = ('rgb(' + r + ',' + g + ',' + b + ')');
            }
        }


    });

});



