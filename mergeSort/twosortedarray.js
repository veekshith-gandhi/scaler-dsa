const mergeSort = (arr1,arr2) => {
    let n = arr1.length;
    let m = arr2.length;

    let i=0;
    let j=0;

    let sortedArray = [];
    while(i<n && j<m){
        if(arr1[i] < arr2[j]){
            sortedArray.push(arr1[i++])
        }else{
            sortedArray.push(arr2[j++])
        }
    }
    while(i<n){
        sortedArray.push(arr1[i++])
    }
    while(j<m){
        sortedArray.push(arr2[j++])
    }
    return sortedArray;
}

let a = [2,4,9];
let b = [3,11,19];

console.log("Merge-Sort : ",mergeSort(a,b));