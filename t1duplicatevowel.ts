// /*3. Write a TS  code to remove the duplicate vowels from the string without using any function
// Example:
// String = correspondence
// output=crrspndnc*/

let word: string = "correspondence"
let results: string = "";
let vowels: string = "aeiou";

for (let i: number = 0; i < word.length; i++) {
    let ch = word[i];
    let isVowel = false;

    for (let j: number = 0; j < vowels.length; j++) {
        if (ch === vowels[j]) {
            isVowel = true;
            break;
        }
    }

    if (!isVowel) {
        results += ch;
    }
}
console.log(results);
