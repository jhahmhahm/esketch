const grid = document.querySelector('.grid');
let mouseIsDown; 
let gridSize = 5;

//creates our grid based on the gridsize. 
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
const eraserToggle = document.getElementById('eraserToggle');
const griditem = document.querySelectorAll('.square');
const gridSlider = document.getElementById('gridSizeSlider');
const gridP = document.createElement("p");
const chosenColor = document.getElementById('colorPicker');
let color = "#80ff80";
window.addEventListener("mouseup", function(){mouseIsDown = false});


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

//querySelector turns our selected elements into an array. So we use the forEach method to parse through each item. For each Item, this function LISTENS if the mouse is clicked down on it and returns true/false


griditem.forEach(item =>{
    item.addEventListener("mousedown", function(){mouseIsDown =true;})
    item.addEventListener("mouseup", function(){mouseIsDown = false;})
    });

//forEach item, we listen for BOTH mousemove and mousedown on each grid item only if mouseIsDown is true. If the eraser toggle is off, it fills the grid with the selected color. If eraser toggle is on, then it fills the grid with the color WHITE to act as an eraser. 

griditem.forEach(item =>{
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
