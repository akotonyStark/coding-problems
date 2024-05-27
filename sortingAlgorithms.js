function swap(a,b){
    let temp = a
    a = b
    b = temp
    return [a,b]
}
function bubbleSort(list){
    for(let i=0; i<list.length; i++){
        for(let j=0; j<list.length - i; j++){
            if(list[j] > list[j+1]){
                //swap(list[i],list[i+1])
                let temp = list[j]
                list[j] = list[j+1]
                list[j+1] = temp
            }
        }
    }
    console.log(list)
} //O(n)squared

bubbleSort([3,5,3,7,9,1,8,8,0,5,22,5,7,89,11])