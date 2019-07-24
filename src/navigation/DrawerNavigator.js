import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import PlanningScreen from '../screens/PlanningScreen';
import AddressResultScreen from '../screens/AddressResultScreen';
import CustomDrawer from './CustomDrawer';

const WIDTH =  Dimensions.get('window').width;
const DrawerConfig = {
  drawerWidth: WIDTH*0.83,
  contentComponent: CustomDrawer,
};
const DrawerNavigator = createDrawerNavigator(
  {
    'Planning Rules': {
      screen: PlanningScreen,
    },
    'AddressResultScreen': {
      screen: AddressResultScreen,
    },
    Home: {
      screen: HomeScreen,
    },
  },
  DrawerConfig
)

export default createAppContainer(DrawerNavigator);