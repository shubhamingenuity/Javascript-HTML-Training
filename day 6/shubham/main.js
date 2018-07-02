function sum (...arr){
console.log(arr.length);
for (let a of arr) {
    s+=a;
    
}
}

let ac = [4,6,7,8];
sum(...ac);
sum(5,3,6);