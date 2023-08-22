let a=+prompt("nhap so a");
let b=+prompt("nhap so b");
let c=+prompt("nhap so c");
if (a>0 && b>0 && c>0){
    if (a+b>c && b+c>a && a+c>b){
        alert("a,b,c la canh cua 1 ben goc");
    }
}else {
    alert("a,b,c khong la canh cua 1 tam giac");
}