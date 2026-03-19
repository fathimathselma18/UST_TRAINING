
// /*4. Write a TS code to sort the array in ascending order without using any function
// example:
// array=8,2,5,1,4,9,7,6,3
// output=1,2,3,4,5,6,7,8,9
// */

let arr: number[] = [8, 2, 5, 1, 4, 9, 7, 6, 3]
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);
