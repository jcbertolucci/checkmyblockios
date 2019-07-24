import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function ImageBar() {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/logo.png')}
        resizeMode='contain'
        style= {styles.image}
      />
    </View>
  )
}

export default ImageBar;

const styles = StyleSheet.create({
  imageContainer: {
    paddingLeft: 10,
  },
   image: {
    width: 160,
    height: 45,
  },
});
