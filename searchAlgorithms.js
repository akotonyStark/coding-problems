function linearSearch(list , target){
    console.log('running linear search...')
    for(let i=0; i<list.length; i++){
        if(list[i] == target){
            console.log('Found')
            break;
        }
    }
}

function binarySearch(list, target){
    console.log('running binary search...')
    let left = 0
    let right = list.length - 1

    while(left <= right){
        let mid = Math.floor(list.length/2)
        if(list[mid] == target){
            console.log("Found", target, " at position ", mid)
            break
        }
        else if(target < list[mid]){
            right = mid - 1 
            console.log("Found", target, "on the left at position ", right)
            break
        }
        else{
            left = mid + 1
            console.log("Found", target, "on the right at position ", left)
            break
        }
    }
}

linearSearch([3,5,3,7,9,1,8], 9)
binarySearch([1,2,4,6,8,22,45,47,52,55,89,90,98,99], 22)