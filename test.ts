let z : number | string | boolean | number[] = 123;

z = "abcs";
z= true;
z= [1, 2, 3, 4, 5];


let arrStr : string[] = ["a", "b", "c", "d", "e"];


function Sum(a : number, b : number) : number {
    return a + b;
}

console.log(Sum(10, 20));
// console.log(Sum("10", "20"));


//Explicit --> clear, making something clear to understand     let x : number = 10;

//Implicit --> Not expressed in a direct way    let c = 10  //takes as a Number



function Fun(x : number, y : string) : number{
    console.log("hi");
    return 10;
}

let a = Fun(10, "ac");
// here we cant assign any string to a

console.log(a);