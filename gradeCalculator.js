var math = Number(prompt("Enter Maths Marks"));
var physics = Number(prompt("Enter Physics Marks"));
var chemistry = Number(prompt("Enter hemistry Marks"));
var total = math + physics + chemistry;
var avg = total / 3;
console.log("Math:", math);
console.log("Physics:", physics);
console.log("Chemistry:", chemistry);
console.log("==================");
console.log("Total:", total);
if (avg < 70) {
    console.log("Grade C");
}
else if (avg > 70 && avg < 90) {
    console.log("Grade B");
}
else {
    console.log("Grade A");
}
console.log("Average:", avg.toFixed(2));
