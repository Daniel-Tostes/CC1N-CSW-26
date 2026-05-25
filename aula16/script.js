//document.writeln("Hello World !!!");

document.getElementById("title").innerHTML = "Hello World, i like JavaScript";

let nameprompt = window.prompt("What's your name?");
document.getElementById("name").innerHTML = nameprompt;

let resp = window.confirm("You like javascript?");

if(resp){
    document.getElementById("resposta").innerHTML = "The student likes javascript classes";
} else {
    document.getElementById("resposta").innerHTML = "The student doesnt like javascript classes";
}


function sendname(){
    let nameanswer = document.getElementById("inputname").value; 

    const answer = document.getElementById("containeranswer")
    answer.innerHTML = "The name written was " + nameanswer;

    answer.style.height = "150px"
    answer.style.backgroundImage = "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)"
    answer.style.display = "flex"
    answer.style.justifyContent = "center"
    answer.style.alignItems = "center"
    answer.style.border = "2px solid #f50808ff"
}