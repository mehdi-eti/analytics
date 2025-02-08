import { AppDataType } from './header';
import { UserType } from './user';

export type StoreType = {
  apps: AppDataType[] | [];
  user: UserType;
  accessUser: UserType[];
};
