class User {
    name: string;
    constructor(_name: string) {

        this.name = _name;
    }
}
const tom: User = new User("Tom");
console.log("Hello ", tom.name);
console.log()