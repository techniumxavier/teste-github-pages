let isDrawing = false;
let x = 0;
let y = 0;

let xTarget = 0;
let yTarget = 0;


displayScreen = document.getElementById('display-screen')


displayScreen.addEventListener('mousedown', (e)=>{
    e.prevent
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    displayScreen.style.cursor = "grab"
})


displayScreen.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      xTarget = e.offsetX;
      yTarget = e.offsetY;
      let scrollX = this.scrollX;
      let scrollY = this.scrollY;
      let xDif = x - xTarget;
      let yDif = y - yTarget; 

      let moveX = (scrollX + xDif) < 0 ? 0 : scrollX + xDif;
      let moveY = (scrollY + yDif) < 0 ? 0 : scrollY + yDif;

      scroll(moveX, moveY)
    }
  });


window.addEventListener('mouseup', (e) => {
  if (isDrawing) { 
    x = 0;
    y = 0;
    isDrawing = false;
    displayScreen.style.cursor = "default"
  }
});


function centralizeScreen(){

  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const contentHeight = displayScreen.clientHeight;
  const contentWidth = displayScreen.clientWidth;
  
  scrollTargetX = (contentWidth - viewportWidth)/2;
  scrollTargetY = (contentHeight - viewportHeight)/2;

  window.scroll(scrollTargetX, scrollTargetY);
}