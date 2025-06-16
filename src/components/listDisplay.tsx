import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Label, ListBox, ListBoxItem } from 'react-aria-components';
import { listDisplayBufferInterface, ListDisplayInterface } from '../types';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
//
const wrapperFragment: string =
  'wrapperFragment' +
  ' ' +
  'bg-slate-400  text-sky-200 rounded-lg' +
  ' ' +
  'px-4 m-2' +
  ' ' +
  'flex flex-no-wrap flex-col' +
  ' ' +
  'w-4/5 sm:w-2/3 max-w-96';
//

//
const labelFragment: string = 'labelFragment' + ' ' + 'm-1';
//

//
const listBoxFragment: string =
  'listBoxFragment' +
  ' ' +
  'bg-slate-500 text-sky-700 rounded-xl' +
  ' ' +
  'my-2 p-2' +
  ' ' +
  'flex flex-nowrap flex-col';
//

//
const listBoxItemFragment: string =
  'listBoxItemFragment' +
  ' ' +
  'bg-lime-50 rounded-md' +
  ' ' +
  'm-1 p-2' +
  ' ' +
  'flex flex-nowrap justify-between';
//

//
const listBoxItemLabelFragment: string =
  'listBoxItemLabelFragment' + ' ' + 'rounded-md' + ' ' + 'm-1 p-2';
//

//
const listBoxItemButtonFragment: string =
  'listBoxItemButtonFragment' +
  ' ' +
  'bg-lime-200 rounded-md' +
  ' ' +
  'my-1 p-2';
//

//

//Functional component meant to render list of items from state, with ability to remove items from the list with the included delete button
const ListDisplay: React.FC<ListDisplayInterface> = ({
  ListData,
  onPressFunc,
}) => {
  //check if any error occurs with ListData prop
  if (!ListData) {
    return (
      <>
        <ErrorDisplay />
      </>
    );
  } else {
    //local buffer of state
    let listDisplayBuffer: listDisplayBufferInterface[] = [];

    //loop through ListData state, only add items to local buffer where isDeleted == false
    ListData.items.forEach((element) => {
      if (element.isDeleted == false) {
        listDisplayBuffer.push(element);
      }
    });

    //return display of all animals where isDeleted == false, including button to delete entries
    return (
      <div className={wrapperFragment}>
        <Label className={labelFragment} aria-label={'Main list title'}>
          Main List Display
        </Label>
        <ListBox
          className={listBoxFragment}
          items={listDisplayBuffer}
          aria-label={'History of list items added and removed'}
          selectedKeys={ListData.selectedKeys}
          onSelectionChange={ListData.setSelectedKeys}
        >
          {(item) => (
            <ListBoxItem
              className={listBoxItemFragment}
              key={item.name}
              aria-label={item.name + ' label'}
              textValue={item.name}
            >
              <Label className={listBoxItemLabelFragment}>{item.name}</Label>
              <Button
                className={listBoxItemButtonFragment}
                aria-label={item.name + ' remove button'}
                onPress={() => {
                  onPressFunc(item.id, item);
                }}
              >
                delete
              </Button>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
    );
  }
};

export default ListDisplay;
