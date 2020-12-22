import axios, { AxiosPromise } from 'axios';

interface HasId{
  id: number;
}

export class Sync<T extends HasId>{
  constructor(private rootUrl: string) { };

  fetch = (id: number): AxiosPromise =>{
    console.log(id);
    return axios.get(`${this.rootUrl}/`);
  }

  save = (data: T): AxiosPromise =>{
    if (!data.id) {
      return axios.post(`http://localhost:3000/users/`, data);
    } else if(data.id) {
      return axios.put(`http://localhost:3000/users/${data.id}`,data);
    }
  }
}