import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const Avatar = ({ avatarUrl }) => {
  const styles = StyleSheet.create({
    avatarContainer: {
      borderRadius: 50,
      overflow: 'hidden',
    },
    avatar: {
      width: 100,
      height: 100,
    },
  });

  return (
    <View style={styles.avatarContainer}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
    </View>
  );
};

export default Avatar;
