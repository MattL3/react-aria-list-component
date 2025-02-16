import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Label, ListBox, ListBoxItem } from 'react-aria-components';
import { MyListData } from '../types';

// const wrapperClass:string = ;
const wrapperClass:string = 'bg-slate-400  src/components/listEditor.tsxtext-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col basis-1/3 max-w-lg';
const historyListLabel:string = 'm-1';
const listBoxClass:string = 'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col';
const listBoxItemClass:string = 'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between max-w-30';
const listBoxItemLabelClass:string = 'm-1 p-2 rounded-md';
// const wrapperClass:string = ;


const ListHistory: React.FC<MyListData> = ({ ListData }) => {
    if (!ListData) {
        return (
            <>
                <ErrorDisplay />
            </>
        )
    } else {
        return (
            <div className={wrapperClass}>
                <Label className={historyListLabel} aria-label={'History list title'}>History List</Label>
                <ListBox className={listBoxClass}
                    items={ListData.items}
                    aria-label={'History of list items added and removed'}
                    >
                    {item => <ListBoxItem className={listBoxItemClass} key={item.name} aria-label={item.name + ' label'} textValue={item.name}><Label className={listBoxItemLabelClass}>{item.name}</Label></ListBoxItem>}
                </ListBox>
            </div>
        )
    }
}

export default ListHistory;

