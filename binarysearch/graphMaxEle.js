//Given increasing decreasing array , find max element


const maxElement = (array) =>{
    let N = array.length - 1;
    let left = 0;
    let right = N;
    let max = -1;
    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        let ele = array[mid];

        //ELEMENT should be greater then adjacent element 
        //EDGE CASE : checking adjacent element if present
        if((mid == N|| ele > array[mid + 1]) && (mid == 0 || ele > array[mid - 1])){
            return max = array[mid];
        }else if(mid == 0|| ele > array[mid - 1]){
            left = mid + 1;
        }else{
            right = mid - 1
        }
    }
}

const array = [2,4,5,6,7,8,9,4,3,2]
console.log("MAX ELEMENT -- ",maxElement(array))