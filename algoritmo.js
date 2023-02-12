var sel = document.getElementsByName('select')
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let r3 = document.getElementById("r3");
let r4 = document.getElementById("r4");

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");

function func(){
    if (b1.checked){
        console.log("1")
        r1.checked = true;
    } else if(b2.checked){
        console.log("2")
        r2.checked = true;
    } else if(b3.checked){
        console.log("3")
        r3.checked = true;
    }else if(b4.checked){
        console.log("4")
        r4.checked = true;
    }else{
        console.log("erro")
    }
}
