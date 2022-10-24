import ParentItem from "./ParentItem";
import {useEffect, useState} from "react";
import {Input} from "@mui/material";

const ParentsTable = ({parents}) => {

    const [items, setItems] = useState(parents)
    const [addFormData, setAddFormData] = useState({
        firstName: '',
        lastName: ''
    })
    const [selectedFirstName, setSelectedFirstName] = useState("")
    const [selectedLastName, setSelectedLastName] = useState("")

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newParent = {
            id: Math.floor(Math.random() * 100),
            firstName: addFormData.firstName,
            lastName: addFormData.lastName
        };
        const newParents = [...items, newParent];
        setItems(newParents)
    }

    const handleChangeInput = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
        console.log(addFormData)
    }

    const removeParent = (parent) => {
        setItems(items.filter(p => p.id !== parent.id))
    }

    const filterByFirstName = (filteredData) => {
        if (!selectedFirstName) {
            return filteredData;
        }

        const filteredParents = filteredData.filter(
            (parent) => parent.firstName.split(" ").indexOf(selectedFirstName) !== -1
        );
        return filteredParents
    }

    const filterByLastName = (filteredData) => {
        if (!selectedLastName) {
            return filteredData;
        }

        const filteredParents = filteredData.filter(
            (parent) => parent.lastName.split(" ").indexOf(selectedLastName) !== -1
        );
        return filteredParents
    }

    useEffect(() => {
        let filteredData = filterByFirstName(items)
        filteredData = filterByLastName(filteredData)
        setItems(filteredData)
    }, [selectedFirstName, selectedLastName]);

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Filter</h1>
            <form>
                <input type="text" name="filterName" required="required" placeholder="Enter a name..." />
                <input type="text" name="filterLastname" required="required" placeholder="Enter a lastname..." />
            </form>

            <h1 style={{textAlign: "center"}}>Parents list</h1>
            <table style={{width: "80%", borderCollapse: "collapse", textAlign: "center"}}>
                <tr>
                    <th>FirstName</th>
                    <th>Lastname</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>

                {items.map((parent) =>
                    <ParentItem remove={removeParent} parent={parent} key={parent.id}/>
                )}
            </table>

            <h1 style={{textAlign: "center"}}>Create parent</h1>

            <form>
                <input type="text" name="firstName" required="required" placeholder="Enter a name..." onChange={handleChangeInput}/>
                <input type="text" name="lastName" required="required" placeholder="Enter a lastname..." onChange={handleChangeInput}/>
                <button type="submit" onClick={handleFormSubmit}>Create</button>
            </form>
        </div>
    )
}

export default ParentsTable;