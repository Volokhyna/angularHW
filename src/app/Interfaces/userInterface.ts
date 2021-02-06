import {UserAddress} from './user-address';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
}
