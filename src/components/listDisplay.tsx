
// import React from 'react';
// import { Button, Cell, Label, ListBox, ListBoxItem, Row } from 'react-aria-components';

// function ListDisplay({ list, removeAnimal }) {
//     if (!list) {
//         return (
//             <>
//                 <Row aria-label={'empty list row'}>
//                     <Cell aria-label={'empty list cell'}>"sorry, no props were found"</Cell>
//                 </Row>
//             </>
//         )
//     } else {
//         return (
//             <>
//                 <Label aria-label={'Main list title'}>Main List</Label>
//                 <ListBox
//                     items={list.items}
//                     selectedKeys={list.selectedKeys}
//                     onSelectionChange={list.setSelectedKeys}
//                     aria-label={"list items added"}
//                     >
//                     {item => <ListBoxItem key={item.name} aria-label={item.name + " label"}>{item.name}<Button aria-label={item.name + " remove button"} onClick={() => { removeAnimal(item.name) }}>delete</Button></ListBoxItem>}
//                 </ListBox>
//             </>
//         )
//     }
// }

// export default ListDisplay;
