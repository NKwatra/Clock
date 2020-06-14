import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Stopwatch = () => {
  return (
    <View style={styles.container}>
      <Text>Stopwatch </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Stopwatch;
