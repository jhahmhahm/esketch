const grid = document.querySelector('.grid');
let mouseIsDown; 
let gridSize = 5;
const eraserToggle = document.getElementById('eraserToggle');
const griditem = document.querySelectorAll('.square');
const gridSlider = document.getElementById('gridSizeSlider');
const gridRange = document.getElementById('gridRange');
const gridP = document.createElement("p");
const chosenColor = document.getElementById('colorPicker');
const clearbtn = document.getElementById('clearbtn');
let color = "#80ff80";
window.addEventListener("mouseup", function(){mouseIsDown = false});



//creates our grid based on the gridsize. and adds an eventlistner to each div 
function createGrid(){
    gridP.textContent = `${gridSize} X ${gridSize}`;
    gridRange.appendChild(gridP);
    let squareSize = (600/gridSize); 

    grid.style.gridTemplateColumns = `repeat(${gridSize},${squareSize}px)`;
    grid.style.gridTemplateRows = `repeat(${gridSize},${squareSize}px)`;

    for(i=0; i < gridSize**2; i++){
        const square = document.createElement('div');
        square.classList.add("square");
        square.setAttribute('draggable', 'false' );
        grid.appendChild(square);
    }

    let gridPixels = grid.querySelectorAll('div');

    gridPixels.forEach(item =>{
        item.addEventListener("mousedown", function(){mouseIsDown =true;})
        item.addEventListener("mouseup", function(){mouseIsDown = false;})
        });

    gridPixels.forEach(item =>{
        item.addEventListener('mousemove', function squareColor() {
            if(mouseIsDown && eraserToggle.value === "off"){
                item.setAttribute('style', `background-color: ${color}`);
            }
    
            else if(mouseIsDown && eraserToggle.value === "on"){
                item.setAttribute('style', `background-color: white`);
            }
        })
        item.addEventListener('mousedown',function squareColor()
        {if(mouseIsDown && eraserToggle.value ==="off"){
            item.setAttribute('style', `background-color: ${color}`);}
            
        else if(mouseIsDown && eraserToggle.value === "on"){
            item.setAttribute('style', `background-color: white`);}    
        
        });
    });
        
};

createGrid();

function gridSizeChange(){
    gridSize = gridSlider.value;
    console.log(gridSize);
    deleteGrid()
    createGrid();
}
function deleteGrid(){
    while(grid.firstChild){
        grid.lastChild=null;
        grid.removeChild(grid.lastChild);
    }
}
//changes the color of the button based on on/off toggle. off = grey , on = blue 
eraserToggle.addEventListener("click", function(){ 
    eraserToggle.classList.toggle("eraserToggleON")
})
//changes the value of the eraser button between off to on 
function toggleEraser(){ 
    if(eraserToggle.value === "off"){
        eraserToggle.value ="on";
    }

    else if(eraserToggle.value === "on"){
        eraserToggle.value = "off";
    }

    console.log(eraserToggle.value);
}
// returns the chosen color of the color picker 
function getColor(){
    color = chosenColor.value;
    console.log(color);
}

