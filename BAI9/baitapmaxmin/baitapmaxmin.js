let so1=+prompt("moi ban nhap so")
let so2=+prompt("moi bn nhap so")
let so3=+prompt("moi bn nhap so")
if(so1>so3){
    console.log("so 1 max so 3 min");
}else if (so2>so1) {
    console.log("so 2 max so 1 min ");
}else if (so3>so2 ) {
    console.log("so 3 max so 2 min");
}else if(so1>so2){
    console.log("so 1 max so 2 min");
}else if (so3>so1){
    console.log("so 3 max so 1 min");
}else if (so2>so3) {
    console.log("so 2 max so 3 min");
}