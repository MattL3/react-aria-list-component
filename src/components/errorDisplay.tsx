import React from 'react';
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';

//Collections of tailwind class names declared as constants to keep component renders easily readable.
// const wrapperClass:string = ;

//
const wrapperFragment: string =
  'bg-slate-400 text-sky-200 rounded-lg' +
  ' ' +
  'px-4 my-2' +
  ' ' +
  'basis-1/3 w-full max-w-48' +
  ' ' +
  'flex flex-no-wrap flex-col';
//

//
const columnFragment: string = 'm-1';
//

//
const tableBodyFragment: string =
  'bg-slate-500 text-sky-700 rounded-xl' +
  ' ' +
  'my-2 p-2' +
  ' ' +
  'flex flex-nowrap flex-col';
//

//
const rowFragment: string =
  'bg-lime-50 rounded-md' +
  ' ' +
  'm-1 p-2' +
  ' ' +
  'max-w-30' +
  ' ' +
  'flex flex-nowrap justify-between';
//

//
const cellFragment: string = 'rounded-md' + ' ' + 'm-1 p-2';
//

//
// const wrapperFragment:string = ;

//Error component to gracefully handle issues with state or components with human friendly front end ui.
const ErrorDisplay = () => {
  return (
    <div className={wrapperFragment}>
      <Table aria-label={'error display table'} selectionMode='multiple'>
        <TableHeader aria-label={'error display table header'}>
          <Column
            className={columnFragment}
            aria-label={'error display column'}
            isRowHeader
          >
            Error
          </Column>
        </TableHeader>
        <TableBody
          className={tableBodyFragment}
          aria-label={'error display table body'}
        >
          <Row className={rowFragment} aria-label={'error display row'}>
            <Cell className={cellFragment} aria-label={'error display cell'}>
              sorry, an error has occurred.
            </Cell>
          </Row>
        </TableBody>
      </Table>
    </div>
  );
};

export default ErrorDisplay;
