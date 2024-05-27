import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const DisplayInfor = (props) => {
    const { listUser } = props;
    const [isShowListUser, setIsShowListUser] = useState(true);
    const handleClick = () => {
        setIsShowListUser(!isShowListUser);
    };
    useEffect(() => {
        console.log('useEffect');
        setTimeout(() => {
            document.title = 'DucPT';
        }, 5000);
    });
    return (
        <div>
            <div>
                < span onClick={() => { handleClick(); }}>{isShowListUser === true ? 'Hide list user' : 'Show list user'}</span>
            </div>
            {
                isShowListUser &&
                <div >
                    {
                        listUser.map((user, index) => {
                            return (
                                <>
                                    <div key={user.id} className={+user.age > 22 ? 'red' : 'blue'}>
                                        <p>Name: {user.name}</p>
                                        <p>Age: {user.age}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => { props.HandleDeleteUser(user.id); }}>delete</button>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            }
        </div >
    );
};
export default DisplayInfor;
