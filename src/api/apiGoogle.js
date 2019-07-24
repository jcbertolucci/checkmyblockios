import { GOOGLE_API_KEY } from '../../secrets';

export async function getAddressFromCoordinates(latitude, longitude) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
  
  return fetch(url)
  .then(response => response.json())
  .then(responseJson => {
    return responseJson.results.find(curr => !!curr['formatted_address'])['formatted_address'] || '';
  })
  .catch(error => error);
}