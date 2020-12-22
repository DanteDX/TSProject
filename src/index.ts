import { User } from "./models/User";
let piyal = new User({ name: 'piyal', age: 30, id: 1 });
console.log(piyal.get('name'));
console.log(piyal.get('age'));
console.log(piyal.get('id'));
