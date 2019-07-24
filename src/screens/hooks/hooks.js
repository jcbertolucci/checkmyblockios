import React, { useEffect } from 'react';

export function useGetAddressFromParams(params, setAddressData) {
  useEffect(() => {
    setAddressData(params);
  }, [params]);
}

export function useSetIconColour(addressData, setMessageColour, setCanBuildMessage) {
  useEffect(() => {
    if(addressData) {
      if (addressData.applicationType === 0 && addressData.spatial.applicationType === 0){
        setMessageColour(0) //ok
        setCanBuildMessage('You can build with approval type: CDC');
      }
      if (addressData.applicationType === 1 || addressData.spatial.applicationType === 1){
        setMessageColour(1) //warning
        setCanBuildMessage('You can build with approval type: DA');
      }
      if (addressData.applicationType === -1 || addressData.spatial.applicationType === -1){
        setMessageColour(2) //error
        setCanBuildMessage('Unfortunately you cannot build in this address.');
      }
    }
  }, [addressData]);
}

export function useNavigateAfterApiResponse(resconRules, navigation) {
  useEffect(() => {
    if(resconRules) {
      const { navigate } = navigation;
      navigate('AddressResultScreen', {...resconRules} );
    }
  }, [resconRules]);
}