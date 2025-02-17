import React from 'react';
import {  Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;
const wrapperClass:string = 'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col basis-1/3 w-full max-w-48';
const columnClass:string = 'm-1';
const tableBodyClass:string = 'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col';
const rowClass:string = 'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between max-w-30';
const cellClass:string = 'm-1 p-2 rounded-md';
// const wrapperClass:string = ;

//Error component to gracefully handle issues with state or components with human friendly front end ui.
const ErrorDisplay = () => {
    return (
        <div className={wrapperClass}>
            <Table aria-label={'error display table'} selectionMode='multiple'>
                <TableHeader aria-label={'error display table header'}>
                    <Column className={columnClass}  aria-label={'error display column'} isRowHeader>
                       Error
                    </Column>
                </TableHeader>
                <TableBody className={tableBodyClass} aria-label={'error display table body'}>
                    <Row className={rowClass} aria-label={'error display row'}>
                        <Cell className={cellClass} aria-label={'error display cell'}>sorry, an error has ocurred.</Cell>
                    </Row>
                </TableBody>
            </Table>
        </div>
    )

}

export default ErrorDisplay;

