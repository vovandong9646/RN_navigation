import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openMenu = () => {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', height: 60 }}>
        <TouchableOpacity onPress={this.openMenu} style={{ backgroundColor: 'red', flex: 1 }}>
          <Text>click</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default Header;