let a = +prompt("nhap so a");
let b = +prompt("nhap so b");


if (a == 0) {
    if (b == 0) {
        console.log("phuong trinh vo so nghiem");
    } else {
        console.log("phuong trinh vo nghem");
    }
} else {
    let x = -b / a;
    console.log(`phuong trinh co nghiem ${x} `);
}