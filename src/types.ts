import { ListData } from 'react-stately';

////Types
export type Key = string | number;


////Interfaces
export interface addAnimalFunction {
    name: string,
    id: string,
}


export interface formTempMemInterface {
    name: string,
    id: string,
}

export interface MyComponentProps {
    ListData: ListData<{name: string, id: string,}>;
    onPressFunc(name: Key): void;
}

export interface MyComponentPropsAdd {
    ListData: ListData<{name: string, id: string,}>;
    onPressFunc(name: addAnimalFunction): void;
}

export interface MyListData {
    ListData: ListData<{name: string, id: string,}>;
}

export interface removeAnimalFunction {
    name: 'string',
    id: 'string',
}
