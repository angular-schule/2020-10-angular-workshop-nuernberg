var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function alterAddieren(a, year) {
    return a.age + year;
}
var Spieler = {
    age: 17,
    name: "name",
    lastname: "lastname"
};
var newAge = alterAddieren(Spieler, 4);
console.log("newAge: " + newAge);
var msg = 42;
console.log(msg);
function add(x, y) {
    return x + y;
}
var result = add(1, 55);
console.log(result);
// generics
function myGenericFunction(arg) {
    var arr = [arg];
    return arr;
}
var stringArr = myGenericFunction("Brotcrunsher");
var stringArr2 = myGenericFunction("Brotcrunsher");
var numberArr = myGenericFunction(42);
function printHuman(human) {
    console.log('name: ' + human.name);
    console.log('age : ' + human.age);
}
// auch: var myHuman = {
var myHuman = {
    name: "NNN",
    age: 20,
    lastname: "LN" // nicht bei var myHuman:Human
};
printHuman(myHuman);
function printAge(arg) {
    // nur Zugriff auf Props die beide haben
    console.log("Age: " + arg.age);
}
// enums
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
var dir = Directions.Down;
// decorators
function logClass(target) {
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log("Creating objects of class: " + target.name);
        var c = function () {
            return target.apply(this, args);
        };
        c.prototype = target.prototype;
        return new c();
    };
    f.prototype = target.prototype;
    return f;
}
var Person = (function () {
    function Person(name, surname) {
        // console.log("Created new Person");
        this.name = name;
        this.surname = surname;
    }
    Person = __decorate([
        logClass, 
        __metadata('design:paramtypes', [String, String])
    ], Person);
    return Person;
})();
var p = new Person("Max", "Mustermann");
//# sourceMappingURL=app.js.map