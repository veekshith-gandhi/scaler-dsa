//GIven sorted array with distinct element search index of an element K
//if not return -1

//Brute Force : linear search   TC  : O(N)

const array = [3,6,9,12,14,19,23,26,35,56,90];
const K = 129;

const searchForK = (array,k) =>{
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right)/2);
        const element = array[mid];
        if(element == k){
            return mid;
        }else if(element < k){
            left = mid + 1;
        }else if(element > k){
            right = mid - 1;
        }
    }
    return -1;
}

const result  = searchForK(array,K);
console.log("RESULT --------------",result)
//BINARY SEARCH : TC : O(logN)