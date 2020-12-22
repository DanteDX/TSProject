import { Model } from "./models/Model";
let piyal = Model.BuildUser({ name: 'piyal', age: 30, id: 1 });
console.log(piyal.get('name'));
console.log(piyal.get('age'));
console.log(piyal.get('id'));

let sample = new Model<string>('piyal');
console.log(sample.name);
console.log(sample.collection);
