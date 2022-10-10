const grid = document.querySelector('.grid');
let mouseIsDown; 
let gridSize = 16;


window.addEventListener("mouseup", function(){mouseIsDown = false});

function createGrid(){
    let squareSize = (600/gridSize); 

    grid.style.gridTemplateColumns = `repeat(${gridSize},${squareSize}px)`;
    grid.style.gridTemplateRows = `repeat(${gridSize},${squareSize}px)`;

    for(i=0; i < gridSize**2; i++){
        const square = document.createElement('div');
        square.classList.add("square");
        square.setAttribute('draggable', 'false' );
        grid.appendChild(square);
    }
}
createGrid();



const griditem = document.querySelectorAll('.square');
const chosenColor = document.getElementById('colorPicker');
let color = "#80ff80";

function getColor(){
    color = chosenColor.value;
    console.log(color);
}

griditem.forEach(item =>{
    item.addEventListener("mousedown", function(){mouseIsDown =true})
    item.addEventListener("mouseup", function(){mouseIsDown = false})
    });


griditem.forEach(item =>{
    item.addEventListener('mousemove', function squareColor() {
        if(mouseIsDown){
            item.setAttribute('style', `background-color: ${color}`);
        }
    })
    item.addEventListener('mousedown',function squareColor()
    {if(mouseIsDown){
        item.setAttribute('style', `background-color: ${color}`);}
    });   
});

        
    