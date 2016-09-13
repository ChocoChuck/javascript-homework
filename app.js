function number(){
  var x = document.getElementById("number").value;
  if (x > 10) {
  alert("Thats too much");
  }else{
    alert("That's just right");
    document.getElementById("num").innerHTML = x;
  }
  console.log(x);
}
function number1(){
  var x = document.getElementById("number1").value;
  var y = document.getElementById("number2").value;
  var z = +x + +y;
  document.getElementById("num1").innerHTML = z;
  console.log(z);
}

function words(){
  var x = document.getElementById("text").value;
  var y = document.getElementById("text1").value;
  var z = x + y;
  document.getElementById("words").innerHTML = z;
  alert(z);
  console.log(z);
}

function word(){
  var x = document.getElementById("guess").value;
  if (x === "SUPERCALIFRAGILISTICESPIALIDOCIOUS"){
    document.getElementById("word").innerHTML = "Great Job!"
    alert("You're right");
  }else{
    document.getElementById("word").innerHTML = "Aww, Try Again"
    alert("Try again");
  }
  console.log(x);
}

function sentence(){
  var a = document.getElementById("texta").value;
  var b = document.getElementById("textb").value;
  var c = document.getElementById("textc").value;
  var d = document.getElementById("textd").value;
  var e = document.getElementById("texte").value;
  var f = document.getElementById("textf").value;
  var g = document.getElementById("textg").value;
  var h = document.getElementById("texth").value;
  var i = a + " " + b + " " + c + " " + d + " " + e + " " + f + " " + g + " " + h;
  document.getElementById("sentence").innerHTML = i;
  console.log(i);
}

var l = "luffy"
var z = "zoro" 
var n = "nami"
var u = "usopp"
var s = "sanji"
var c = "chopper"
var r = "robin"
var f = "frank"
var b = "brook"
var strawhatPirates = [l,z,n,u,s,c,r,f,b];
console.log(strawhatPirates);


 