let a = +prompt("nhap so tu 2 den vo tan");
let b = true;
if (a < 2) {
   console.log("o so nguyen to");
} else if (a==2){
   console.log(" so nguyen to");
} else {
   for (i = 2; i <= a - 1; i++) {

      if (a % i == 0) {
         console.log("o so nguyen to");
         b = false;
         break;
      }
   }
   if (b) {
      console.log("so nuyen to");
   }
}







