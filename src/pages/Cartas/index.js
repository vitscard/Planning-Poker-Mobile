import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Cards, Text } from './styles';

// import { Container } from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Cartas extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;
    const card = navigation.getParam('cards');
    return (
      <Cards>
        <Card source={{ uri: card.local }} />
        <Text>{card.id}</Text>
      </Cards>
    );
  }
}
