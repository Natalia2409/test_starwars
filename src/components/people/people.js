import React from 'react';

const People = ({ name, gender, created, homeworld }) => {
    return (
        <div className='card'>
            <div>
                <h1>Name: {name}</h1>
            </div>
            <div>
                <h2>Gender: {gender}</h2>
                <div>
                    <p>Created: {created.replace('T', ' ').substr(0, 16)}</p>
                    <h2>Planet: {homeworld}</h2>
                </div>
            </div>
        </div>
    )
}

export default People;