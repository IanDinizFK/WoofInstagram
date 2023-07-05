import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const WoofPost = ({ image, title, description }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    imageContainer: {
      flex: 1,
      marginRight: 16,
    },
    image: {
      width: '100%',
      height: 100,
      borderRadius: 8,
    },
    contentContainer: {
      flex: 2,
      flexDirection: 'column',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default WoofPost;
