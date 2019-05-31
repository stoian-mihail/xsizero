//var playChar = window.prompt ("Vrei sa joci cu X sau O?");
var t = ["","","","","","","","",""]; //array-ul care stocheaza continutul patratelelr
var ids =["position1", "position2", "position3","position4", "position5","position6","position7","position8","position9"]

function ai(){
var gol =[];
var rand;
for(i=0;i<=8;i++){
  if (t[i]=="") {
  gol.push(i);
}
}

var rand = gol[Math.floor(Math.random() * gol.length)];


document.getElementById('test').innerHTML=rand;
}




function winningCondition(){

  if ((t[0]==t[1] && t[1]==t[2]) && (t[1]=="X")) {
    alert("Ai castigat");} //orizontal 1
    else if
      ((t[3]==t[4] && t[4]==t[5]) && (t[3]=="X")) {
      alert("Ai castigat");} //orizontal 2
      else if
        ((t[6]==t[7] && t[7]==t[8]) && (t[6]=="X")) {
        alert("Ai castigat");} //orizontal 3
        else if
          ((t[0]==t[3] && t[0]==t[6]) && (t[0]=="X")) {
          alert("Ai castigat");} //vertical 1
          else if
            ((t[1]==t[4] && t[1]==t[7]) && (t[1]=="X")) {
            alert("Ai castigat");} //vertical 2
            else if
              ((t[2]==t[5] && t[2]==t[8]) && (t[2]=="X")) {
              alert("Ai castigat");} //vertical 3
              else if
                ((t[0]==t[4] && t[4]==t[8]) && (t[4]=="X")) {
                alert("Ai castigat");} //diagonal  0-8
                else if
                  ((t[2]==t[4] && t[2]==t[6]) && (t[4]=="X")) {
                  alert("Ai castigat");} //diagonal  2-6
    }


var cell1 = document.getElementById("position1");
cell1.addEventListener("click", function (){
  cell1.innerHTML="X";
t[0]="X";
winningCondition();
ai();

});
var cell2 = document.getElementById("position2");
cell2.addEventListener("click", function (){
  cell2.innerHTML="X";
t[1]="X";
winningCondition();
ai();
});
var cell3 = document.getElementById("position3");
cell3.addEventListener("click", function (){
  cell3.innerHTML="X";
t[2]="X";
winningCondition();
ai();
});

var cell4 = document.getElementById("position4");
cell4.addEventListener("click", function (){
  cell4.innerHTML="X";
t[3]="X";
winningCondition();
ai();
});
var cell5 = document.getElementById("position5");
cell5.addEventListener("click", function (){
  cell5.innerHTML="X";
t[4]="X";
winningCondition();
ai();
});
var cell6 = document.getElementById("position6");
cell6.addEventListener("click", function (){
  cell6.innerHTML="X";
t[5]="X";
winningCondition();
ai();
});
var cell7 = document.getElementById("position7");
cell7.addEventListener("click", function (){
  cell7.innerHTML="X";
t[6]="X";
winningCondition();
ai();
});
var cell8 = document.getElementById("position8");
cell8.addEventListener("click", function (){
  cell8.innerHTML="X";
t[7]="X";
winningCondition();
ai();
});
var cell9 = document.getElementById("position9");
cell9.addEventListener("click", function (){
  cell9.innerHTML="X";
t[8]="X";
winningCondition();
ai();
});
