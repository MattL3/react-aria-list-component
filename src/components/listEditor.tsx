
import React, { useEffect, useState } from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Form, Input, Label, TextField } from 'react-aria-components';
import { Key, Selection } from 'react-stately';
import { ListEditorInterface, MyListData } from '../types';

// const wrapperClass:string = ;
const wrapperClass: string = 'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col flex-grow  basis-2/3 max-w-md';
const editorFormLabelClass: string = 'm-1';
const editFormClass: string = 'bg-slate-500 rounded-xl my-2 p-2 flex flex-nowrap flex-col flex-shrink';
const editFormTextFieldClass: string = 'flex flex-nowrap flex-col rounded-md';
const editFormTextFieldLabelClass: string = 'text';
const editFormTextFieldInputClass: string = 'rounded-md';
const editFormSubmitButtonClass: string = 'bg-blue-400 text-sky-950 rounded-lg px-3 my-2';
// const wrapperClass:string = ;


const ListEditor: React.FC<ListEditorInterface> = ({ ListData, addAnimal }) => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(3);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        setName(name);
        setCount(count);
    }, [name, count])


    const [editValueBuffer, setEditValueBuffer] = useState({
        items: [
            {
                name: name,
                id: count,
                isDeleted: bool
            }
        ],
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
        setEditValueBuffer({ items: [{ name: value, id: count, isDeleted: false }] });


    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setEditValueBuffer({ items: [{ name: name, id: count, isDeleted: false }] })
        addAnimal(editValueBuffer.items[0]);
        let tempCount = count + 1;
        setCount(tempCount);

    }


    if (!ListData) {
        return (
            <>
                <ErrorDisplay />
            </>
        )
    } else {
        return (
            <div className={wrapperClass}>
                <Label className={editorFormLabelClass} aria-label={'Editor list title'}>Edit list</Label>
                <Form
                    className={editFormClass}
                    aria-label={'Editor Form'}
                    onInvalid={(e) => {
                        e.preventDefault();
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleFormSubmit(e);
                    }}
                >
                    <div>
                        <TextField className={editFormTextFieldClass} aria-label={'text field: first name'}>
                            <Label className={editFormTextFieldLabelClass} aria-label={'text field: first name label element'}>First name</Label>
                            <Input className={editFormTextFieldInputClass} aria-label={'Input field: enter Name here'} onChange={e => handleChange(e)} value={name} />
                        </TextField>
                    </div>

                    <Button className={editFormSubmitButtonClass} type='submit' aria-label={'Editor form submit button'} >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ListEditor;
