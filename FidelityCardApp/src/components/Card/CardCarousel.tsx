import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../context/CardContext';

interface CardCarouselProps {
  cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {cards.map((card) => (
        <View key={card.id} style={styles.cardContainer}>
          <Text>{card.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 200,
    height: 150,
    margin: 10,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardCarousel;