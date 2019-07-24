import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { Button, Avatar, Text, Card } from 'react-native-elements';

import FixedHeader from '../components/FixedHeader';
import * as hooks from './hooks/hooks';

const MESSAG_ICONS = [
  'check',
  'exclamation-circle',
  'times',
];

const MESSAG_COLOURS = [
  'green',
  'orange',
  'red',
];

function AddressResultScreen({ navigation }) {
  const [addressData, setAddressData] = useState(navigation.state.params);
  const [canBuildMessage, setCanBuildMessage] = useState('');
  const [messageColour, setMessageColour] = useState(0);

  hooks.useGetAddressFromParams(navigation.state.params, setAddressData);
  hooks.useSetIconColour(addressData, setMessageColour, setCanBuildMessage);

  const handlePressBack = () => {
    const { goBack } = navigation;
    goBack();
  };

  return (
    <View style={styles.container}>
      <FixedHeader />
      <SafeAreaView style={styles.content}>
        <View style={styles.content}>
          <Avatar
            icon={{ name: MESSAG_ICONS[messageColour], type: 'font-awesome' }}
            rounded
            containerStyle={styles.avatar}
            avatarStyle={{ backgroundColor: MESSAG_COLOURS[messageColour] }}
            size="large" />
          <Text style={styles.titleText}>
            {canBuildMessage}
          </Text>
        </View>
        <View style={styles.contentBottom}>
          <Card containerStyle={styles.card} title={addressData.fullAddress}>
            <Text style={styles.textBold}>Lot: <Text style={styles.textNormal}>{addressData.lot}</Text></Text>
            <Text style={styles.textBold}>{`Council: ${addressData.landingZone.council}`}</Text>
            <Text style={styles.textBold}>{`Landing zone: ${addressData.landingZone.code}`}</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/map.png')}
                resizeMode='cover'
                style={styles.image}
              />
            </View>
          </Card>
          <Button
            title="Back"
            onPress={() => handlePressBack()}
            buttonStyle={styles.buttonBack}
            titleStyle={styles.buttonBackTitle}
            containerStyle={styles.buttonBackCont}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AddressResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
  },
  contentBottom: {
    flex: 3,
    marginTop: 20,
  },
  card: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#ffa000',
  },
  titleText: {
    marginLeft: 13,
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonBack: {
    marginTop: 'auto',
    padding: 5,
    height: 70,
    backgroundColor: '#ffa000',
  },
  buttonBackTitle: {
    fontSize: 22,
  },
  buttonBackCont: {
    marginTop: 'auto',
    padding: 5,
  },
  textBold: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  textNormal: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
  },
  imageContainer: {
  },
  image: {
    height: 150,
  }
});
