import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './Header';
import TabBottomNavigation from './../Components/TabBottomNavigation';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} title={"Home"} />
        <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is HomeScreen</Text>
        </View>
        <TabBottomNavigation />
      </View>
    );
  }
}

export default HomeScreen;