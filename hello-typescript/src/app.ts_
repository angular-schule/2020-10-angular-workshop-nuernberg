type Player = {
  name: string,
  lastname: string,
  age: number
}

function alterAddieren(a:Player, year:number) : number {
  return a.age + year;
}

const Spieler:Player = {
  age: 17,
  name: "name",
  lastname: "lastname"
};

var newAge:number = alterAddieren(Spieler, 4);
console.log("newAge: " + newAge);



var msg:number = 42;
console.log(msg);

function add(x:number, y:number):number {
  return x + y;
}

var result = add(1, 55);
console.log(result);


// generics
function myGenericFunction<T>(arg: T): T[]{
  var arr: T[] = [arg];
  return arr;
}

var stringArr = myGenericFunction<string>("Brotcrunsher");
var stringArr2:string[] = myGenericFunction<string>("Brotcrunsher");
var numberArr = myGenericFunction<number>(42);
// IDE:Error: var numberArr2:string[] = myGenericFunction<number>(42);






// interfaces
interface Human{
  name: string,
  age: number
}

function printHuman(human: Human): void{
  console.log('name: ' + human.name);
  console.log('age : ' + human.age);
}

// auch: var myHuman = {
var myHuman = {
  name: "NNN",
  age: 20,
  lastname: "LN"    // nicht bei var myHuman:Human
}

printHuman(myHuman);
// --------------------------------



interface Horse {
  color: string;
  age: number;
}

function printAge(arg: Human | Horse):void{
  // nur Zugriff auf Props die beide haben
  console.log("Age: " + arg.age);
}






// enums
enum Directions {
  Up,
  Down,
  Left,
  Right
}

var dir = Directions.Down;




// decorators

function logClass(target: any){
  var f: any = function(...args){
    console.log("Creating objects of class: " + target.name)
    var c: any = function(){
      return target.apply(this, args);
    }

    c.prototype = target.prototype;
    return new c();
  }
  f.prototype = target.prototype;
  return f;
}





@logClass
class Person{
  public name: string;
  public surname: string;

  constructor(name: string, surname: string){
    // console.log("Created new Person");
    this.name = name;
    this.surname = surname;
  }
}

var p = new Person("Max", "Mustermann");






