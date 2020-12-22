import { User } from "./User";

interface UserPropsMain{
  id: number;
  name: string;
  age: number;
}

// defining generic interface

interface GenericInterface<T>{
  name: T;
  collection: T[];
}

// we can make the use of static methods greatly this way instead of making an instance of the class

export class Model<T> implements GenericInterface<T>{
  public name: T;
  public collection: T[];
  constructor(name: T) {
    this.name = name;
    this.collection = new Array(3).fill(this.name);
  }
  static BuildUser = (attr: UserPropsMain) => {
    return new User(attr);
  }
}

