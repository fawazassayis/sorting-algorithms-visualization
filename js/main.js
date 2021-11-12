// import worker ( for threading )
let worker = new Worker("js/worker.js")

// set grid dimension & append monitors
const set_grid = (x, y) =>{
    board = document.querySelector("#board")
    board.style.grid = `repeat(${x}, 1fr) / repeat(${y}, 1fr)`
    for(let i = 0; i < x * y; i ++){
        let monitor = document.createElement("div")
        monitor.classList.add("monitor")
        board.appendChild(monitor)
    }
}

// generate a shuffled list containing all number in a range 
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

// add a visualization bar for each element in the shuffledList in each monitor
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
list = shuffledList(30)
add_elements(list)
worker.postMessage(list)

