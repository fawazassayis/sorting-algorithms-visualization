self.addEventListener("message", e =>{
    arr = e.data
    for(let i = 1; i < arr.length; i++){
        key = arr[i]
        j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            self.postMessage([arr, i, j, 20]);
            j -= 1
            self.postMessage([arr, i, j, 20]);
        }
        arr[j+1] = key
        self.postMessage([arr, i, j, 20]);
        
    }
})
