import { ListData } from 'react-stately';

////Types
export type Key = string | number;

////Interfaces
export interface addAnimalFunction {
  name: string;
  id: number;
  isDeleted: boolean;
}

//Interface for main display component
export interface ListDisplayInterface {
  ListData: ListData<{ name: string; id: number; isDeleted: boolean }>;
  onPressFunc(
    name: Key,
    newValue: { name: string; id: number; isDeleted: boolean }
  ): void;
}

//Interface for item editor component
export interface ListEditorInterface {
  ListData: ListData<{ name: string; id: number; isDeleted: boolean }>;
  addAnimal(id: addAnimalFunction): void;
}

//Interface for local version of listData component
export interface MyListData {
  ListData: ListData<{ name: string; id: number; isDeleted: boolean }>;
}

//Interface for component buffer version of state
export interface listDisplayBufferInterface {
  name: string;
  id: number;
  isDeleted: boolean;
}
[];
