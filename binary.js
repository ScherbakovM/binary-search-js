let array = [1,2,3,4,5,6,7,8,9]


let search = function (nums , target) {
    let left = 0;
    let right = nums.length -1;
    let mid;

    while(left <=right) {
        mid = Math.round((right-left)/2 ) + left;

        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid -1;
        }else {
            left = mid + 1;
        }
    }
    return -1;
}


console.log(search(array,9 ))