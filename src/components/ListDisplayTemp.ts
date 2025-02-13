
import { Button, Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';

function listItemsForEach(answer) {
    let data = answer;
    data.forEach(element => {
        console.log("for each");

        return (
            <>
            <Row key= { "first"} >
            <Cell>{ element.name } </Cell>
            < Cell > { element.type } </Cell>
            < Cell > { element.date } </Cell>
            </Row>
            S</>
        )
});
};
function ListItem({ answer, setAnswerCallback }) {
    // console.log("list Item");
    // console.log(answer, setAnswerCallback);
    let data = answer;

    data.map((project, index) => {
        console.log("a")
        if (index < 3) {
            console.log("b")
            return (
                <Row>
                <Cell>{ project } </Cell>
                </Row>
            )
        }
        else {
            console.log("b")
            return (<div>Else return div </div>);
}
    })



const deleteButton = () => {
    console.log("delete pressed");
    // console.log(d.name);

    // let oldArray = [...answer]

    // oldArray.push(formTempMem)
    // console.log('data')
    // console.log(data[0])
    console.log('newState');

    //this is currently putting an array into the array, needs to be fixed to actually remove items properly as doing so should lead to the items not rendering either
    var index = data[0]
    // var index = data.indexOf(e.target.value)
    // let newState = data.filter((x) => { 
    //         return x !== d.name
    if (index !== -1) {
        data.splice(index, 1);
        console.log('data post');
        console.log(answer);
        setAnswerCallback([...answer, data[0]]);
    }
    //     })

    // const array = [...this.state.people]; // make a separate copy of the array
    // var index = array.indexOf(e.target.value)
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   this.setState({people: array});
    // }

    // console.log(newState);
    // setAnswerCallback([...answer, formTempMem]);

    // setAnswerCallback({people: this.state.people.filter(function(person) { 
    //     return person !== e.target.value 
    // })});
}

// let i = 0;
// data.forEach(element => {
//     console.log("for each");
//     console.log(element.name);
//     i++;
// });
// Object.keys(data).forEach(key => {
//     console.log("for each other");
//     console.log(key, data[key]);
// });
if (typeof data === 'undefined') {
    // does not exist
}
else {
    // does exist

    // const listItems = data.map(
    //     (d) => <Row key={d.name}><Cell>{d.name}</Cell><Cell>{d.type}</Cell><Cell>{d.date}</Cell><Cell><Button onPress={() => deleteButton()}>Delete</Button></Cell></Row>);
    // listItemsForEach();


    const final = [];

    if (data === undefined || data.length == 0) {
        console.log('undefined');
    } else {

        console.log('data');
        console.log(data);

        for (let user of data) {
            console.log('user');
            console.log(user);
            final.push(<Row key={ user.name } > <Cell>{ user.name } < /Cell><Cell>{user.type}</Cell > <Cell>{ user.date } < /Cell><Cell><Button onPress={() => deleteButton()}>Delete</Button > </Cell></Row >);
        }
    }
    console.log("final");
    console.log(final);
    if (!answer) {
        return (
            <>
            <Row>
            <Cell>"sorry, no props were found" </Cell>
            </Row>
            </>
        )
    } else {
        return (
            <>
            <Row key= { "first"} >
            <Cell>"here's some props" </Cell>
            </Row>
        {/* {ListItem} */ }
        {/* {listItemsForEach(answer)} */ }
        {/* {Object.keys(data).forEach(key => {
                        console.log("for each other");
                        console.log(key, data[key].name);
                        <Row>
                            <Cell>{data[key].name}"a"</Cell>
                        </Row>
                        })} */}

        { final }


        </>
            )
    }
}
}


function ListDisplay({ answer, setAnswerCallback }) {
    // console.log("list Display");
    // console.log(answer);
    return (
        <>
        <Table aria - label= "Files" selectionMode = "multiple" >
            <TableHeader>
            <Column>
            </Column>
            < Column isRowHeader > Name </Column>
                < Column > Type </Column>
                < Column > Date Modified </Column>
                    </TableHeader>
                    < TableBody >
                    <ListItem answer={ answer } setAnswerCallback = { setAnswerCallback } />
                        </TableBody>
                        </Table>
                        </>
    )
}

export default ListDisplay;

