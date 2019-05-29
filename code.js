const person = {
  nume: 'Mihai',
  prenume: 'Stoian',
  get numeComplet(){
    return `${person.nume} ${person.prenume}`
  },

  set numeComplet(valoare){
    var componente = valoare.split (' ');
    this.nume = componente [0];
    this.prenume = componente [1];


  }


};
person.numeComplet='George Soros';
document.write(person.numeComplet);
