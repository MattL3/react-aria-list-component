import React from 'react';
import { Button, Cell, Column, Label, ListBox, ListBoxItem, Row, Table, TableBody, TableHeader } from 'react-aria-components';
import { MyComponentProps } from '../types';


const ErrorDisplay = () => {
    return (
        <>
            <Table aria-label={'error display table'} selectionMode="multiple">
                <TableHeader aria-label={'error display table header'}>
                    <Column aria-label={'error display column'} isRowHeader>
                       Error
                    </Column>
                </TableHeader>
                <TableBody aria-label={'error display table body'}>
                    <Row aria-label={'error display row'}>
                        <Cell aria-label={'error display cell'}>sorry, an error has ocurred.</Cell>
                    </Row>
                </TableBody>
            </Table>
        </>
    )

}

export default ErrorDisplay;

