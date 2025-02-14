
import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Cell, Form, Input, Label, Row, TextField } from 'react-aria-components';
import { Key, ListData, Selection, useListData } from 'react-stately';
import { formTempMemInterface } from '../types';
import { MyComponentProps, MyComponentPropsAdd, MyListData } from '../types';

//Custom presets using tailwind class names across common usages


// function ListEditor( items: ListData<[string]>, addAnimal:Function ) {
const ListEditor: React.FC<MyComponentPropsAdd> = ({ListData, onPressFunc}) => {
 
    let formTempMem: MyListData = {
        ListData: {
            items: [
                {
                    name: '',
                    id: ''
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
            getItem: function (key: Key): { name: string; id: string; } | undefined {
                throw new Error('Function not implemented.');
            },
            insert: function (index: number, ...values: { name: string; id: string; }[]): void {
                throw new Error('Function not implemented.');
            },
            insertBefore: function (key: Key, ...values: { name: string; id: string; }[]): void {
                throw new Error('Function not implemented.');
            },
            insertAfter: function (key: Key, ...values: { name: string; id: string; }[]): void {
                throw new Error('Function not implemented.');
            },
            append: function (...values: { name: string; id: string; }[]): void {
                throw new Error('Function not implemented.');
            },
            prepend: function (...values: { name: string; id: string; }[]): void {
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
            update: function (key: Key, newValue: { name: string; id: string; }): void {
                throw new Error('Function not implemented.');
            }
        },
        // onPressFunc: function (name: Key): void {
        //     throw new Error('Function not implemented.');
        // }
    };


    const setFormData = (val: string, field: string) => {
        console.log("setPropsArrStateCallback")
        console.log(formTempMem)
        let value = val;

        if (field == 'name') {
            formTempMem.ListData.items[0].name = value;
            console.log(formTempMem.ListData.items[0].name);
        }
        if (field == 'id') {
            formTempMem.ListData.items[0].id = value;
            console.log(formTempMem.ListData.items[0].id);
        }

    };

    console.log('formTempMem');
    console.log(formTempMem);

    //Reduce later
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);
        if(e.target != null){
            setFormData(e.target.value, 'name');
        }
    };
    const handleInputChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target);
        if(e.target != null){
            setFormData(e.target.value, 'id');
        }
    };

    const handleFormSubmit = () => {
        console.log('formTempMem on submit');
        console.log(formTempMem);
        onPressFunc(formTempMem.ListData.items[0]);

    }

  

    if (!ListData) {
        return (
            <>
                <ErrorDisplay/>
            </>
        )
    } else {
        return (
            <div className={'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col basis-1/3 max-w-1/3'}>
                <Label className={'m-1'} aria-label={'Editor list title'}>Edit list</Label>
                <Form
                    className="bg-slate-500 rounded-xl my-2 p-2 flex flex-nowrap flex-col "
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
                    <div>
                    <TextField className={'flex flex-nowrap flex-col'} aria-label={'text field: ID '}>
                        <Label className={''} aria-label={'text field: ID label element'}>ID</Label>
                        <Input className={''}  aria-label={'Input field: enter id here'} onChange={handleInputChangeType} />
                    </TextField>
                    </div>


                    <Button className={'bg-blue-400 rounded-lg px-3 my-2'}  type="submit"  aria-label={'Editor form submit button'}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ListEditor;
