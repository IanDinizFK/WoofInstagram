import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';

const WoofCard = ({ name, avatar }) => {
  return (
    <View style={[styles.card, styles.cardContainer]}>
      <Avatar avatarUrl={avatar} />
      <View style={styles.titleContainer}>
        <Title>{name}</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 8, // Adiciona espaço entre os cards
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 16,
    marginBottom: 16,
  },
  titleContainer: {
    alignItems: 'center',
  },
});

export default WoofCard;
