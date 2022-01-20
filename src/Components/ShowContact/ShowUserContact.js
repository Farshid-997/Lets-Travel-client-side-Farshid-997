import React from 'react';

const ShowUserContact = (props) => {
    const{Email,Name,description}=props.contacts
    return (
        <div style={{border:'3px dotted green',margin:'30px',padding:'10px',width:'100%'}}>
            <h1>Name of User is:{Name}</h1>
            <h2>Email of the User is:{Email}</h2>
            <p>Description:{description}</p>
        </div>
    );
};

export default ShowUserContact;