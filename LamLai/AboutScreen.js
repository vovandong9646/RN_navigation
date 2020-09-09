import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './Header';

class AboutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} title={"About"} />
        <View style={{ flex: 1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }}>
          <Text>This is AboutScreen</Text>
        </View>
      </View>
    );
  }
}

export default AboutScreen;