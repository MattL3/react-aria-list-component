
import { Button, Cell, Label, ListBox, ListBoxItem, Row, } from 'react-aria-components';

function ListHistory({ list, removeAnimal }) {
    console.log(list);
    if (!list) {
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
                    items={list.items}
                    aria-label={"History of list items added and removed"}
                    selectedKeys={list.selectedKeys}
                    onSelectionChange={list.setSelectedKeys}>
                    {item => <ListBoxItem key={item.name} aria-label={item.name + " label"} textValue={item.name}>{item.name}<Button aria-label={item.name + " remove button"} onClick={() => { removeAnimal(item.name) }}>delete</Button></ListBoxItem>}
                </ListBox>
            </>
        )
    }
}

export default ListHistory;

