import React from 'react';
import ErrorDisplay from '../errorDisplay';
import { Button, Label, ListBox, ListBoxItem } from 'react-aria-components';
import { listDisplayBufferInterface, ListDisplayInterface } from '../../types';
import { Filter } from 'bad-words';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
//
const wrapperFragment: string =
  'wrapperFragment' +
  ' ' +
  'bg-slate-400  text-gray-900 rounded-lg' +
  ' ' +
  'w-1/1 sm:w-1/2' +
  ' ' +
  'mr-0 sm:mr-2 mb-4 sm:mb-0 ' +
  ' ' +
  'p-4' +
  ' ' +
  'flex flex-no-wrap flex-col';
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
  'p-2' +
  ' ' +
  'max-h-56 sm:max-h-96 overflow-y-scroll' +
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
  'listBoxItemLabelFragment' +
  ' ' +
  'rounded-md' +
  ' ' +
  'break-all' +
  ' ' +
  'm-1 p-2';
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
    const filter = new Filter();

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
              key={filter.clean(item.name)}
              aria-label={filter.clean(item.name) + ' label'}
              textValue={filter.clean(item.name)}
            >
              <Label className={listBoxItemLabelFragment}>
                {filter.clean(item.name)}
              </Label>
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
