const grid_container = document.querySelector(".grid-container")
const btn = document.querySelector(".btn")

function createGrid(gridNumber) {
    let gridSize = gridNumber * gridNumber
    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement("div")
        cell.setAttribute("class", "cell")
    
        
        let cellWidth = 1500/gridNumber;
        cell.style.width = `${cellWidth}px`
        cell.style.height = `${cellWidth}px`
      
        cell.addEventListener("mouseover", ()=> {
            const r = Math.floor(Math.random () * 255)
            const g = Math.floor(Math.random () * 255)
            const b = Math.floor(Math.random () * 255)
           
            
            cell.style.background = `rgb(${r}, ${g}, ${b})`
            
        })
        grid_container.appendChild(cell)

    }
}


createGrid(16)



btn.addEventListener("click", () => {
    let value = prompt("Enter your prefered Grid Dimension")
    value = parseInt(value)
     while (isNaN(value) || value < 1 || value > 100) {
        value = prompt("Enter a valid value betwen 1-100")
        value = parseInt(value)
     }
     grid_container.innerHTML = ""

     createGrid(value)


})


