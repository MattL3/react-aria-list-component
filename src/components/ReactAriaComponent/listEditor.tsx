import React, { useEffect, useState } from 'react';
import ErrorDisplay from '../errorDisplay';
import { Button, Form, Input, Label, TextField } from 'react-aria-components';
import { ListEditorInterface } from '../../types';
import { Filter } from 'bad-words';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
//
const wrapperFragment: string =
  'wrapperFragment' +
  ' ' +
  'bg-slate-400 text-gray-900 rounded-lg duration-300' +
  ' ' +
  'p-4' +
  ' ' +
  'flex flex-nowrap flex-col flex-grow w-full' +
  ' ' +
  'max-w-auto';
//

//
const editorFormLabelFragment: string =
  'editorFormLabelFragment' + ' ' + 'mb-1' + ' ' + 'flex-nowrap';
//

//
const editFormFragment: string =
  'editFormFragment' +
  ' ' +
  'bg-slate-500 rounded-xl' +
  ' ' +
  'p-2' +
  ' ' +
  'flex flex-nowrap flex-col flex-shrink';
//

//
const editFormTextFieldFragment: string =
  'editFormTextFieldFragment' +
  ' ' +
  'rounded-md' +
  ' ' +
  'flex flex-nowrap flex-col';
//

//
const editFormTextFlexRowFragment: string =
  'editFormTextFlexRowFragment' + ' ' + 'flex flex-nowrap flex-row';
//
//
const editFormTextFieldLabelFragment: string =
  'editFormTextFieldLabelFragment' + ' ' + 'm-1' + ' ' + 'text';
//

//
const editFormTextFieldInputFragment: string =
  'editFormTextFieldInputFragment' +
  ' ' +
  'rounded-md bg-amber-50' +
  ' ' +
  'px-2' +
  ' ' +
  'w-4/6' +
  ' ' +
  'flex';
//

//
const editFormSubmitButtonEnabledFragment: string =
  'editFormSubmitButtonEnabledFragment' +
  ' ' +
  'bg-blue-400 text-sky-950 rounded-lg' +
  ' ' +
  'w-2/6' +
  ' ' +
  'px-3 mx-2';
//

//
const editFormSubmitButtonFragment: string =
  'editFormTextFieldLabelFragment' +
  ' ' +
  'bg-blue-400 text-sky-950 rounded-lg' +
  ' ' +
  'opacity-50' +
  ' ' +
  'w-2/6' +
  ' ' +
  'px-3 mx-2';
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
    const filter = new Filter();

    //Append new user created object to global state item.
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      console.log(event);
      if (name == '' || filter.isProfane(name)) {
      } else {
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
      }
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
                {'Animal name'}
              </Label>
              <div className={editFormTextFlexRowFragment}>
                <Input
                  className={editFormTextFieldInputFragment}
                  aria-label={'Input field: enter Name here'}
                  onChange={(e) => handleChange(e)}
                  value={name}
                />
                <Button
                  className={
                    name == ''
                      ? editFormSubmitButtonFragment
                      : editFormSubmitButtonEnabledFragment
                  }
                  type='submit'
                  aria-label={'Editor form submit button'}
                  isDisabled={name == '' ? true : false}
                >
                  Submit
                </Button>
              </div>
            </TextField>
          </div>
        </Form>
      </div>
    );
  }
};

export default ListEditor;
