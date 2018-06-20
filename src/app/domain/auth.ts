import { User } from './user';

export interface Auth {
  user?: User;
  userId?: string;
  err?: string;
  token?: string;
}
