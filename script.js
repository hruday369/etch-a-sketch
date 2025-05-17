var div = document.querySelector('div');
function creategrids(grid){
    let newElement =[]
     while(div.children.length > 0) {
        div.removeChild(div.lastChild)
    }
    let square = 500 / grid;
    for(let i=0; i<grid**2;i++){
            newElement[i] = document.createElement('div');
            newElement[i].style.border="1px solid black"
            newElement[i].style.height = `${square}px`;
            newElement[i].style.width = `${square}px`;
            newElement[i].addEventListener("mouseover",function(){
                    newElement[i].style.backgroundColor = "black";          
                })
                div.appendChild(newElement[i]);
    }
    
}

document.querySelector("button").addEventListener("click",function(){
    var gridnum = prompt("No of grids:")
    creategrids(gridnum)
});
