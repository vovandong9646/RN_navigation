import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './Header';

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} title={"Setting"} />
        <View style={{ flex: 1, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is SettingScreen</Text>
        </View>
      </View>
    );
  }
}

export default SettingScreen;