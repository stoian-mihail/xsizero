var playChar = window.prompt ("Vrei sa joci cu X sau O?");
var playChar = playChar.toUpperCase();
var computerChar= "";
function aiChar(){
  if (playChar=="X"){
    computerChar="O";
  }
  else {
    computerChar="X";
  }
  document.getElementById('test2').innerHTML="Calculatorul joaca " + computerChar;

}
aiChar();

var t = ["","","","","","","","",""]; //array-ul care stocheaza continutul patratelelr
var ids =["position1", "position2", "position3","position4", "position5","position6","position7","position8","position9"]

function arrayToTable(){
  var td1 = document.getElementById('position1');
  td1.innerHTML=t[0];
  var td2 = document.getElementById('position2');
  td2.innerHTML=t[1];
  var td3 = document.getElementById('position3');
  td3.innerHTML=t[2];
  var td4 = document.getElementById('position4');
  td4.innerHTML=t[3];
  var td5 = document.getElementById('position5');
  td5.innerHTML=t[4];
  var td6 = document.getElementById('position6');
  td6.innerHTML=t[5];
  var td7 = document.getElementById('position7');
  td7.innerHTML=t[6];
  var td8 = document.getElementById('position8');
  td8.innerHTML=t[7];
  var td9 = document.getElementById('position9');
  td9.innerHTML=t[8];
}

function winningCondition(){

  if ((t[0]==t[1] && t[1]==t[2]) && (t[1]==playChar)) {
    alert("Ai castigat");} //orizontal 1
    else if
      ((t[3]==t[4] && t[4]==t[5]) && (t[3]==playChar)) {
      alert("Ai castigat");} //orizontal 2
      else if
        ((t[6]==t[7] && t[7]==t[8]) && (t[6]==playChar)) {
        alert("Ai castigat");} //orizontal 3
        else if
          ((t[0]==t[3] && t[0]==t[6]) && (t[0]==playChar)) {
          alert("Ai castigat");} //vertical 1
          else if
            ((t[1]==t[4] && t[1]==t[7]) && (t[1]==playChar)) {
            alert("Ai castigat");} //vertical 2
            else if
              ((t[2]==t[5] && t[2]==t[8]) && (t[2]==playChar)) {
              alert("Ai castigat");} //vertical 3
              else if
                ((t[0]==t[4] && t[4]==t[8]) && (t[4]==playChar)) {
                alert("Ai castigat");} //diagonal  0-8
                else if
                  ((t[2]==t[4] && t[2]==t[6]) && (t[4]==playChar)) {
                  alert("Ai castigat");} //diagonal  2-6
                }

  function losingCondition(){
                   if ((t[0]==t[1] && t[1]==t[2]) && (t[1]==computerChar)) {
                        alert("Ai pierdut!");} //orizontal 1
                        else if
                          ((t[3]==t[4] && t[4]==t[5]) && (t[3]==computerChar)) {
                          alert("Ai pierdut!");} //orizontal 2
                          else if
                            ((t[6]==t[7] && t[7]==t[8]) && (t[6]==computerChar)) {
                            alert("Ai pierdut!");} //orizontal 3
                            else if
                              ((t[0]==t[3] && t[0]==t[6]) && (t[0]==computerChar)) {
                              alert("Ai pierdut!");} //vertical 1
                              else if
                                ((t[1]==t[4] && t[1]==t[7]) && (t[1]==computerChar)) {
                                alert("Ai pierdut!");} //vertical 2
                                else if
                                  ((t[2]==t[5] && t[2]==t[8]) && (t[2]==computerChar)) {
                                  alert("Ai pierdut!");} //vertical 3
                                  else if
                                    ((t[0]==t[4] && t[4]==t[8]) && (t[4]==computerChar)) {
                                    alert("Ai pierdut!");} //diagonal  0-8
                                    else if
                                      ((t[2]==t[4] && t[2]==t[6]) && (t[4]==playChar)) {
                                      alert("Ai pierdut!");} //diagonal  2-6}
}
    function ai(){
      var gol =[];
      var rand;
      for(i=0;i<=8;i++){
        if (t[i]=="") {
        gol.push(i);
        }
      }
      var rand = gol[Math.floor(Math.random() * gol.length)];
    //  document.getElementById('test').innerHTML=playChar;

      t[rand]=computerChar;
      arrayToTable();
      losingCondition();
    }


var cell1 = document.getElementById("position1");
cell1.addEventListener("click", function (){
  cell1.innerHTML=playChar;
t[0]=playChar;
winningCondition();
ai();

});
var cell2 = document.getElementById("position2");
cell2.addEventListener("click", function (){
  cell2.innerHTML=playChar;
t[1]=playChar;
winningCondition();
ai();
});
var cell3 = document.getElementById("position3");
cell3.addEventListener("click", function (){
  cell3.innerHTML=playChar;
t[2]=playChar;
winningCondition();
ai();
});

var cell4 = document.getElementById("position4");
cell4.addEventListener("click", function (){
  cell4.innerHTML=playChar;
t[3]=playChar;
winningCondition();
ai();
});
var cell5 = document.getElementById("position5");
cell5.addEventListener("click", function (){
  cell5.innerHTML=playChar;
t[4]=playChar;
winningCondition();
ai();
});
var cell6 = document.getElementById("position6");
cell6.addEventListener("click", function (){
  cell6.innerHTML=playChar;
t[5]=playChar;
winningCondition();
ai();
});
var cell7 = document.getElementById("position7");
cell7.addEventListener("click", function (){
  cell7.innerHTML=playChar;
t[6]=playChar;
winningCondition();
ai();
});
var cell8 = document.getElementById("position8");
cell8.addEventListener("click", function (){
  cell8.innerHTML=playChar;
t[7]=playChar;
winningCondition();
ai();
});
var cell9 = document.getElementById("position9");
cell9.addEventListener("click", function (){
  cell9.innerHTML=playChar;
t[8]=playChar;
winningCondition();
ai();
});

arrayToTable();
