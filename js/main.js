const algorithms = [
    "Binary Insetion Sort", // binaryInsertion
    "bitonic Sort", // bitonic
    "Block Merge Sort ( Wiki Sort )", // blockMerge
    "Bubble Sort", // "bubble
    "Cocktail Shaker Sort", // cocktailShaker
    "Combo Sort", // combo
    "Cycle Sort", // cycle
    "Gnome Sort", // gnome
    "Heap Sort", // heap
    "Insertion Sort", // insertion
    "Merge Sort", // merge
    "Odd-Even Sort", // "oddEven
    "Quick Sort (dual pivot)", // quickDualPivot
    "Quick Sort ( LL ptrs )", // quickLL
    "Quick Sort (LR ptrs)", // quickLR
    "Quick Sort (terany, LR ptrs)", // quickTeranyLL
    "Quick Sort (terany, LL ptrs)", // quickTeranyLR
    "Radix Sort (LSD)", // radixLSD
    "Radix Sort (MSD)", // radixMSD
    "Selection Sort", // selection
    "Shell Sort", // shell
    "Smooth Sort", // smooth
    "Std::sort (gcc)", // stdGCC
    "Trim Sort" // trim
];

// put threads to work
let binaryInsertion = new Worker('js/algorithms/binaryInsertion.js');
let bitonic = new Worker('js/algorithms/bitonic.js');
let blockMerge = new Worker('js/algorithms/blockMerge.js');
let bubble = new Worker('js/algorithms/bubble.js');
let cocktailShaker = new Worker('js/algorithms/cocktailShaker.js');
let combo = new Worker('js/algorithms/combo.js');
let cycle = new Worker('js/algorithms/cycle.js');
let gnome = new Worker('js/algorithms/gnome.js');
let heap = new Worker('js/algorithms/heap.js');
let insertion = new Worker('js/algorithms/insertion.js');
let merge = new Worker('js/algorithms/merge.js');
let oddEven = new Worker('js/algorithms/oddEven.js');
let quickDualPivot = new Worker('js/algorithms/quickDualPivot.js');
let quickLL = new Worker('js/algorithms/quickLL.js');
let quickLR = new Worker('js/algorithms/quickLR.js');
let quickTeranyLL = new Worker('js/algorithms/quickTeranyLL.js');
let quickTeranyLR = new Worker('js/algorithms/quickTeranyLR.js');
let radixLSD = new Worker('js/algorithms/radixLSD.js');
let radixMSD = new Worker('js/algorithms/radixMSD.js');
let selection = new Worker('js/algorithms/selection.js');
let shell = new Worker('js/algorithms/shell.js');
let smooth = new Worker('js/algorithms/smooth.js');
let stdGCC = new Worker('js/algorithms/stdGCC.js');
let trim = new Worker('js/algorithms/trim.js');

// generate a shuffled list containing all number in a range 
function shuffledList(range){
    let list = []
    for(let i = 0; i < range; i++){
        let n = Math.floor(Math.random() * range + 1)
        if(!list.find(e => e == n)){
            list.push(n)
        }else i--
    }
    return list
}

// add a visualization bar for each element in the shuffledList in each graph
function add_elements(list){
    let graphs = document.querySelectorAll(".graph")
    graphs.forEach((graph, i) => {
        for(let n in list){
            let bar = document.createElement("div")
            bar.classList.add("bar")
            bar.style.width = 100 / list.length + "%"
            bar.style.height = list[n] / list.length * 100 + "%"
            graph.appendChild(bar)
        } 
    });
}

// update elements with each iteration
function update_elements(list, i, j, gi){
    let graph = document.querySelectorAll(".graph")[gi] // gi = graph index
    let bars = graph.children
    for(let c = 0; c < 24; c++){
        bars[c].style.background = "white"
    }
    bars[i].style.background = "red";
    bars[j].style.background = "green";
    bars[j+1].style.background = "blue";
    for(let n in list){
        bars[n].style.width = 100 / list.length + "%"
        bars[n].style.height = list[n] / list.length * 100 + "%"
    }

}

// set grid dimension & append graphs
const set_grid = (x, y) =>{
    let board = document.querySelector("#board")
    board.style.grid = `repeat(${x}, 1fr) / repeat(${y}, 1fr)`
    for(let i = 0; i < x * y; i ++){
        let monitor = document.createElement("div")
        monitor.classList.add("monitor")
        let header = document.createElement("div")
        header.innerHTML = algorithms[i]
        header.classList.add("header")
        let graph = document.createElement("div")
        graph.classList.add("graph")
        monitor.appendChild(header)
        monitor.appendChild(graph)
        board.appendChild(monitor)
    }
}

let [x, y] = [4, 6]
let list = shuffledList(x*y)
set_grid(x, y)
add_elements(list)

// send list to workers

binaryInsertion.postMessage(list)
bitonic.postMessage(list)
blockMerge.postMessage(list)
bubble.postMessage(list)
cocktailShaker.postMessage(list)
combo.postMessage(list)
cycle.postMessage(list)
gnome.postMessage(list)
heap.postMessage(list)
insertion.postMessage(list)
merge.postMessage(list)
oddEven.postMessage(list)
quickDualPivot.postMessage(list)
quickLL.postMessage(list)
quickLR.postMessage(list)
quickTeranyLL.postMessage(list)
quickTeranyLR.postMessage(list)
radixLSD.postMessage(list)
radixMSD.postMessage(list)
selection.postMessage(list)
shell.postMessage(list)
smooth.postMessage(list)
stdGCC.postMessage(list)
trim.postMessage(list)

// creating a delayed callstack for the animation

let selection_delay = 0;
selection.addEventListener("message", m =>{
    selection_delay += 300
    setTimeout(() => {
        update_elements(...m.data)
    }, selection_delay);
})

let shell_delay = 0;
shell.addEventListener("message", m =>{
    shell_delay += 300
    setTimeout(() => {
        update_elements(...m.data)
    }, shell_delay);
})

let bubble_delay = 0;
bubble.addEventListener("message", m =>{
    bubble_delay += 300
    setTimeout(() => {
        update_elements(...m.data)
    }, bubble_delay);
})
