
/*  1.Write a TS code to reverse a string value without using a function
example:
string=Typescript
Reverse= tpircSepyT*/

let stringg: string = "TypeScript";
let reverse: String = "";

for (let i = stringg.length - 1; i >= 0; i--) {
    reverse += stringg[i];
}
console.log(reverse);
