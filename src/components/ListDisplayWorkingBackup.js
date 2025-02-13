
import { Button, Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';
function ListItem({ answer, setAnswerCallback }) {
    // console.log("list Item");
    // console.log(answer, setAnswerCallback);
    let data1 = answer;

    const deleteButton = () => {
        console.log("delete pressed");
        // console.log(d.name);

        // let oldArray = [...answer]

        // oldArray.push(formTempMem)
        // console.log('data')
        // console.log(data[0])
        console.log('newState');

        var index = data[0]
        // var index = data.indexOf(e.target.value)
        // let newState = data.filter((x) => { 
        //         return x !== d.name
        if (index !== -1) {
            data1.splice(index, 1);
            console.log('data post');
            console.log(answer);
            setAnswerCallback([...answer, data1]);
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

    const data = answer;
    let i = 0;
    data.forEach(element => {
        console.log("for each");
        console.log(element.name);
        i++;
    });
    if(typeof data === 'undefined') {
        // does not exist
    }
    else {
        // does exist
    }

        // const listItems = data.map(
        //     (d) => <Row key={d.name}><Cell>{d.name}</Cell><Cell>{d.type}</Cell><Cell>{d.date}</Cell><Cell><Button onPress={() => deleteButton()}>Delete</Button></Cell></Row>);

        const listItemsForEach = (answer) => {
            data.forEach(element => {
                console.log("for each");
                <Row key={"first"}>
                <Cell>"here's some props"</Cell>
                {/* <Cell>{name}</Cell>
                <Cell>{type}</Cell>
                <Cell>{date}</Cell> */}
                </Row>
            });
        };

        listItemsForEach();

        if (!answer) {
            return (
                <>
                    <Row>
                        <Cell>"sorry, no props were found"</Cell>
                    </Row>
                </>
            )
        } else {
            return (
                <>
                    <Row key={"first"}>
                        <Cell>"here's some props"</Cell>
                        {/* <Cell>{name}</Cell>
                    <Cell>{type}</Cell>
                    <Cell>{date}</Cell> */}
                    </Row>
                    {/* {listItems} */}
                </>
            )
        }
    }


function ListDisplay({ answer, setAnswerCallback }) {
    // console.log("list Display");
    // console.log(answer);
    return (
        <>
            <Table aria-label="Files" selectionMode="multiple">
                <TableHeader>
                    <Column>
                    </Column>
                    <Column isRowHeader>Name</Column>
                    <Column>Type</Column>
                    <Column>Date Modified</Column>
                </TableHeader>
                <TableBody>
                    <ListItem answer={answer} setAnswerCallback={setAnswerCallback} />
                </TableBody>
            </Table>
        </>
    )
}

export default ListDisplay;
