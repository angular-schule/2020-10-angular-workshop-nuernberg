export class Test {
    
    constructor(public id:number, callback: () => string) {
        console.log(callback());
    }
}