interface UserPropsMain{
  id?: number;
  name: string;
  age: number;
}

interface UserPropsSet{
  id?: number;
  name?: string;
  age?: number;
}

type CallBack = () => void; //  A CallBack function type alias which takes no argument and return void


interface UserClassInterface{
  events: { [key: string]: CallBack[] }
  get(propsName: string): (string | number);
  set(update: UserPropsSet): void;
  on(eventName: string, callback: CallBack): void;
  trigger(eventName: string): void;
  fetch(): void;
  save(): void;
}

// following is a User class

import axios, { AxiosResponse } from 'axios';

export class User implements UserClassInterface{
  events: { [key: string]: CallBack[] } = {};

  constructor(private data: UserPropsMain) { 
  }
  
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

  fetch(): void{
    axios.get(`http://localhost:3000/users/`)
      .then((response: AxiosResponse): void => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  save(): void{
    if (!this.data.id) {
      axios.post(`http://localhost:3000/users/`, this.data)
        .then((response: AxiosResponse): void => {
          this.data.id = response.data.id;
        });
    } else if(this.data.id) {
      axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
    }
  }
}