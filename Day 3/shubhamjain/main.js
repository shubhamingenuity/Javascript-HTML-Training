var fiat={
    type: "car",
    company: "honda",
    price: 500000
}
var passion={
    type: "bike",
    company: "bajaj",
    price: 20000
}

var a= passion;
a.type="bike";
a.company="bajaj";
a.price= 5000;
function runTask01(){
    if (passion.hasOwnProperty("type")) {
    document.getElementById("result01").innerHTML="yes";
    } else {
        document.getElementById("result01").innerHTML="no";
        
    }
}
var obj01 = fiat;
var obj02 = passion;

function runTask02(){
console.log(obj01);
    for( let x in obj01){
        for(let y in obj02){
            console.log(obj01[x],obj02[y]);
            if(obj01[x] == obj02[y]){
                document.getElementById("result02").innerHTML = "They have at least one same property";
               // return;
            }
        }
        
    }
    document.getElementById("result02").innerHTML = "No, They don't have any property";
}
