interface UserPropsMain{
  name: string;
  age: number;
}

interface UserPropsSet{
  name?: string;
  age?: number;
}

type CallBack = () => void; //  A CallBack function type alias which takes no argument and return void


interface UserClassInterface{
  get(propsName: string): (string | number);
  set(update: UserPropsSet): void;
  on(eventName: string, callback: CallBack): void;
  trigger(eventName: string): void
}

// following is a User class

export class User implements UserClassInterface{
  events: { [key: string]: CallBack[] } = {};

  constructor(private data: UserPropsMain) { }
  
  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserPropsSet): void{
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: CallBack): void{
    let handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void{
    let handlers = this.events[eventName];
    if(!handlers || handlers.length === 0){
      return;
    }
    handlers.forEach(callback => {
      callback();
    })
  }
}