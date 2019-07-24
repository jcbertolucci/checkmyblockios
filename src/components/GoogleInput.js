import React from 'react';

import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GOOGLE_API_KEY } from '../../secrets';
import * as helpers from '../helpers/helpers';

function GoogleInput({ address, setGoogleAddressResp, setAddress }) {
  const getGoogleAddress = async (placeId, fetchDetails) => {
    try {
      const googleRes = await fetchDetails(placeId);
      return helpers.formatPayload(googleRes);
    } catch (error) {
      console.log(error);
    }
    return JSON.stringify({ data: {} });
  };

  const handlePress = (el, fetchDetails, clearSearchs) => {
    const { place_id, description } = el;
    const formatedRes = getGoogleAddress(place_id, fetchDetails);
    
    clearSearchs();
    setAddress(description)
    setGoogleAddressResp(formatedRes);
  };

  return (
    <View>
      <GoogleAutoComplete apiKey={GOOGLE_API_KEY} components="country:au" debounce={300}>
        {({ inputValue, handleTextChange, locationResults, fetchDetails, clearSearchs }) => (
          <React.Fragment>
            <Input
              value={address ? address : inputValue}
              onChangeText={handleTextChange}
              onFocus={() => setAddress('')}
              label="Address"
              placeholder='Address'
              placeholderTextColor="#C8C8C8"
              inputStyle={styles.input}
            />
            <ScrollView style={styles.scrollView}>
              {locationResults.map((el, i) => (
                <TouchableOpacity
                  style={styles.button}
                  fetchDetails={fetchDetails}
                  key={String(i)}
                  onPress={() => handlePress(el, fetchDetails, clearSearchs)}
                  >
                  <Icon
                    name='map-marker'
                    size={24}
                    color='#5C5C5C'
                    style={{ marginRight: 10 }}
                  />
                  <Text style={{ alignSelf: 'center', fontSize: 14 }}>{el.description}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </React.Fragment>
        )}
      </GoogleAutoComplete>
    </View>
  )
}

export default GoogleInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 5,
    marginTop: 5,
    width: 100,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    borderBottomWidth: 0.4,
  },
  scrollView: {
    maxHeight: 200,
    marginLeft: 10,
    marginRight: 10,
  },
  disabled: {
    opacity: 0,
  },
});
