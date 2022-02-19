import React from 'react';
import Title from './Title';
// O componente Title deve ser renderizado recebendo a prop headline com o valor "Missões"
class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
      </>
    );
  }
}

export default Missions;
