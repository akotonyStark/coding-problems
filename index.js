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


function fibbo(n){
    let arr = [0,1]
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    console.log(arr)
}

function recursiveFibbo(n){
    if(n<=1){
        return n
    }
    else{
        return recursiveFibbo(n-1) + recursiveFibbo(n-2)
    }
}

//brute force factorial
function fact(n){
    let fact = 1
    for(let i=1; i<=n; i++){
        fact = fact * i
    }
    return fact
}

//using recursion
function factorial(n){
    if(n<=1){
        return 1
    }
    return n * factorial(n-1)
}

/*is subsequence problem
    Given two strings s and t, return true if s is a subsequence of t, or false if otherwise
*/

function isSubsequence(s,t){
    let ss = s.split('')
    let tt = t.split('')

    return ss.every((element) => tt.includes(element))
}

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
*/

function merger(word1, word2){
    word1Arr = word1.split('')
    word2Arr = word2.split('')
    let merged = []
   
        for(let i=0; i<Math.max(word1.length, word2.length); i++){
            if(i < word1.length){
               merged.push(word1[i])
            }
            if(i < word2.length){
               merged.push(word2[i]) 
            }
        }
    console.log(merged.join(''))
}

/*
Given a non-empty array of integer "nums", every integer appears twice
except for one. find that number
*/

function singleNumber(nums){
    let obj = {}
    nums.forEach(element => {
        obj[element] = ++obj[element] || 1
    });
    return obj
}

function singleNumberSolutionTwo(nums){
    let map = nums.reduce((obj, x) => {
        obj[x] = ++obj[x] || 1
        return obj
    })
    return map
}


/* For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/



/*
The maximum contiguous subarray problem is the task of finding the largest possible sum of a contiguous subarray,
 within a given one-dimensional array A[1...n] of numbers.

 take arr = [-2,1,-3,4,-1,2,1,-5,4]
*/

function maxContiguousSubArr(arr){
    //first break the array into multiple subarrays

    let arrOfSubArrays = []
    let arrOfSubArraySums = []
    for(let i=0; i<arr.length; i++){
        for(let j=1;j<arr.length; j++){
            //console.log(i,j)
            let x = arr.slice(i, j)
            //if(x.length>0)
            arrOfSubArrays.push(x)
            let sumOfX = x.reduce((total, item) => total + item,0)
            arrOfSubArraySums.push(sumOfX)
        }
        
        
    }

    //  console.log("SubArrays", arrOfSubArrays)
    //  console.log(arrOfSubArraySums)
    let maxSum = Math.max(...arrOfSubArraySums)
    let indexOfMaxSum = arrOfSubArraySums.indexOf(maxSum)
    let maxSubArray = arrOfSubArrays[indexOfMaxSum]
    console.log(maxSubArray)
}



/* There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has,
 and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, 
they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
*/

function kidsWithCandies(candies, extra){
    let currentMaxCandy = Math.max(...candies)
    let results = []
    for(let i=0; i<candies.length; i++){
        if((candies[i]+extra) >= currentMaxCandy){
            results.push(true)
        }
        else{
            results.push(false)
        }
    }
    console.log(results)
}

/* You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers
can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

*/

function canPlaceFlowers(flowerbed, n){
   let pointer = 0
   while(pointer < flowerbed.length && n>0){

        if(flowerbed[pointer] !=1 && flowerbed[pointer+1] ==0){
            flowerbed[pointer+1] = 1
            n--
        }
        pointer++
   }
   console.log(flowerbed, n == 0 ? true : false)
}


/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

function reverseWords(s){
    let arrOfWords = s.split(' ')
    console.log(arrOfWords.reverse().join(' '))
}

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

function productExceptSelf(arr){
    let copy = [...arr]
    let answer = []
    for(let i=0; i<arr.length; i++){
        copy.splice(i,1)
        answer.push(copy)
        copy = [...arr]
    }

    console.log(answer.map((item) => item.reduce((acc, x) => acc * x)))
}


productExceptSelf([1,2,3,4])

/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

function canJump(){

}


/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/



/* Write a function that will verify if a string has balanced parenthesis
Example:
isBalanced('()()(())') => true
*/

function isBalanced(str){
    let stack = []
    for(let char of str){
        if(char === '('){
            stack.push(char)
        }
        else if(stack.pop() !== '('){
            return false
        }
    }
    return stack.length !== 0 ? false : true 
}

/* Write a function that will return a unique values from an array
Example: removeDuplicates('eded') => ['e','d']
*/

function removeDuplicates(str){
    let arr = str.split('')
    let uniqueValues = [...new Set(arr)]
    return uniqueValues
}

/* Get the character that is most commonly used in a string
Example getMaxChar('aaabbc') => //a
*/

function getMaxChar(str){
    let arr = str.split('')
    let map = {}
    arr.forEach((char) => {
        map[char] = ++map[char] || 1
    })

   let values = Object.values(map)
   let max = Math.max(...values)
   //console.log(Object.keys(map))
   let mostOccuringChar = Object.keys(map).find((key) => map[key] == max)
   console.log("Most Common Character is ", mostOccuringChar)
}


removeTargetAndRearrangeArray()
// searchSuggestionSystem(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")
// kClosestPoint((list = [[3, 3],[5, -1],[-2, 4]]),(k = 2));
//reOrderDataLogFiles(logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"])
//fibbo(10)
//console.log(recursiveFibbo(10))
//console.log(fact(5))
//console.log(factorial(5))
//console.log(isSubsequence('ace', 'abcde'))
//merger("abcd", "pq")
//console.log(singleNumber([1,2,2,1,4,3,3]))
//console.log(singleNumberSolutionTwo([1,2,2,1,4,3,3]))
//maxContiguousSubArr([-2,1,-3,4,-1,2,1,-5,4])
//kidsWithCandies([2,3,5,1,3],  3)
//canPlaceFlowers([1,0,0,0,1], 1)
//reverseWords('the sky is blue')
// console.log("Is balanced isBalanced('()()(())')", isBalanced('()()(())'))
// console.log(" removeDuplicates('ededabaaecev')", removeDuplicates('ededabaaecev'))
getMaxChar('aaabbcppppp')
