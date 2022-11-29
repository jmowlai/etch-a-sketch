const container = document.getElementById("container");

function makeRows(x) {
  container.style.setProperty('--grid-rows', x);
  container.style.setProperty('--grid-cols', x);
  for (c = 0; c < (x * x); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "griditem";
  };
};

const griditem = document.querySelector('.griditem');

container.addEventListener('mouseover', () => {
  if (event.target.matches('.griditem')) {
    event.target.classList.add('fillin');
  }
});

function promptMe() {
  var size = prompt("Choose a Grid Size");
  makeRows(size);
}