import { User } from './models/User';

let shadman = new User({ name: 'shadman', age: 20 });
console.log(shadman.get('name'));
console.log(shadman.get('age'));
shadman.set({ name: 'piyal', age: 100 });
console.log(shadman);
// {name: 'piyal', age: 100}

shadman.on('change', () => { console.log("change #1") });
shadman.on('change', () => { console.log("change #2") });
shadman.on('change', () => { console.log("change #3") });

shadman.on('save', () => { console.log("save #1") });
shadman.on('save', () => { console.log("save #2") });
shadman.on('save', () => { console.log("save #3") });

shadman.trigger('change');
shadman.trigger('save');