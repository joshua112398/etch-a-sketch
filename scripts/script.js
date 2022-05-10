function createGrid() {
  const frame = document.createElement('div');
  const body = document.querySelector('body');
  frame.style.width='640px';
  frame.style.height='640px';
  frame.style.border='solid 2px black';
  frame.classList.add('frame');
  body.appendChild(frame);
  
  for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.width='40px';
    square.style.height='40px';
    square.style.border='solid 1px black';
    square.classList.add('square');
    frame.appendChild(square);
  }
}

createGrid();