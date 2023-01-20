const math = Number(prompt("Enter Maths Marks")); 
const physics = Number(prompt("Enter Physics Marks")); 
const chemistry = Number(prompt("Enter hemistry Marks")); 

const total = math+physics+chemistry;
 const avg = total/3;

 console.log("Math:",math);
 console.log("Physics:",physics);
 console.log("Chemistry:",chemistry);
 console.log("==================");
 console.log("Total:",total);

 if (avg<70) {
    console.log("Grade C");
    
 }else if (avg>70 && avg <90) {
    console.log("Grade B");
    
 }else{
    console.log("Grade A");
    
 }
 console.log("Average:",avg.toFixed(2));

