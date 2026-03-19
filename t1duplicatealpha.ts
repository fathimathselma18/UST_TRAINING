
/*2. Write a TS code to remove the duplicate alphabets from the string without using any function
Example:
String= correspondence
output= spd*/

let strr: string = "correspondence"
let result: string = ""

for (let i: number = 0; i < strr.length; i++) {
    let count: number = 0;

    for (let j: number = 0; j < strr.length; j++) {
        if (strr[i] === strr[j]) {
            count++;


        }
    }
    if (count === 1) {
        result += strr[i];
    }
}
console.log(result);





