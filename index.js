/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import DemoStackNavigator from './Components/DemoStackNavigator';
import DrawerNavigation from './Components/DrawerNavigation';
import App from './LamLai/App';
import TabBottomNavigation from './Components/TabBottomNavigation';

AppRegistry.registerComponent(appName, () => TabBottomNavigation);
