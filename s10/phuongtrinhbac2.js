let a=+prompt("nhap so a");
let b=+prompt("nhap so b");
let c=+prompt("nhap so c");
let d=b**2-4*a*c;
let sqrt=Math.sqrt(d);
if (d==0){
    console.log("x1=x2=",-b/2*a);
    console.log("phuong trinh co nghiem kep");
}else if(d>0){
     console.log("x1=",(-b-Math.sqrt(d))/2*a);
     console.log("x2=",(-b+Math.sqrt(d))/2*a);
}else{
    console.log("vo nghiem ");
}