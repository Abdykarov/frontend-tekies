import {Button} from "@mui/material";

const ParentItem = ({parent, remove}) => {

    return (
        <tr>
            <td>{parent.firstName}</td>
            <td>{parent.lastName}</td>
            <td>
                <Button onClick={() => remove(parent)}>Delete</Button>
            </td>
        </tr>
    )
};

export default ParentItem;