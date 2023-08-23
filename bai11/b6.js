let a=+prompt("nhap so ")
let b=0
 for(let i=1;i<a;i++){
    if(a%i==0){
        b+=i;
    }
 }
 if(a==b){
    console.log(`${a} la so hoan hao`);
 }else{
    console.log(`${a} 0 la so hoan hao`);
 }