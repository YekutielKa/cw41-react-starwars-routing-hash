import React from 'react';

const Friend = ({photo,number}) => {
    let friendStyle = "col-4 p-1";

    if(number === 7){
        friendStyle = "bottom-left col-4 p-1";
    }
    if(number === 9){
        friendStyle = "bottom-right col-4 p-1";
    }
    return (
        <img className={friendStyle} src={photo} alt="friend"/>
    );
};

export default Friend;