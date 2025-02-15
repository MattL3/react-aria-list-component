import { ListData } from 'react-stately';

////Types
export type Key = string | number;


////Interfaces
export interface addAnimalFunction {
    name: string,
    id: number,
}

export interface ListInterface {
    ListData: ListData<{name: string, id: number,}>;
    onPressFunc(name: Key): void;
}

export interface ListEditorInterface {
    ListData: ListData<{name: string, id: number,}>;
    onPressFunc(name: addAnimalFunction): void;
}

export interface MyListData {
    ListData: ListData<{name: string, id: number,}>;
}
