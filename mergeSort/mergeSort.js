const merging = (arr,left,mid,right) => {
    
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArray = [];
    let rightArray = [];
    
    for(let i=0;i<n1;i++){
        leftArray.push(arr[left + i]);
    }
    for(let j=0;j<n2;j++){
        rightArray.push(arr[mid + 1 + j]);
    }
    console.log(leftArray , " ..........",rightArray)
    let i = 0;

    let j = 0;
    let k = left;
    console.log("K,",k)
    while(i < n1 && j < n2){
        if(leftArray[i] <= rightArray[j]){
            arr[k++] = leftArray[i++];
        }else{
            arr[k++] = rightArray[j++];
        }
    }

    while(i<n1){
        arr[k++] = leftArray[i++];
    }
    while(j<n2){
        arr[k++] = rightArray[j++];
    }
    // console.log("OO",arr)
    return arr;
}

const mergeSort = (arr,left,right) => {
    if(left < right){
        let mid = Math.floor(left + (right - left) / 2);
        mergeSort(arr,left,mid);
        mergeSort(arr,mid+1,right)

        merging(arr,left,mid,right);
    }
}

let array = [4, 1, 3,5, 2, 8, 19, 7];
mergeSort(array,0,array.length-1)
console.log("MERGE SORTED :", array);