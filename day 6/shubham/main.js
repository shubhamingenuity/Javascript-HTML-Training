function sum (...arr){
console.log(arr.length);
let s=0;
for (let a of arr) {
    s+=a;
    
}
console.log(s);
}

let ac = [4,6,7,8];
sum(...ac);
sum(5,3,6);