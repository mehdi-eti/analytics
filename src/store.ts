import { atom } from 'jotai'
import { StoreType } from 'src/types';

const atomStore = atom(<StoreType>{
  apps: [],
  user: {},
  accessUser: {},
})

export default atomStore;