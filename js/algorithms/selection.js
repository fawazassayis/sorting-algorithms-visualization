// list exchange
self.addEventListener("message", e =>{
    list = e.data
    for(let i in list){
        for(let j in list){
            if(list[j] > list[i]){
                x = list[i]
                list[i] = list[j]
                list[j] = x
            }
            self.postMessage([list, i, j, 19]);
        }
    }
})
