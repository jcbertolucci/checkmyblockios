export const formatPayload = (googleRes) => {
  const resp = {
    data: {
      addressExtra: {
        coordinates:{
          lat: googleRes.geometry.location.lat || 0,
          lon: googleRes.geometry.location.lng || 0,
        },
        streetName: googleRes.address_components.find(address => address.types.includes('route')) || '',
      },
    },
  }
  if (resp.data.addressExtra.streetName) return JSON.stringify(resp);

  return JSON.stringify({ data: {} });
}