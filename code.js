//var playChar = window.prompt ("Vrei sa joci cu X sau O?");
var t = ["","","","","","","","",""];
function winningCondition(){

  if ((t[0]==t[1] && t[1]==t[2]) && (t[1]=="X")) {
    alert("Ai gastigat");} //orizontal 1
    else if
      ((t[3]==t[4] && t[4]==t[5]) && (t[3]=="X")) {
      alert("Ai gastigat");} //orizontal 2
      else if
        ((t[6]==t[7] && t[7]==t[8]) && (t[6]=="X")) {
        alert("Ai gastigat");} //orizontal 3
        else if
          ((t[0]==t[3] && t[0]==t[6]) && (t[0]=="X")) {
          alert("Ai gastigat");} //vertical 1
          else if
            ((t[1]==t[4] && t[1]==t[7]) && (t[1]=="X")) {
            alert("Ai gastigat");} //vertical 2
            else if
              ((t[2]==t[5] && t[2]==t[8]) && (t[2]=="X")) {
              alert("Ai gastigat");} //vertical 3
              else if
                ((t[0]==t[4] && t[4]==t[8]) && (t[4]=="X")) {
                alert("Ai gastigat");} //diagonal  0-8
                else if
                  ((t[2]==t[4] && t[2]==t[6]) && (t[4]=="X")) {
                  alert("Ai gastigat");} //diagonal  2-6
    }

var cell1 = document.getElementById("position1");
cell1.addEventListener("click", function (){
  cell1.innerHTML="X";
t[0]="X";
winningCondition();
});
var cell2 = document.getElementById("position2");
cell2.addEventListener("click", function (){
  cell2.innerHTML="X";
t[1]="X";
winningCondition();
});
var cell3 = document.getElementById("position3");
cell3.addEventListener("click", function (){
  cell3.innerHTML="X";
t[2]="X";
winningCondition();
});

var cell4 = document.getElementById("position4");
cell4.addEventListener("click", function (){
  cell4.innerHTML="X";
t[3]="X";
winningCondition();
});
var cell5 = document.getElementById("position5");
cell5.addEventListener("click", function (){
  cell5.innerHTML="X";
t[4]="X";
winningCondition();
});
var cell6 = document.getElementById("position6");
cell6.addEventListener("click", function (){
  cell6.innerHTML="X";
t[5]="X";
winningCondition();
});
var cell7 = document.getElementById("position7");
cell7.addEventListener("click", function (){
  cell7.innerHTML="X";
t[6]="X";
winningCondition();

});
var cell8 = document.getElementById("position8");
cell8.addEventListener("click", function (){
  cell8.innerHTML="X";
t[7]="X";
winningCondition();
});
var cell9 = document.getElementById("position9");
cell9.addEventListener("click", function (){
  cell9.innerHTML="X";
t[8]="X";
winningCondition();
});
