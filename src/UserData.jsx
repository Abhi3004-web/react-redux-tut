import React from "react";

function UserData(props) {
    const {data} = props;
    return (
        <>
            <h4>user name is : {data.name}</h4>
            <h4>user name is : {data.age}</h4>
            <h4>user name is : {data.city}</h4>
            <h4>user name is : {data.profession}</h4>
        </>
    )
}

export default UserData