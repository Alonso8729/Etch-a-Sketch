function createGrid(size) {
    const board = document.querySelector('.board');

    // Clear existing grid cells
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    const cellWidth = 100 / size;

    board.style.gridTemplateColumns = `repeat(${size},var(--cell-width))`;
    board.style.gridTemplateRows = `repeat(${size},var(--cell-width))`;

    const totalCells = size ** 2;
    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement('div');
        cell.style.setProperty('--cell-width', `${cellWidth}%`);
        cell.addEventListener('mouseenter', () => {
            if (isRainbowMode)
                cell.style.backgroundColor = getRandomColor();
            else
                cell.style.backgroundColor
                    = '#596e79';
            console.log(cell.backgroundColor);
        });
        cell.style.backgroundColor = '#fafafa';
        cell.classList.add('cell')
        board.appendChild(cell);
    }
}

function clearGrid() {
    const board = document.querySelector('.board');

    // Clear existing grid cells
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    createGrid(range.value)

}


//set initial grid size
createGrid(16);

//grid size range event listener
const range = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue');

range.addEventListener('input', () => {
    const currentValue = range.value;
    rangeValue.textContent = currentValue;
});

// Initially set the range value
rangeValue.textContent = range.value;

//set grid size button event listener
let set = document.getElementById('set-grid-button');
set.addEventListener('click', () => {
    createGrid(range.value);
});

//clear button event listener
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    clearGrid();
});

/*Rainbow Mode - hovering color changes randomly*/
//rainbow flag
let isRainbowMode = false;

let rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', () => {
    isRainbowMode = !isRainbowMode;
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}