/* 
Problem 1
Given an array of integers and target value, remove all occurences of the target in-place,
Move the remaining elements to the front of the array, and return the number of elements not equal to target
*/

function removeTargetAndRearrangeArray(target = 2, arr = [4, 1, 2, 5, 2, 3]) {
    let occurences = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            occurences.push(arr[i]);
            arr.splice(i, 1);
        }
    }
    arr = [...arr, ...occurences];
    console.log("rearranged array", arr);

    for (num of arr) {
        if (num != target) {
            count++;
        }
    }
    console.log("number of elements not equal to target", count);
}

/* 
Problem 2
Given an array of strings products and a string searchWord
Design a system that suggests at most 3 product names from the products after each searchWord is typed.
Suggested products should have a common prefix with searchWord. 
If there are more than 3 products with common prefix, return the three lexicographically minimum products
*/
function searchSuggestionSystem(products, searchWord) {
    products.sort();
    console.log(products, searchWord);
    let suggestions = products.filter((item) => item.includes(searchWord));
    console.log("Suggestions", suggestions.slice(0, 3));
}

/* 
Problem 3 - K Closest Points to Origin
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
*/

function kClosestPoint(list, k) { 
    let results = [];
    let distances = [];

    for ([x, y] of list) {
        let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        distances.push({ distance, points: [x, y] });
    }

    //now we wanna sort our distances in descending order
    distances.sort((a, b) => b.distance - a.distance);
    console.log(distances);

    while (k > 0) {
        let { points } = distances.pop();
        results.push(points);
        k--;
    }
    console.log(results)
}

/* Problem 4
You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English letters.
Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.
The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
The digit-logs maintain their relative ordering.
Return the final order of the logs.

 */


function reOrderDataLogFiles(logs){
    let arr = []
    for(let log of logs){
        let subArr = log.split(' ')
        arr.push(subArr)
    }

    //console.log(arr)
    let numLogs = []
    let letterLogs = []

    for(let log of arr){
        if(log.every((digit) => isNaN(digit))){
            letterLogs.push(log)
        }
        else{
            numLogs.push(log)
        }
    }
    let sorted = letterLogs.map((log) =>  log.slice(1)).sort()

    for(let x of sorted){
        // console.log('x:', x)
        for(let y of letterLogs){
            // console.log('y:', y)
            if(x.every(val => y.includes(val))){
                x.unshift(y[0])
            }
        }
    }

    console.log("letter logs", sorted)
    console.log("digit logs", numLogs)

    
   let temp =  [...sorted, ...numLogs]
   let results = []
   for(let value of temp){
        results.push(value.join(' '))
   }

   console.log("Results", results)



}

// removeTargetAndRearrangeArray()
// searchSuggestionSystem(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")
// kClosestPoint((list = [[3, 3],[5, -1],[-2, 4]]),(k = 2));
reOrderDataLogFiles(logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])
