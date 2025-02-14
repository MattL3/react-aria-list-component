import React, { JSX } from 'react';
import { Button, Cell, Label, ListBox, ListBoxItem, Row, } from 'react-aria-components';
import { ListData, useListData } from 'react-stately';
import { customList, MyClassProps, Props } from '../types';
// , removeAnimal:MyClassProps

const ListHistory = (items: ListData<[string]>, addAnimal:Function) => {
    console.log(items);
    if (!items) {
        return (
            <>
                <Row aria-label={'empty list row'}>
                    <Cell aria-label={'empty list cell'}>"sorry, no props were found"</Cell>
                </Row>
            </>
        )
    } else {
        return (
            <>
                <Label aria-label={'History list title'}>History List</Label>
                <ListBox
                    items={items}
                    aria-label={"History of list items added and removed"}
                    selectedKeys={items.selectedKeys}
                    onSelectionChange={items.setSelectedKeys}>
                    {item => <ListBoxItem key={item.name} aria-label={item.name + " label"} textValue={item.name}>{item.name}<Button aria-label={item.name + " remove button"} onClick={() => { removeAnimal(item.name) }}>delete</Button></ListBoxItem>}
                </ListBox>
            </>
        )
    }
}

export default ListHistory;

