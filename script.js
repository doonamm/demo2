const cube = document.querySelector('.container');

var isSelected = false;
const lastPos = {x: 0, y: 0};
const rotate = {x: 0, y: 0};
cube.addEventListener('mousedown', (e)=>{
    isSelected = true;
    lastPos.x = e.clientX;
    lastPos.y = e.clientY;
});

window.addEventListener('mouseup', ()=>{
    isSelected = false;
    lastPos.x = 0;
    lastPos.y = 0;
});

window.addEventListener('mousemove', (e)=>{
    if(isSelected){
        const distanceX = e.clientX - lastPos.x;
        const distanceY = e.clientY - lastPos.y;

        rotate.x += distanceX*0.02;
        rotate.y += distanceY*0.02;

        cube.style.transform = `translateZ(-200px) rotateX(${-rotate.y}deg) rotateY(${rotate.x}deg)`;
    }
})