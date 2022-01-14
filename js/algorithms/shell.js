self.addEventListener("message", e =>{
    arr = e.data
    let gap = 0
    while (gap < arr.length){
        gap = gap * 3 + 1
    }
    while (gap > 1){
        gap = Math.floor(gap / 3)
        for(let i = gap; i < arr.length; i++){
            key = arr[i]
            j = i - gap
            while (j >= 0 && arr[j] > key) {
                arr[j+gap] = arr[j]
                self.postMessage([arr, i, j, 20, gap]);
                j -= gap
                // self.postMessage([arr, i, j, 20, gap]);
            }
            arr[j+gap] = key
            self.postMessage([arr, i, j, 20, gap]);
            
        }
    }
})
