import { User } from "./models/User";
let piyal = new User({ name: 'piyal', age: 30 });
piyal.save();
piyal.fetch();