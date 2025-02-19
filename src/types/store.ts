import { DateRange } from 'react-day-picker';

import { AppDataType } from './header';
import { UserType } from './user';

export type StoreType = {
  apps: AppDataType[] | [];
  user: UserType;
  accessUser: UserType[];
  active_app: string;
  date: DateRange | undefined;
};
