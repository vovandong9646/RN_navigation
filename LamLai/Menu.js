import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'lightblue', height: 100, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Menu</Text>
        </View>
        <DrawerContentScrollView >
          <DrawerItemList {...this.props} />
        </DrawerContentScrollView>
      </ScrollView>
    );
  }
}

export default Menu;