
self.addEventListener("message", m =>{
    arr = m.data
    for(let i in arr){
        for(let j = 0; j < arr.length - i; j++){
            self.postMessage([arr, arr.length - i, j, 3])
            if(arr[j+1] < arr[j]){
                x = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = x
            }
        }
    }
})