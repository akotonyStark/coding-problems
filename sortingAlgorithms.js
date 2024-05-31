
function insertionSort(arr){

    //start from position 1
    for(let i=1; i<arr.length; i++){
        let currentElement = arr[i]
        let lastIndex = i - 1

        while(lastIndex >=0 && currentElement < arr[lastIndex]){
            arr[lastIndex + 1] = arr[lastIndex]
            lastIndex--
        }
        arr[lastIndex + 1] = currentElement
    }
    console.log(arr)
}

function bubbleSort(arr){
   
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
            
        }
    }

    console.log(arr)
}
 bubbleSort([3,5,3,7,9])
// selectionSort([3,5,3,7,9,1])
//insertionSort([8,2,4,1,3])