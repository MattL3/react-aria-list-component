import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Cell, Label, ListBox, ListBoxItem, Row, Text } from 'react-aria-components';
import { MyComponentProps } from '../types';

//Custom classes declared as variable string values.
const containerClass = 'flex flex-wrap p-1 px-4';
const labelClass = '  p-1 px-4';
const listBoxClass = 'bg-black text-slate-950 rounded-md';
const listBoxItemsClass = '  p-2';
const buttonClass = '  p-2';


const ListHistory: React.FC<MyComponentProps> = ({ ListData, onPressFunc }) => {
    console.log(ListData);
    if (!ListData) {
        return (
            <>
                <ErrorDisplay />
            </>
        )
    } else {
        return (
            <div className={'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col basis-1/3 max-w-1/3'}>
                <Label className={'m-1'} aria-label={'History list title'}>History List</Label>
                <ListBox className={'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col'}
                    items={ListData.items}
                    aria-label={"History of list items added and removed"}
                    selectedKeys={ListData.selectedKeys}
                    onSelectionChange={ListData.setSelectedKeys}>
                    {item => <ListBoxItem className={'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between max-w-30'} key={item.name} aria-label={item.name + " label"} textValue={item.name}><Label className={'m-1 p-2 rounded-md'}>{item.name}</Label><Button className={'bg-lime-200 my-1 p-2 rounded-md'} aria-label={item.name + " remove button"} onPress={() => { onPressFunc(item.name) }}>delete</Button></ListBoxItem>}
                </ListBox>
            </div>
        )
    }
}

export default ListHistory;

