// let a : number= 4
// let b : number= 5
// let c: string[] = ["a", "b", "c"];
// let d: number[] = [1, 2, 3];
// let car : {type : string, model:string , year : number} = {
//     type : "BMW",
//     model : "X5",
//     year : 2020
// }
// console.log(a+b , c );
// console.log(d);
// console.log(car);

// const tinhtong = (a: number, b: number):number => {
//     return a + b;
// }
// console.log(tinhtong(4,19));

// let dai: number = 4;
// let rong:number = 2;

// console.log((dai+rong) *2 );

// const hcn = (dai: number, rong: number): number => {
//     return (dai + rong) * 2;
// }
// console.log(hcn(4,3));

// let a :number = Number(prompt("nhập số a"));
// console.log(a);


let a:number = Number(prompt("Nhap vao so a "));
let b:number = Number(prompt("Nhap vao so b "));
let c:number = Number(prompt("Nhap vao so c "));

const giaiPT = (a : number, b: number, c: number): string => {
    if(a===0){
        return "Day la phuong trinh vo nghiem ";
    }
    let delta = b*b - 4*a*c;
    if(delta<0){
        return "Phuong trinh vo nghiem";
    }
    else if(delta === 0){
        let x = -b / (2 *a);
        return `Phuong trinh co nghiem kep la ${x}`;
    }
    else { 
        let x1 = (-b + Math.sqrt((delta) / (2*a)));
        let x2 = (-b - Math.sqrt((delta) / (2*a)));
        return `Phuong trinh co 2 nghiem la x1 = ${x1}  va x2 =${x2}`;
    }
}
console.log(giaiPT(a,b,c));