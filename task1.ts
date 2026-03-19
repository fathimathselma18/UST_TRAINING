/* 1.write a program to print whether a student is early , 
late or on time for exam 9:30 am is the on time,
if a student arrives before 9:30 then print "EARLY"
and if the student arrives after 9:30 then print "LATE" and "ON-TIME" if student reaches at 9:30*/
let hour: number = 9;
let minute: number = 45;
let arrivedTime: number = hour * 60 + minute;
let onTime: number = 9 * 60 + 30;

if (arrivedTime == onTime) {
    console.log("On Time");
}
else if (arrivedTime < onTime) {
    console.log("Early");
}
else {
    console.log("Late");
}










/* 2. Calculate the BMI of a person . BMI =weight/(height*height)
underweight<18.5
normal weight >18.5 and <25
over weight>=25 and 30
obesity>30*/

let weight: number = 55;
let height: number = 175;
let bmi: number = weight / ((height / 100) * (height / 100));
if (bmi < 18.5) {
    console.log("underweight");
}
else if (bmi > 18.5 && bmi < 25) {
    console.log("normal weight");
}
else if (bmi >= 25 && bmi < 30) {
    console.log("overweight");
}
else {
    console.log("obesity");
}
