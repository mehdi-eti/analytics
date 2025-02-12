import { UserType } from 'src/types/user';

export type AppDataType = {
  id: string;
  user_id: string;
  name: string;
  category: string;
  Business_size: string;
  url: string;
  access: UserType[];
  admin: string;
  created: string;
  updated: string;
};