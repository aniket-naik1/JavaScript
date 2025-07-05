// primitive data type
//7 type-: String , Boolean,number ,Null ,undefined ,Bigint,symbol

const score = 100  //number
const scoreValue = 100.3//number

const isloggedin = false //boolean
const istemp = null // object
let userEmail; //undefined

const id = Symbol('123'); //Symbol 
const anotherId = Symbol('123')
console.log(id === anotherId);
let bignum = 334873466484384664n ;//BigInt


// Reference(Non primitive)
// Array ,Function ,object

const codes =[ 100 , 300 ,2000 ,10];
let myObj = {
    Name : "Aniket" ,
    age : 18 , 
}
console.log(myObj);

const myFunction = function(){
    console.log("DON");
}




// Memory
// Stack(use in primitive) , Heap(Non primitive)

let myName = "Aniket"
let anotherName = myName 
 anotherName = "don"
console.log(myName);
console.log(anotherName);//stack

let userA ={
Email: "user@gmail.conm",
upi: "abc@.com"
}
let userB =userA
userB.Email = "kkkkkkkkkk"


console.log(userA.Email);
console.log(userB.Email);//Heap

