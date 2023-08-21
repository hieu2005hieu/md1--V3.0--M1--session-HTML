let toan=+prompt("moi ban nhap dien toan")
let li=+prompt("moi ban nhap diem mon li")
let hoa=+prompt("moi bn nhap diem mon hoa")
let van=+prompt("moi bn nhap diem mon van")
let su=+prompt("moi bn nhap diem mon su")
let dia=+prompt("moi bn nhap diem mon dia")
let diemTrungBinh=(toan+li+hoa+van+su+dia)/6;
if(diemTrungBinh<10 && diemTrungBinh>8){
    console.log("gioi");
}else if(diemTrungBinh>6.5 && diemTrungBinh<7.9){
    console.log("kha");
}else if(diemTrungBinh>5 && diemTrungBinh<6.4){
    console.log("trungbinh");
}else{
    console.log("yeu");
}
      