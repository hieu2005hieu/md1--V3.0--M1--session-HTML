let a=+prompt("MOI NHAP CAN NANG")
let b=+prompt("moi ban nhap chieu cao")
let bmi=a/b**2;
if(bmi<18){
   console.log("can nag thap gay");
}else if(bmi>18){
    console.log("binh thuong");
}else if(bmi>=40){
    console.log("beo phi do 3");
}else{
    console.log("nguoi ngoai hanh tinh");
}