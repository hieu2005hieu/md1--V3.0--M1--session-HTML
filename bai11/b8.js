let number = 20 ;
let a= 0; 
let b=1;
let nextFrom
console.log('Fibonacci');
for (let i = 1; i <= number; i++) {
   document.write(a);
    nextFrom = a + b;
    a = b;
    b = nextFrom; 
    document.write("<br>")  
}