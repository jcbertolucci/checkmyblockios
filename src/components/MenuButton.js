import { Icon } from 'react-native-elements';
import React from 'react';
import { withNavigation } from 'react-navigation';

function MenuButton({ navigation }) {
  return (
    <Icon
      name="menu"
      color="#fff"
      size={32}
      onPress={() => { navigation.toggleDrawer() }}
    />
  )
}

export default withNavigation(MenuButton);
