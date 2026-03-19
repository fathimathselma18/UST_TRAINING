
// /*5. Write a TS code to count the unique vowels in string
// Example:
// String:correspondance
// output:0 unique vowels*/

let str: string = "correspondence";
let vowel1: string = "aeiou";
let count: number = 0;

for (let i = 0; i < vowel1.length; i++) {
    let v = vowel1[i];
    let vowcount = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[j] === v) {
            vowcount++;
        }
    }
    if (vowcount === 1) {
        count++;
    }
}

console.log(count);
