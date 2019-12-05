import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Container, Cards, Card, CardButton } from './styles';
import image from '../../cards/card.png';
// import card from '../../cards/card.png';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = cards => {
    const { navigation } = this.props;
    navigation.navigate('Cards', { cards });
  };

  render() {
    return (
      <Container>
        <FlatList
          data={[
            {
              local:
                'https://lh3.googleusercontent.com/Rk7Lfk92J0b6lb4jPAoYyFOH1XTf5gWZa7edHU34H8hmXPR2ps8dWBm82ecTgv62z-mz=s180-rw',
              miniatura: image,
              id: '0',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '1/2',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '1',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '2',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '3',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '5',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '8',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '13',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '20',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '40',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '100',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: '?',
            },
            {
              local: '../../cards/card.png',
              miniatura: image,
              id: 'café',
            },
          ]}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignSelf: 'center',
          }}
          renderItem={({ item }) => (
            <Cards>
              <CardButton onPress={() => this.handleNavigate(item)}>
                <Card Key={item.id} source={item.miniatura} />
              </CardButton>
            </Cards>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Planning Poker Maistre',
};
