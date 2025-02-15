import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Label, ListBox, ListBoxItem } from 'react-aria-components';
import { ListInterface } from '../types';

const ListHistory: React.FC<ListInterface> = ({ ListData, onPressFunc }) => {
    if (!ListData) {
        return (
            <>
                <ErrorDisplay />
            </>
        )
    } else {
        return (
            <div className={'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col basis-1/3 max-w-lg'}>
                <Label className={'m-1'} aria-label={'History list title'}>History List</Label>
                <ListBox className={'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col'}
                    items={ListData.items}
                    aria-label={'History of list items added and removed'}
                    >
                    {item => <ListBoxItem className={'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between max-w-30'} key={item.name} aria-label={item.name + ' label'} textValue={item.name}><Label className={'m-1 p-2 rounded-md'}>{item.name}</Label></ListBoxItem>}
                </ListBox>
            </div>
        )
    }
}

export default ListHistory;

