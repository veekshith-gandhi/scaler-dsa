//In sorted array of duplicates , find the last occurency of given element 

const array = [3,6,6,12,12,12,23,26,26,26,90];
const target = 12;

const lastOccurence = (array,target) =>{

    let N = array.length-1;
    let left = 0;
    let right = N;
    let ans = -1;
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        let ele = array[mid];
        if(ele == target){
            ans = mid;
            left = mid + 1;
        }else if(ele < target){
            left = mid + 1
        }else if(ele > target){
            right = mid -1;
        }
    }
    return ans;
}

console.log("First occurence INDEX --------",lastOccurence(array,target));


