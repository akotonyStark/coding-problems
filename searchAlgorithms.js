function linearSearch(list , target){
    console.log('running linear search...')
    for(let i=0; i<list.length; i++){
        if(list[i] == target){
            console.log('Found ', target, ' at position ', i)
            break;
        }
    }
}

function binarySearch(list, target){
    console.log('running binary search...')
    let left = 0
    let right = list.length - 1
    let mid
    while(left <= right){
        mid = left + Math.floor((right - left) / 2);
        if(list[mid] == target){
            return mid
        }
        else if(target < list[mid]){
            right = mid - 1 
        }
        else{
            left = mid + 1
        }
    }
    return -1
}


function recursiveBinarySearch(list, target){
    console.log('running recursive binary search...', list)
    if(list.length == 0){
        return false
    }
    else{
        let mid =   Math.floor(list.length / 2);
        if(list[mid] == target){
            return mid
        }
        else if(target > list[mid]){
            return recursiveBinarySearch(list.slice(mid+1), target)
        }
        else{
            return recursiveBinarySearch(list.slice(0, mid), target)
        }
    }
}

linearSearch([3,5,3,7,9,1,8], 9)
console.log(binarySearch([1,2,4,6,8,22,45,47,52,55,89,90,98,99], 22))
console.log(recursiveBinarySearch([1,2,4,6,8,22,45,47,52,55,89,90,98,99], 52))