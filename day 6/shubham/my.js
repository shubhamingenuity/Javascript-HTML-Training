var person = {
firstname: "joy",
lastname: "patidar",
fullname: function  () {
    
    console.log(this.firstname+this.lastname);
},
address: function ty (s,j){
console.log(this.firstname+this.lastname+s+j);
  
}
}

var person1={
    firstname: "raj",
    lastname: "malhotra",
}
person.fullname();
person.fullname.call(person1);
person.address(2,3);
person.address.call(person1,2,3);