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
  return;
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
      square.style.backgroundColor= 'rgba(0, 0, 0, 0)';
      square.classList.add('square');
      row.appendChild(square);
    }
  }
  return;
}
//---------------------------------------
function removeGrid(frame) {
  const rows = document.querySelectorAll('.row');
  rows.forEach((row) => {
    frame.removeChild(row);
  });
  return;
}
//---------------------------------------
function paintSquare(e) {
  if (e.currentTarget.style.backgroundColor === 'rgb(0, 0, 0)') {
    return; // if already black, do nothing
  }
  let strLength = (e.currentTarget.style.backgroundColor).length;
  const rgbStr = e.currentTarget.style.backgroundColor.slice(5, strLength - 1);
  const strArr = rgbStr.split(', ');
  console.log(strArr);
  let alpha = parseFloat(strArr[3]) + 0.1; // transparency value
  console.log(alpha);
  e.currentTarget.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
  return;
}
//---------------------------------------
function touchSquare() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseenter', paintSquare);
  });
  return;
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
  return;
}
//---------------------------------------

createFrame();
touchSquare();
changeDensity();
