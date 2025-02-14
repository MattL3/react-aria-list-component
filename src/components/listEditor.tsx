
// import React from 'react';
// import { Button, Cell, Form, Input, Label, Row, TextField } from 'react-aria-components';
// import { ListData, useListData } from 'react-stately';
// import { formTempMemInterface } from '../types';

// //Custom presets using tailwind class names across common usages
// const customClassName00 = 'flex text-blue-500 p-1 px-4';
// const customClassName01 = 'bg-blue-500 text-slate-950 rounded-md';
// const customClassName02 = 'flex text-blue-500 p-2';
// const customClassName03 = 'flex text-blue-500 p-2';
// const customClassName04 = 'flex text-blue-500 p-2';

// function ListEditor( items: ListData<[string]>, addAnimal:Function ) {
 
//     let formTempMem: formTempMemInterface = {
//         name: '',
//         id: '',
//     };


//     const setFormData = (val: string, field: string) => {
//         console.log("setPropsArrStateCallback")
//         let value = val;

//         if (field == 'name') {
//             formTempMem.name = value;
//             console.log(formTempMem.name);
//         }
//         if (field == 'id') {
//             formTempMem.id = value;
//             console.log(formTempMem.id);
//         }

//     };

//     //Reduce later
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
//         console.log(e.target);
//         if(e.target != null){
//             setFormData(e.target.value, 'name');
//         }
//     };
//     const handleInputChangeType = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
//         console.log(e.target);
//         if(e.target != null){
//             setFormData(e.target.value, 'id');
//         }
//     };

//     const handleFormSubmit = (formTempMem: formTempMemInterface) => {
//         addAnimal(formTempMem);

//     }

  

//     if (!items) {
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
//                 <Label className={customClassName00} aria-label={'Editor list title'}>Edit list</Label>
//                 <Form
//                     className="flex p-1"
//                     aria-label={'Editor Form'}
//                     onInvalid={(e) => {
//                         e.preventDefault();
//                     }}
//                     onSubmit={(e) => {
//                         e.preventDefault();
//                         handleFormSubmit(formTempMem);
//                     }}
//                 >
//                     <div>
//                     <TextField className={customClassName00} aria-label={'text field: first name'}>
//                         <Label className={customClassName00} aria-label={'text field: first name label element'}>First name</Label>
//                         {/* <Input className={customClassName01}  aria-label={'Input field: enter first name here'} onChange={handleInputChange(this, 'f')} field={'f'}/> */}
//                     </TextField>
//                     </div>
//                     <div>
//                     <TextField className={customClassName00} aria-label={'text field: ID '}>
//                         <Label className={customClassName00} aria-label={'text field: ID label element'}>ID</Label>
//                         {/* <Input className={customClassName01}  aria-label={'Input field: enter id here'} onChange={handleInputChangeType} /> */}
//                     </TextField>
//                     </div>


//                     <Button className={'bg-blue-400 rounded-md px-3'}  type="submit"  aria-label={'Editor form submit button'}>
//                         Submit
//                     </Button>
//                 </Form>
//             </>
//         )
//     }
// }

// export default ListEditor;
