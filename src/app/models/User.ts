import {UserAdress} from './user-adress';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: UserAdress;
}


