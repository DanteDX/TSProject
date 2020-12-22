interface UserPropsMain{
  id: number;
  name: string;
  age: number;
}
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
import { AxiosResponse } from 'axios';
const rootURL = "http://localhost:3000/users"; 
type CallBack = () => void;
export class User{
  public eventing: Eventing = new Eventing(); // this has on,trigger methods
  public sync: Sync<UserPropsMain> = new Sync<UserPropsMain>(rootURL); // this has fetch(),save() methods
  public attributes: Attributes<UserPropsMain>; // this has get(), set() methods
  constructor(attr: UserPropsMain){
    this.attributes = new Attributes<UserPropsMain>(attr);
  }

  get = (propName: keyof UserPropsMain) => {
    return this.attributes.get<keyof UserPropsMain>(propName);
  }

  set = (data: UserPropsMain):void => {
    this.attributes.set(data);
  }

  on = (eventName: string, callback: CallBack) => {
    this.eventing.on(eventName, callback);
  }

  trigger = (eventName: string): void => {
    this.eventing.trigger(eventName);
  }

  fetch = (id: number):void => {
    this.sync.fetch(id)
      .then((response: AxiosResponse) => console.log(response.data))
      .catch(err => console.log(err));
  }

  save = (data: UserPropsMain) => {
    this.sync.save(data)
      .then((response: AxiosResponse) => console.log(response.data))
      .catch(err => console.log(err));
  }

}