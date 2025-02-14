import React from 'react';
import ErrorDisplay from './errorDisplay';
import { Button, Cell, Label, ListBox, ListBoxItem, Row, } from 'react-aria-components';
import { MyComponentProps } from '../types';


const ListDisplay: React.FC<MyComponentProps> = ({ ListData, onPressFunc }) => {
    console.log(ListData);
    if (!ListData) {
        return (
            <>
                <ErrorDisplay />
            </>
        )
    } else {
        return (
            <>
                <Label aria-label={'History list title'}>Main List Display</Label>
                <ListBox
                    items={ListData.items}
                    aria-label={"History of list items added and removed"}
                    selectedKeys={ListData.selectedKeys}
                    onSelectionChange={ListData.setSelectedKeys}>
                    {item => <ListBoxItem key={item.name} aria-label={item.name + " label"} textValue={item.name}>{item.name}<Button aria-label={item.name + " remove button"} onPress={() => { onPressFunc(item.name) }}>delete</Button></ListBoxItem>}
                </ListBox>
            </>
        )
    }
}

export default ListDisplay;

