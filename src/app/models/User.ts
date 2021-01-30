import {UserAddress} from './user-address';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
}


