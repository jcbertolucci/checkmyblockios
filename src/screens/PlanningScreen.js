import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

import FixedHeader from '../components/FixedHeader';
import GoogleInput from '../components/GoogleInput';

import * as apiGoogle from '../api/apiGoogle';
import * as api from '../api/apiPlanningRules';
import * as hooks from './hooks/hooks';

function PlanningScreen({ navigation }) {
  const [googleAddressResp, setGoogleAddressResp] = useState('');
  const [resconRules, setResconRules] = useState(null);
  const [address, setAddress] = useState('');
  const [isLocatLoading, setLocatLoading] = useState(false);
  const [isNextLoading, setNextLoading] = useState(false);

  hooks.useNavigateAfterApiResponse(resconRules, navigation)

  const getLocationAsync = async () => {
    /* const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') return; */

    setLocatLoading(true);
    try {
      /* const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords; */
      const address = await apiGoogle.getAddressFromCoordinates(latitude, longitude);

      setAddress(address);
    } catch (error) {
      console.log(error);
    }
    setLocatLoading(false);
  };

  const getPlanningRulesAsync = async () => {
    setNextLoading(true);
    try {
      const { label, value } = await api.getAddress(address);
      const resconResp = await api.getPlanningRules(label, value, googleAddressResp);
      const { landingZone, spatial, lot, applicationType } = resconResp;     

      setResconRules({ applicationType, landingZone, spatial, lot, fullAddress: label });
    } catch (error) {
      console.log(error);
    }
    setNextLoading(false);
  };

  const handelPressLocation = () => {
    getLocationAsync();
  };

  const handlePressNext = () => {
    getPlanningRulesAsync();
  };

  return (
    <View style={styles.container}>
      <FixedHeader />
        <View style={styles.content}>
          <View style={styles.content}>
            <Avatar
              rounded
              title="1"
              containerStyle={styles.avatar}
              avatarStyle={styles.avatarIcon}
              size="large"/>
            <Text style={styles.titleText}>Check your address</Text>
          </View>
          <KeyboardAvoidingView style={styles.contentBottom} behavior="padding" enabled>
            <GoogleInput
              address={address}
              setGoogleAddressResp={setGoogleAddressResp}
              setAddress={setAddress}
            />
            <Button
              loading={isLocatLoading}
              onPress={() => handelPressLocation()}
              title="Get my location"
              type="clear"
              containerStyle={styles.buttonLocation}
              titleStyle={styles.textLeft}
            />
            <Button
              loading={isNextLoading}
              disabled={!address || !!isNextLoading ? true : false}
              title="Next"
              onPress={() => handlePressNext()}
              buttonStyle={styles.buttonNext}
              titleStyle={styles.buttonNextTitle}
              containerStyle={styles.buttonNextCont}
            />
          </KeyboardAvoidingView>
        </View>
    </View>
  )
}

export default PlanningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  contentBottom: {
    flex: 3,
    marginTop: 40,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#ffa000',
  },
  avatarIcon: {
    backgroundColor: '#ffa000',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonLocation: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 'auto',
  },
  buttonNext: {
    padding: 5,
    height: 70,
    backgroundColor: '#ffa000',
  },
  buttonNextLoading: {
    backgroundColor: '#ffa000',
  },
  buttonNextTitle: {
    fontSize: 22,
  },
  buttonNextCont: {
    padding: 5,
  },
  input: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 5,
    marginTop: 5,
  },
  textLeft: {
    textAlign: 'left',
    fontSize: 14,
  }
});
