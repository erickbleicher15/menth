const container = document.querySelector('.items');

let startX;
let scrollLeft;
let isDown;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
}
function mouseUp(e){
  isDown = false;
}
function mouseLeave(e){
  isDown = false;
}
function mouseMove(e){
  if(isDown){
    e.preventDefault();
    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;

  }
}
const flavoursContainer = document.querySelector('.items');
const flavoursScrollWidth = flavoursContainer.scrollWidth;

window.addEventListener('load', () => {
  while(true){
    self.setInterval(() => {
    if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
      flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
    }
  }, 10);
  
  }
  
});