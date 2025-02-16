import React, { useState } from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Label, ListBox, ListBoxItem, Selection, } from 'react-aria-components';
import { Key, listDisplayBufferInterface, ListDisplayInterface, MyListData } from '../types';

// const wrapperClass:string = ;
const wrapperClass:string = 'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col basis-2/3 max-w-xl';
const labelClass:string = 'm-1';
const listBoxClass:string = 'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col';
const listBoxItemClass:string = 'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between max-w-30';
const listBoxItemLabelClass:string = 'm-1 p-2 rounded-md';
const listBoxItemButtonClass:string = 'bg-lime-200 my-1 p-2 rounded-md';
// const wrapperClass:string = ;

const ListDisplay: React.FC<ListDisplayInterface> = ({ ListData, onPressFunc }) => {

        let listDisplayBuffer: listDisplayBufferInterface[] = [];

        ListData.items.forEach(element => {
            if(element.isDeleted == false){
                listDisplayBuffer.push(element);
            }
        });

        // console.log('listDisplayBuffer')
        // console.log(listDisplayBuffer)
    
    if (!ListData) {
        return (
            <>
                <ErrorDisplay />
            </>
        )
    } else {
        return (
             <div className={wrapperClass}>
                <Label className={labelClass} aria-label={'Main list title'}>Main List Display</Label>
                <ListBox className={listBoxClass}
                    items={listDisplayBuffer}
                    aria-label={'History of list items added and removed'}
                    selectedKeys={ListData.selectedKeys}
                    onSelectionChange={ListData.setSelectedKeys}>
                    {item => <ListBoxItem className={listBoxItemClass} key={item.name} aria-label={item.name + ' label'} textValue={item.name}><Label className={listBoxItemLabelClass}>{item.name}</Label><Button className={listBoxItemButtonClass}  aria-label={item.name + ' remove button'} onPress={() => { onPressFunc(item.name, item) }}>delete</Button></ListBoxItem>}
                </ListBox>
            </div>
        )
    }
}

export default ListDisplay;

