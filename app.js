const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;


let painting = false;


function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}

//캔버스에서만 그릴거니까 그 좌표값만 알면된다
//이를 의미하는 offsetXorY 
//캔버스 올라가서 클릭하면 그림 그릴 수 있는 게 캔버스니
//구현 어떻게 하는지 생각해보 -> 이벤트로 함다
//클릭하면 발생하는 이벤트 mousedown

/*캔버스란 html의 한 요소이나 context 를 갖는 점이 다르다 
즉 픽셀에 접근할 수 있다는 것이 특이점이다 

사실 offset과 콘텍스트 의미가 다가오진 않지만 일단 따라했다 
어레이 언급하고 mousedown 함수 지우자마자 flex 설정한거 튕김 ...? 
*/



Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
    );