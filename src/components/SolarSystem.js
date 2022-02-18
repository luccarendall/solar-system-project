import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title key="headline" headline="Planetas" />
        {Planets.map(
          (event, i) => (<PlanetCard
            key={ i }
            planetName={ event.name }
            planetImage={ event.image }
          />)
          ,
        )}
      </div>
    );
  }
}

export default SolarSystem;
