import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import MenuButton from  './MenuButton';
import ImageBar from './ImageBar';

function FixedHeader() {
  return (
    <View >
      <Header
        containerStyle={styles.header}
        backgroundColor= '#424242'
        barStyle='light-content'
        placement="left"
        leftComponent={<MenuButton />}
        centerComponent={<ImageBar />}
        rightComponent={<Text style={{ color: '#fff' }}>Ver.: 3.5.0</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.60,
    shadowRadius: 4.84,
    elevation: 5,
  }
});

export default FixedHeader;