import { atom } from 'jotai'
import { StoreType } from 'src/types';

const atomStore = atom(<StoreType>{
  apps: [],
  active_app:"",
  user: {},
  accessUser: {},
  date: undefined,
})

export default atomStore;