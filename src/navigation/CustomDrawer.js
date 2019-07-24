import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Avatar, Text, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomDrawer({ navigation }) {
  const { navigate, closeDrawer } = navigation;

  return(
    <View style={styles.menu}>
      <View style={styles.menuTop}>
        <View style={styles.menuTopAvatar}>
          <Avatar
            rounded
            source={{ uri: 'https://i.pravatar.cc/200?img=6' }}
            size="medium"
          />
          <Text style={styles.textUser}>Tiago Silveira</Text>
        </View>
        <View style={styles.menuTopButtons}>
          <Button
            type="clear"
            title="Change password"
            titleStyle={styles.textButton}
            onPress={() => closeDrawer()}
          />
          <Button
            rounded
            type="outline"
            title="Logout"
            titleStyle={styles.textButton}
            containerStyle={{ marginRight: 10, minWidth: 100, borderColor: 'black' }}
            buttonStyle={{ borderColor: 'black' }}
            onPress={() => closeDrawer()}
          />
        </View>
      </View>
      <View style={styles.menuContent}>
      <Button
        icon={
          <Icon
            name="calendar"
            size={24}
            color="black"
            style={styles.icon}
          />
        }
        style={styles.button}
        type="clear"
        title="Planning Rules"
        titleStyle={styles.textButton}
        onPress={() => navigate('Planning Rules')}
      />
      <Button
        icon={
          <Icon
            name="bar-chart-o"
            size={24}
            color="black"
            style={styles.icon}
          />
        }
        style={styles.button}
        type="clear"
        title="Sales"
        titleStyle={styles.textButton}
        onPress={() => navigate('Home')}
      />
      </View>
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
  menuTop: {
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingVertical: 15,
    paddingLeft: 15,
    marginBottom: 10,
  },
  menuTopAvatar: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  menuTopButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  avatarTitle: {
    fontWeight: '700',
  },
  textUser: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 20,
    //fontWeight: '500',
  },
  textButton: {
    color: 'black',
    fontSize: 15,
  },
  button: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 15,
  },
  icon: {
    paddingRight: 5,
    minWidth: 50,
  }
});