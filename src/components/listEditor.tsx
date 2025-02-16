
import React, { useState } from 'react';
import ErrorDisplay from './errorDisplay';
import { Button,Form, Input, Label,TextField } from 'react-aria-components';
import { Key, Selection } from 'react-stately';
import { ListEditorInterface, MyListData } from '../types';

//Custom presets using tailwind class names across common usages


const ListEditor: React.FC<ListEditorInterface> = ({ListData, onPressFunc}) => {
    const [count, setCount] = useState(3);
    const [bool, setBool] = useState(false);
 
    let formTempMem: MyListData = {
        ListData: {
            items: [
                {
                    name: '',
                    id: count,
                    isDeleted: bool
                }
            ],
            selectedKeys: 'all',
            setSelectedKeys: function (keys: Selection): void {
                throw new Error('Function not implemented.');
            },
            filterText: '',
            setFilterText: function (filterText: string): void {
                throw new Error('Function not implemented.');
            },
            getItem: function (key: Key): { name: string; id: number; isDeleted: boolean; } | undefined {
                throw new Error('Function not implemented.');
            },
            insert: function (index: number, ...values: { name: string; id: number; }[]): void {
                throw new Error('Function not implemented.');
            },
            insertBefore: function (key: Key, ...values: { name: string; id: number; }[]): void {
                throw new Error('Function not implemented.');
            },
            insertAfter: function (key: Key, ...values: { name: string; id: number; }[]): void {
                throw new Error('Function not implemented.');
            },
            append: function (...values: { name: string; id: number; }[]): void {
                throw new Error('Function not implemented.');
            },
            prepend: function (...values: { name: string; id: number; }[]): void {
                throw new Error('Function not implemented.');
            },
            remove: function (...keys: Key[]): void {
                throw new Error('Function not implemented.');
            },
            removeSelectedItems: function (): void {
                throw new Error('Function not implemented.');
            },
            move: function (key: Key, toIndex: number): void {
                throw new Error('Function not implemented.');
            },
            moveBefore: function (key: Key, keys: Iterable<Key>): void {
                throw new Error('Function not implemented.');
            },
            moveAfter: function (key: Key, keys: Iterable<Key>): void {
                throw new Error('Function not implemented.');
            },
            update: function (key: Key, newValue: { name: string; id: number; }): void {
                throw new Error('Function not implemented.');
            }
        },
    };


    const setFormData = (val: string) => {
        let value = val;
        if(value != null){
        formTempMem.ListData.items[0].name = value;
        }

    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target != null){
            setFormData(e.target.value);
        }
    };

    const handleFormSubmit = () => {
        if(formTempMem.ListData.items[0].name != ''){
            onPressFunc(formTempMem.ListData.items[0]);
            let tempCount = count +1;
            setCount(tempCount);
            console.log('ListData');
            console.log(ListData)
        }

    }

    if (!ListData) {
        return (
            <>
                <ErrorDisplay/>
            </>
        )
    } else {
        return (
            <div className={'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col flex-grow  basis-2/3 max-w-md'}>
                <Label className={'m-1'} aria-label={'Editor list title'}>Edit list</Label>
                <Form
                    className='bg-slate-500 rounded-xl my-2 p-2 flex flex-nowrap flex-col flex-shrink'
                    aria-label={'Editor Form'}
                    onInvalid={(e) => {
                        e.preventDefault();
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit();
                    }}
                >
                    <div>
                    <TextField className={'flex flex-nowrap flex-col rounded-md'} aria-label={'text field: first name'}>
                        <Label className={'text'} aria-label={'text field: first name label element'}>First name</Label>
                        <Input className={'rounded-md'}  aria-label={'Input field: enter Name here'} onChange={handleInputChange} />
                    </TextField>
                    </div>

                    <Button className={'bg-blue-400 rounded-lg px-3 my-2'}  type='submit'  aria-label={'Editor form submit button'}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ListEditor;
