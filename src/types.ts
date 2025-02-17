import { ListData } from 'react-stately';

////Types
export type Key = string | number;


////Interfaces
export interface addAnimalFunction {
    name: string,
    id: number,
    isDeleted: boolean
}

export interface ListDisplayInterface {
    ListData: ListData<{ name: string, id: number, isDeleted: boolean }>;
    onPressFunc(name: Key, newValue: { name: string, id: number, isDeleted: boolean }): void;
}

export interface ListEditorInterface {
    ListData: ListData<{ name: string, id: number, isDeleted: boolean }>;
    addAnimal(id: addAnimalFunction): void;
}

export interface MyListData {
    ListData: ListData<{ name: string, id: number, isDeleted: boolean }>;
}
export interface MyLocalListData {
    items: { name: string; id: number; isDeleted: boolean; }[]
}

export interface listDisplayBufferInterface { name: string; id: number; isDeleted: boolean; }[]





// ////Interfaces
// export interface addAnimalFunction {
//     name: string,
//     id: number,
// }

// export interface ListDisplayInterface {
//     ListData: ListData<{name: string, id: number,}>;
//     onPressFunc(name: Key): void;
// }

// export interface ListEditorInterface {
//     ListData: ListData<{name: string, id: number,}>;
//     onPressFunc(name: addAnimalFunction): void;
// }

// export interface MyListData {
//     ListData: ListData<{name: string, id: number,}>;
// }
