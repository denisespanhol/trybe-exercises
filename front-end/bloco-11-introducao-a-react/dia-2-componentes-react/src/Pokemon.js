import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit}, image } = this.props.pokemons;
    return (
      <section>
        <p>{`Pokémon: ${name}`}</p>
        <p>{`Type: ${type}`}</p>
        <p>{`averageWeight: ${value} ${measurementUnit}`}</p>
        <img src={image} alt={name} />
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemons: PropTypes.shape(
    {
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape(
        {
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
        }),
      image: PropTypes.string,
    }
  ).isRequired,
}

export default Pokemon;
