import React from 'react';

const Planets = ({ name, diameter, created, residents, ...rootDOMAttributes }) => {
    return (
        <div className='card' {...rootDOMAttributes}>
            <h1>Name: {name}</h1>
            <h2>Diameter: {diameter}</h2>
            <p>Created: {created.replace('T', ' ').substr(0, 16)}</p>
        </div>
    )
}

export default Planets;