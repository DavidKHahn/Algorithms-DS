function topSum(arr){
    const len = arr.length;
    let biggest = arr[0];
    let second = arr[1];
    let i = 2;

    if (len < 2) return null;

    if(biggest < second){
        biggest = arr[1];
        second = arr[0];
    }
    for( ;i<len; i++){
        if (arr[i] > biggest){
        second = biggest;
        biggest = arr[i];
        }
        else if (arr[i] > second){
        second = arr[i];
        }
    }
    return biggest + second;
}

console.log(topSum([6,4,3,2,1,7,10]))
// 17
console.log(topSum([1,2,12,7,11]))
// 23
