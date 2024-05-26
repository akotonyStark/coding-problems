
/* 
Problem 1
Given an array of integers and target value, remove all occurences of the target in-place,
Move the remaining elements to the front of the array, and return the number of elements not equal to target
*/


function removeTargetAndRearrangeArray(target = 2, arr = [4,1,2,5,2,3]){
    let occurences = []
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target){
            occurences.push(arr[i])
            arr.splice(i,1)
        }
    }
    arr = [...arr,...occurences]
    console.log("rearranged array", arr)
    
    for(num of arr){
        if(num != target){
            count++
        }
    }
    console.log("number of elements not equal to target", count)
}

/* 
Problem 2
Given an array of strings products and a string searchWord
Design a system that suggests at most 3 product names from the products after each searchWord is typed.
Suggested products should have a common prefix with searchWord. 
If there are more than 3 products with common prefix, return the three lexicographically minimum products
*/
function searchSuggestionSystem(products, searchWord){
    products.sort()
    console.log(products, searchWord) 
    let suggestions = products.filter((item) => item.includes(searchWord))
    console.log("Suggestions", suggestions.slice(0,3))
}

removeTargetAndRearrangeArray()
searchSuggestionSystem(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")
