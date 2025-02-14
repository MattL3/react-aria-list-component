import React, { useEffect, useState } from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Cell, Label, ListBox, ListBoxItem, Row, Text } from 'react-aria-components';
import { Key, ListData, Selection, useListData } from 'react-stately';
import { MyComponentProps, MyListData } from '../types';

const ListHistory: React.FC<MyComponentProps> = ({ ListData, onPressFunc }) => {
    const [count, setCount] = useState(0);

    const [formTempMem, setFormTempMem] = useState({
            items: [
                {
                    name: '',
                    id: count
                }
            ],
            // selectedKeys: 'all',
            // setSelectedKeys: function (keys: Selection): void {
            //     throw new Error('Function not implemented.');
            // },
            // filterText: '',
            // setFilterText: function (filterText: string): void {
            //     throw new Error('Function not implemented.');
            // },
            // getItem: function (key: Key): { name: string; id: number; } | undefined {
            //     throw new Error('Function not implemented.');
            // },
            // insert: function (index: number, ...values: { name: string; id: number; }[]): void {
            //     throw new Error('Function not implemented.');
            // },
            // insertBefore: function (key: Key, ...values: { name: string; id: number; }[]): void {
            //     throw new Error('Function not implemented.');
            // },
            // insertAfter: function (key: Key, ...values: { name: string; id: number; }[]): void {
            //     throw new Error('Function not implemented.');
            // },
            // append: function (...values: { name: string; id: number; }[]): void {
            //     throw new Error('Function not implemented.');
            // },
            // prepend: function (...values: { name: string; id: number; }[]): void {
            //     throw new Error('Function not implemented.');
            // },
            // remove: function (...keys: Key[]): void {
            //     throw new Error('Function not implemented.');
            // },
            // removeSelectedItems: function (): void {
            //     throw new Error('Function not implemented.');
            // },
            // move: function (key: Key, toIndex: number): void {
            //     throw new Error('Function not implemented.');
            // },
            // moveBefore: function (key: Key, keys: Iterable<Key>): void {
            //     throw new Error('Function not implemented.');
            // },
            // moveAfter: function (key: Key, keys: Iterable<Key>): void {
            //     throw new Error('Function not implemented.');
            // },
            // update: function (key: Key, newValue: { name: string; id: number; }): void {
            //     throw new Error('Function not implemented.');
            // }
    });

    useEffect(() => {
        setFormTempMem(ListData);
    }, []);

    console.log('formTempMem');
    console.log(formTempMem);


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
                    >
                    {item => <ListBoxItem className={'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between max-w-30'} key={item.name} aria-label={item.name + " label"} textValue={item.name}><Label className={'m-1 p-2 rounded-md'}>{item.name}</Label><Button className={'bg-lime-200 my-1 p-2 rounded-md'} aria-label={item.name + " remove button"} onPress={() => { onPressFunc(item.name) }}>delete</Button></ListBoxItem>}
                </ListBox>
            </div>
        )
    }
}

export default ListHistory;

