import React from 'react';
import { StyleSheet, View } from 'react-native';
import FixedHeader from '../components/FixedHeader';
import { Header } from 'react-native/Libraries/NewAppScreen';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <FixedHeader />
      <Header />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
