import React, { useEffect, useState } from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Form, Input, Label, TextField } from 'react-aria-components';
import { ListEditorInterface } from '../types';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
//
const wrapperFragment: string =
  'wrapperFragment' +
  ' ' +
  'bg-slate-400 text-sky-200 rounded-lg duration-300' +
  ' ' +
  'px-4 my-2' +
  ' ' +
  'flex flex-nowrap flex-col flex-grow w-full' +
  ' ' +
  'sm:w-1/3 max-w-auto';
//

//
const editorFormLabelFragment: string =
  'editorFormLabelFragment' + ' ' + 'm-1' + ' ' + 'flex-nowrap';
//

//
const editFormFragment: string =
  'editFormFragment' +
  ' ' +
  'bg-slate-500 rounded-xl' +
  ' ' +
  'my-2 p-2' +
  ' ' +
  'flex flex-nowrap flex-col flex-shrink';
//

//
const editFormTextFieldFragment: string =
  'editFormTextFieldFragment' + ' ' + 'flex flex-nowrap flex-col rounded-md';
//

//
const editFormTextFieldLabelFragment: string =
  'editFormTextFieldLabelFragment' + ' ' + 'text ';
//

//
const editFormTextFieldInputFragment: string =
  'editFormTextFieldInputFragment' +
  ' ' +
  'rounded-md bg-amber-50 px-2' +
  ' ' +
  'px-2' +
  ' ' +
  'flex';
//

//
const editFormSubmitButtonFragment: string =
  'editFormTextFieldLabelFragment' +
  ' ' +
  'bg-blue-400 text-sky-950 rounded-lg' +
  ' ' +
  'px-3 my-2';
//

//Functional component meant to allow users to input their own items which are then added to the state and displayed by other components.
const ListEditor: React.FC<ListEditorInterface> = ({ ListData, addAnimal }) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  const [editValueBuffer, setEditValueBuffer] = useState({
    items: [
      {
        name: name,
        id: count,
        isDeleted: bool,
      },
    ],
  });

  //watch for changes to name or count local state items.
  useEffect(() => {
    setName(name);
    setCount(count);
  }, [name, count]);

  //check if any error occurs with ListData prop
  if (!ListData) {
    return (
      <>
        <ErrorDisplay />
      </>
    );
  } else {
    //set count to match ListData prop
    if (count == 0) {
      setCount(ListData.items.length);
    }

    //get input value, set both local state items based on input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setEditValueBuffer({
        items: [{ name: value, id: count, isDeleted: false }],
      });
      setName(value);
    };

    //Append new user created object to global state item.
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      //Set placeholder count value to assign to local state item.
      let tempCount = count + 1;
      setEditValueBuffer({
        items: [{ name: name, id: tempCount, isDeleted: false }],
      });
      //add new user created object to global state item with the passed function
      addAnimal(editValueBuffer.items[0]);
      //set new id to local state
      setCount(tempCount);
      //clear user input
      setName('');
    };

    return (
      <div className={wrapperFragment}>
        <Label
          className={editorFormLabelFragment}
          aria-label={'Editor list title'}
        >
          Edit list
        </Label>
        <Form
          className={editFormFragment}
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
            <TextField
              className={editFormTextFieldFragment}
              aria-label={'text field: first name'}
            >
              <Label
                className={editFormTextFieldLabelFragment}
                aria-label={'text field: first name label element'}
              >
                First name
              </Label>
              <Input
                className={editFormTextFieldInputFragment}
                aria-label={'Input field: enter Name here'}
                onChange={(e) => handleChange(e)}
                value={name}
              />
            </TextField>
          </div>

          <Button
            className={editFormSubmitButtonFragment}
            type='submit'
            aria-label={'Editor form submit button'}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
};

export default ListEditor;
