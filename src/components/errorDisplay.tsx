import React from 'react';
import {  Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';


const ErrorDisplay = () => {
    return (
        <div className={'bg-slate-400  text-sky-200 rounded-lg px-4 my-2 flex flex-no-wrap flex-col basis-1/3 w-full max-w-48'}>
            <Table aria-label={'error display table'} selectionMode='multiple'>
                <TableHeader aria-label={'error display table header'}>
                    <Column className={'m-1'}  aria-label={'error display column'} isRowHeader>
                       Error
                    </Column>
                </TableHeader>
                <TableBody className={'bg-slate-500 rounded-xl my-2 p-2 text-sky-700 flex flex-nowrap flex-col'} aria-label={'error display table body'}>
                    <Row className={'bg-lime-50 m-1 p-2 rounded-md flex flex-nowrap justify-between max-w-30'} aria-label={'error display row'}>
                        <Cell className={'m-1 p-2 rounded-md'} aria-label={'error display cell'}>sorry, an error has ocurred.</Cell>
                    </Row>
                </TableBody>
            </Table>
        </div>
    )

}

export default ErrorDisplay;

