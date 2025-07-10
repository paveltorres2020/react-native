
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './assets/logo.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo width={500} height={500} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
