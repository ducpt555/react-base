import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
const MyComponent = (props) => {
    const [listUser, setListUser] = useState(
        [
            { id: 1, name: 'duc', age: 20 },
            { id: 2, name: 'tuan', age: 22 },
            { id: 3, name: 'huy', age: 25 },
        ]
    );
    const HandleAddUser = (user) => {
        setListUser([...listUser, user]);
    };

    const HandleDeleteUser = (id) => {
        const newListUser = listUser.filter((user) => {
            return user.id !== id;
        });
        setListUser(newListUser);
    };

    //JSX CÚ PHÁP ĐẶC BIỆT
    return (
        <div>
            <AddUserInfor
                HandleAddUser={HandleAddUser}></AddUserInfor>
            <br /><br />
            <DisplayInfor listUser={listUser}
                HandleDeleteUser={HandleDeleteUser} />
        </div>
    );
};
export default MyComponent;
