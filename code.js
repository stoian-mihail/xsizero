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
  //document.getElementById('test2').innerHTML="Calculatorul joaca " + computerChar;

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
                                      ((t[2]==t[4] && t[2]==t[6]) && (t[4]==computerChar)) {
                                      alert("Ai pierdut!");} //diagonal  2-6}
}



function ai(){
  var x=false;
  var y=false;
  var contor=0; //variable used to check if the computer placed a character in any of the squares during the first verification

  function emptyRandom(){
    var gol =[];
    var rand;
    for(i=0;i<=8;i++){
      if (t[i]=="") {
      gol.push(i);
      }
    }
    var rand = gol[Math.floor(Math.random() * gol.length)];
    t[rand]=computerChar;
    contor=1;
  }

function spot_win(){
  var stopper=0;
  function spot_vert(m){/* verificarea primara care verifica 2 lucruri: exista doua patratele detinute de calculator sau de om pe orizontala pe verticala*/
  var line2=0; // checks for computer occupied
  var line3=0; // checks for empty
  var n=m;
  while (n>=m-6) {
     if(t[n]==computerChar){
        line2++;
      }
        else if(t[n]==""){
          line3++;
        }
    n-=3;
  }
  if(n<m-6){
    n+=3;
  }
  if (line3==1 && line2==2) {
    while(n<=m){

    if(t[n]==""){
      t[n]=computerChar;
      stopper = 1;
      contor = 1;
        }
        n+=3;
      }
  }
  }
//final spot vert

function spot_hor(m){  //verificarea primara care verifica 2 lucruri: exista doua patratele detinute de calculator sau de om pe orizontala
var line2=0; // checks for computer occupied spaces
var line3=0; //checks for empty spaces
var n=m;
while (n>=m-2) {
  if( t[n] == computerChar ){
    line2++;
  }
  if(t[n]==""){
    line3++;
  }
n--;
}
if(n<m-2){
n++;
}
if (line3==1 && line2==2) {
while(n<=m){

if(t[n]==""){
  t[n]=computerChar;
  stopper = 1;
  contor = 1;
    x=true;
    }
    n++;
  }
}
}

function spot_diag1(m){
var line2=0; // checks for computer occupied spaces
var line3=0; //checks for empty spaces
var n=m;
while (n>=m-8) {
    if( t[n] == computerChar ){
      line2++;
    }
    if(t[n]==""){
      line3++;
    }
  n-=4;
}
if(n<m-8){
  n+=4;
}
if (line3==1 && line2==2) {
  while(n<=m){
  if(t[n]==""){
    t[n]=computerChar;
    stopper = 1;
    contor = 1;
      x=true;
      }
      n+=4;
    }
}
}

function spot_diag2(m){
var line2=0; // checks for computer occupied spaces
var line3=0; //checks for empty spaces
var n=m;
while (n>=m-4) {
    if( t[n] == computerChar ){
      line2++;
    }
    if(t[n]==""){
      line3++;
    }
  n-=2;
}
if(n<m-4){
  n+=2;
}
if (line3==1 && line2==2) {
  while(n<=m){
  if(t[n]==""){
    t[n]=computerChar;
    stopper = 1;
    contor = 1;
      x=true;
      }
      n+=2;
    }
}
} // final spot_diag


  for(i=2;i<=8;i+=3){
      if (stopper==1){ // iful stopper opreste rularea verificarii secundare orizontale in cazul in care aceasta a mai fost executata
        break;
      }
            spot_hor(i);}

  for(i=6;i<=8;i++) {
                if(stopper==1){
                  break;
                }
                spot_vert(i);
              }
  for (i=0;i<=8;i+=4){
    if(stopper==1){
      break;
    }
    spot_diag1(i);
  }

  for (i=2;i<=6;i+=2){
  if(stopper==1){
    break;
  }
  spot_diag2(i);
}


}


  function randomizer(){ /* functia randomizer popouleaza tabelul cu o valoare in cazul in care in urma verificarilor primare
     tabelul nu s-a populat cu nimic, nefiind nicio urgenta: calculatorul nu putea castiga imediat si nici jucatorul nu putea castiga imediat*/
    var stopper=0; //variable used to check if the ai placed any character inside the child functions verifier_hor2 and verifier_vert2

/* functia verifier_hor2  verifica daca exista urmatoarele situatie:
    - are vreo linie un spatiu ocupat de calculator si doua goale? daca da, va popula aleatoriu unul din cele doua spatii goale
*/
    function verifier_hor2(m){
    var gol1=[];
    var rand1;
    var line1=0; // variable used for checking the number of empty spaces
    var line2=0; // variable used for checking the number of spaces occupied by computerChar
    var n=m;
    while (n>=m-2) { //aici incepe parcurgerea liniilor orizontale pentru verificarea situatiei
      if(t[n]==""){
        line1++;}
      if(t[n]==computerChar){
        line2++;
      }
      n--;
    }
    if(n<m-2){
      n=n+1;
    }
   // indeplinirea conditiei de scriere  doua spatii goale si unul detinut de calculator
      while(n<=m){
        if(stopper==1){
          break;
        }
      else if(t[n]=="" && line1==2 && line2==1){
          gol1.push(n);
          var rand1 = gol1[Math.floor(Math.random() * gol1.length)];
          t[rand1]=computerChar;
          contor = 1;
          stopper = 1;

        }
      n++;}
    }
/*
functia verifier_vert2 verifica urmatoarea situatie: exista pe coloane o patratica detinuta de calculator si doua libere?
daca da, atunci functia va scrie in patratica libera un computerChar is va nota faptul ca a scris
*/
    function verifier_vert2(m){
    var gol1=[];
    var rand1;
    var line1=0; //checks number of empty spaces
    var line2=0; //checks number of computer occupied spaces
    var n=m;
    while (n>=m-6) { // parcurgerea coloanelor
      if(t[n]==""){
        line1++;}
        if(t[n]==computerChar){
          line2++;
        }
      n-=3;
    }
        if(n<m-6){
          n+=3;
        }

      while(n<=m){
        if(stopper==1){
          break;
        }
      if(t[n]=="" && line1==2 && line2==1){
          gol1.push(n);
          var rand1 = gol1[Math.floor(Math.random() * gol1.length)];
          t[rand1]=computerChar;
          stopper = 1;
          contor = 1;
          }
          n+=3;
        }


    } //end of vertical

    function spot_diag1(m){
    var line2=0; // checks for computer occupied spaces
    var line3=0; //checks for empty spaces
    var n=m;
    var rand;
    var gol=[];
    while (n>=m-8) {
        if( t[n] == computerChar ){
          line2++;
        }
        if(t[n]==""){
          line3++;
        }
      n-=4;
    }
    if(n<m-8){
      n+=4;
    }
    if (line2==1 && line3==2) {
      while(n<=m){
        if(stopper==1){
          break;
        }
        if(t[n]==""){
        gol.push(n);
        var rand = gol[Math.floor(Math.random() * gol.length)];
        t[rand]=computerChar;
        stopper = 1;
        contor = 1;
          }
          n+=4;
        }
    }}


    function spot_diag2(m){
    var line2 = 0; // checks for computer occupied spaces
    var line3  =0; //checks for empty spaces
    var n=m;
    var gol=[];
    var rand;
    while (n>=m-4) {
        if( t[n] == computerChar ){
          line2++;
        }
        if(t[n]==""){
          line3++;
        }
      n-=2;
    }
    if(n<m-4){
      n+=2;
    }
    if (line3==2 && line2==1) {
      while(n<=m){
        if(stopper==1){
          break;
        }
      if(t[n]==""){
        gol.push(n);
        var rand = gol[Math.floor(Math.random() * gol.length)];
        t[rand]=computerChar;
        stopper = 1;
        contor = 1;
          }
          n+=2;
        }
    }
    }

    if (contor==0){ // conditia care verifica daca in urma verificarii primare nu s-a scris nimic; in cazul in care s-a scris, incepe verificarea secundara
      for(i=2;i<=8;i+=3){
          if (stopper==1){ // iful stopper opreste rularea verificarii secundare orizontale in cazul in care aceasta a mai fost executata o data
            break;}
                verifier_hor2(i);}

                if (contor==0){

                  for(i=6;i<=8;i++) {
                    if(contor==1){
                      break;
                    }
                    verifier_vert2(i);
                  }
                }
                if (contor==0){
                    spot_diag1(8);

                if (contor==0);
                  spot_diag2(6);


                }
            }
     }//end of randomizer function

function spot_lose(){

  function verifier_hor(m){  //verificarea primara care verifica 2 lucruri: exista doua patratele detinute de calculator sau de om pe orizontala
  var line1=0; // checks for player occupied spaces
  var line2=0; //checks for empty spaces
  var n=m;
  while (n>=m-2) {
    if(t[n] == playChar){
      line1++;}

      if(t[n]==""){
        line2++;
      }
    n--;
  }
  if(n<m-2){
    n++;
  }
  if (line1==2 && line2==1){
    while(n<=m){
      if(t[n]==""){
        t[n]=computerChar;
        contor=1;
          x=true;
      }
      n++;
    }
  }
  }
  //final functie verificator orizontal

  function verifier_vert(m){/* verificarea primara care verifica 2 lucruri: exista doua patratele detinute de calculator sau de om pe orizontala pe verticala*/
  var line1=0; // checks for player occupierd
  var line2=0; // checks for empty
  var n=m;

  while (n>=m-6) {
    if(t[n]==playChar){
      line1++;}

        else if(t[n]==""){
          line2++;
        }
    n-=3;
  }
  if(n<m-6){
    n+=3;
  }

if (line1==2 && line2==1){
    while(n<=m){
      if(t[n]==""){
        t[n]=computerChar;
        contor=1;
      }
      n+=3;
    }
  }
  }

if (contor==0){

  for(i=2;i<=8;i+=3){
    if(contor==1){
      break;
    }
    verifier_hor(i);
  }
  if (contor==0){
    //x = false inseamna ca in urma parcurgerii hor nu s-a ocupat niciun patratel de calculator
      for(i=6;i<=8;i++) {
        if(contor==1){
          break;
        }
        verifier_vert(i); // parcurgerea coloanelor cu verificare primara
      }
    }}

}
//final functie verifier vert

//verificarea initiala de captura a centrului
function first_move(){
var not_empty=0;
for (i=0;i<=8;i++){
    if(t[i]!=""){
      not_empty++;
    }
    if (not_empty>1)
    {break;}
  }
  if(not_empty==1){
    if(t[4]==""){
     t[4]=computerChar;
     contor=1;
    }
    else if(t[4]==playChar) {emptyRandom();}
  }
}

  first_move();
  spot_win();
  spot_lose();
  randomizer(); // dupa parcurgerea verificarilor primare, daca nu s-a scris nimic de catre calculator chemam functia randomizer
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
