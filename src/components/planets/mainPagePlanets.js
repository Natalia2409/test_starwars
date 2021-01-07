import React, { Component } from 'react';
import Planets from './planets';

export default class MainPagePlanets extends Component {

    state = {
        planet: []
    }

    getPlanet() {
        fetch('https://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => 
                this.setState({
                    planet: data.results
                })
            ) 
    }

    componentDidMount() {
        this.getPlanet();
    }

    render() {
        const { planet } = this.state;
        return (
            <div className='person'>
                {planet.map((el, id) => 
                    <Planets
                        key={id}
                        name={el.name}
                        diameter={el.diameter}
                        created={el.created}
                        />
                )}
            </div>
        )
    }
}