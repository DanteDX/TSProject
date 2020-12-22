type CallBack = () => void; //  A CallBack function type alias which takes no argument and return void

interface EventingInterface{
  events: { [key: string]: CallBack[] };
  on(eventName: string, callback: CallBack): void;
  trigger(eventNae: string): void;
}

export class Eventing implements EventingInterface{
  public events: { [key: string]: CallBack[] } = {};
  on = (eventName: string, callback: CallBack): void => {
    let handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger = (eventName: string): void =>{
    let handlers = this.events[eventName];
    if(!handlers || handlers.length === 0){
      return;
    }
    handlers.forEach(callback => {
      callback();
    })
  }
}
