const countSort = (arr) =>{
    let max = Math.max(...arr);
    let freq = new Array(max + 1).fill(0);
    for(let i=0; i< arr.length; i++){
        freq[arr[i]]++;
    }

    let k = 0;
    for(let digit = 0; digit <= freq.length; digit++){
        for(let count = 1; count <= freq[digit]; count++){
            arr[k++] = digit;
        }
    }
    return arr;
}

let arr = [18,1,65,270,1,28,3,3];
console.log("COUNT SORT : ",countSort(arr))