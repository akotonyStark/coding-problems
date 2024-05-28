function swap(a,b){
    let temp = a
    a = b
    b = temp
    return [a,b]
}

//with bubble sort, a sorted array starts to form at the end of the list so you reduce the length by i for each iteration

function bubbleSort(arr){
    console.log(arr)
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length - i; j++){
        
            //swap if arr[j] > arr[j+1] to bubble the largest number to the end
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

function selectionSort(arr){
    console.log(arr)
    for(let i=0; i<arr.length; i++){
        let min = arr[i]
        for(let j=i; j<arr.length; j++){
            if(arr[i] > arr[j]){
                //swap
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}


bubbleSort([3,5,3,7,9])
selectionSort([3,5,3,7,9,1])