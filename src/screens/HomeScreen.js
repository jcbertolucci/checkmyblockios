import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import FixedHeader from '../components/FixedHeader';
import { Header } from 'react-native/Libraries/NewAppScreen';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FixedHeader />
      <Header />
    </SafeAreaView>
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
