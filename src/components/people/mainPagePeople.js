import React, { Component } from 'react';
import People from './people';

export default class MainPagePeople extends Component {

    state = {
        person: [],
        planets: []
    }

    getPeople() {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => 
                this.setState({
                    person: data.results
                })
            )            
    }

    getPlanets() {
        fetch('https://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => 
                this.setState({
                    planets: data.results
                })
            ) 
    }

    componentDidMount() {
        this.getPeople();
        this.getPlanets();
    }

    render() {
        const { person, planets } = this.state;
        return (
            <div className='person'>
                {person.map((el, id) => 
                    <People
                        key={id}
                        name={el.name}
                        gender={el.gender}
                        created={el.created}
                        homeworld={planets[id].name}
                        />
                )}
            </div>
        )
    }
}