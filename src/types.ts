export interface addAnimalFunction {
    name: 'string', 
    id: 'string',
}

export type Key = string | number;

export interface customList {
    name: 'string',
    id: 'string',
}
export interface formTempMemInterface {
    name: string,
    id: string,
}
export interface removeAnimalFunction {
    name: 'string',
    id: 'string',
}
export interface Props {
    children: React.ReactChild | React.ReactChildren
  }

export interface MyClassProps {
    someProp: { name: string; id: string; };
    onChange(): any;
}