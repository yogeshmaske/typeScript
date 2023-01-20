const obj ={
    name:"abc",
    age:30
};

console.log(Object.entries(obj));
console.log(Object.entries(obj)[0]);
console.log(Object.entries(obj)[1]);

for (const [key,value] of Object.entries(obj)) {
console.log(`${key}:${value}`);
}


const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // Expected output:
  // "a: somestring"
  // "b: 42"
  