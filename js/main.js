
const set_grid = (x, y) =>{
    board = document.querySelector("#board")
    board.style.grid = `repeat(${x}, 1fr) / repeat(${y}, 1fr)`
    for(let i = 0; i < x * y; i ++){
        let monitor = document.createElement("div")
        monitor.classList.add("monitor")
        board.appendChild(monitor)
    }
}

function shuffledList(range){
    list = []
    for(let i = 0; i < range; i++){
        n = Math.floor(Math.random() * range + 1)
        if(!list.find(e => e == n)){
            list.push(n)
        }else i--
    }
    return list
}

function add_elements(list){
    monitors = document.querySelectorAll(".monitor")
    monitors.forEach(monitor => {
        for(n in list){
            bar = document.createElement("div")
            bar.classList.add("bar")
            bar.style.width = 100 / list.length + "%"
            bar.style.height = list[n] / list.length * 100 + "%"
            monitor.appendChild(bar)
        } 
    });
}


set_grid(4, 6)
add_elements(shuffledList(10))
