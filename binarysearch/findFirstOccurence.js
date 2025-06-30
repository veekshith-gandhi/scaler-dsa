//In sorted array of duplicates , find the first occurency of given element 

const array = [3,6,6,12,12,12,23,26,26,26,90];
const target = 12;

const findFirstOccurenc = (array,target) =>{

    let N = array.length-1;
    let left = 0;
    let right = N;
    let ans = -1;
    /**
     * Imagine searching for 12 in [3,6,6,12,12,12,23,26,26,26,90]:
     * Initially, left = 0 and right = 10
     * After some iterations, left = 3 and right = 3 (pointing to 12).
     * If we stop (left < right condition fails), we miss checking the last remaining element.
     * Using <=, the loop runs one last time to verify the correct index.
     */
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        let ele = array[mid];
        if(ele == target){
            ans = mid;
            right = mid - 1;
        }else if(ele < target){
            left = mid + 1
        }else if(ele > target){
            right = mid -1;
        }
    }
    return ans;
}

console.log("First occurence INDEX --------",findFirstOccurenc(array,target))