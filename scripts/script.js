//---------------------------------------
function createFrame() {
  const frame = document.createElement('div');
  const body = document.querySelector('body');
  frame.style.width=`640px`;
  frame.style.height=`640px`;
  frame.style.border='solid 2px black';
  frame.classList.add('frame');
  body.appendChild(frame);

  createGrid(frame, 16);
}
//---------------------------------------
function createGrid(frame, size) {
  for (let j = 0; j < size; j++) {
    const row = document.createElement('div');
    row.classList.add('row');
    frame.appendChild(row);
    for (let i = 0; i < size; i++) {
      const square = document.createElement('div');
      let squarewidth = 640/size;
      let squareheight = 640/size;
      square.style.width=`${squarewidth}px`;
      square.style.height=`${squareheight}px`;
      square.style.border='solid 1px black';
      square.classList.add('square');
      row.appendChild(square);
    }
  }
}
//---------------------------------------
function paintSquare(e) {
  e.currentTarget.style.backgroundColor='black';
}
//---------------------------------------
function touchSquare() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseenter', paintSquare);
  });
}
//---------------------------------------
function changeDensity() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    let size = prompt('Choose the number of squares on one side of the grid:');
    if (size > 100) {size = 100;}
    const frame = document.querySelector('.frame');
    removeGrid(frame);
    createGrid(frame, size);
    touchSquare();
  });
}
//---------------------------------------
function removeGrid(frame) {
  const rows = document.querySelectorAll('.row');
  rows.forEach((row) => {
    frame.removeChild(row);
  });
}

createFrame();
touchSquare();
changeDensity();
