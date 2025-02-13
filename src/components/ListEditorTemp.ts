import { Button, Form, Input, Label, ListBox, ListBoxItem, Popover, Select, SelectValue, TextField } from 'react-aria-components';
///bookmark
 // for (const [key, value] of Object.entries(val)) {
        //     console.log(`${key}: ${value}`);
        //     console.log('`${key}: ${value}`');
        // }

function ListEditor({ propsArr, answer, setAnswer }) {


    // this.setState(previousState => ({
    //     propsArr: [...previousState.myArray, 'new value']
    // }));
    console.log('ListEditor');
    console.log(propsArr);


    // const handleSubmit = (character) => {

    //    }

    const handleInputChange = (e) => {

        setAnswer(prevValue => {

            // EDITED: this will only trigger when the input value is empty string
            if (prevValue.length === 0 || e.target.value.length === 0) {
                // setAnswer(answer);
            }

            // this is the current value of the input you are typing in the field
            // you have to return it in order to update the inputValue

            // propsArr: [...prevValue.propsArr, 'new value'];
            let oldArray = [...propsArr]
            oldArray.push(character)
            console.log(oldArray)
            setAnswer([...propsArr, character]);
            return e.target.value
        });
    }
    // const handleInputChange = (e) => {

    //     setAnswer(prevValue => {

    //       // EDITED: this will only trigger when the input value is empty string
    //   if(prevValue.length === 0 || e.target.value.length === 0){
    //     setAnswer(answer);
    //   }

    //       // this is the current value of the input you are typing in the field
    //       // you have to return it in order to update the inputValue

    //     // propsArr: [...prevValue.propsArr, 'new value'];
    //   return e.target.value
    // });
    // }


    return (
        <>
            <Label>Edit list</Label>
            <Form>
                <Label>First name</Label>
                <Input />
                <Input />
                <Input />
                <Button onClick={handleInputSubmit}></Button>
            </Form>
        </>
    )
}

export default ListEditor;
