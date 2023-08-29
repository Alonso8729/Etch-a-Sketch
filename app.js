
function createGrid(size) {
    const board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    const totalCells = size ** 2;
    for (let i = 0; i < totalCells; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor
                = '#596e79';
            console.log(cell.backgroundColor);
        });
        cell.style.backgroundColor = '#fafafa';
        cell.classList.add('cell')
        board.insertAdjacentElement("beforeend", cell);
    }
}

createGrid(16);
