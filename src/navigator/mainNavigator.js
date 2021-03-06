import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial48851Navigator from '../features/Tutorial48851/navigator';
import Tutorial48850Navigator from '../features/Tutorial48850/navigator';
import Tutorial48849Navigator from '../features/Tutorial48849/navigator';
import Tutorial48848Navigator from '../features/Tutorial48848/navigator';
import Tutorial48847Navigator from '../features/Tutorial48847/navigator';
import Tutorial48846Navigator from '../features/Tutorial48846/navigator';
import EmailAuth48839Navigator from '../features/EmailAuth48839/navigator';
import Tutorial48838Navigator from '../features/Tutorial48838/navigator';
import Tutorial48837Navigator from '../features/Tutorial48837/navigator';
import Tutorial48836Navigator from '../features/Tutorial48836/navigator';
import Tutorial48303Navigator from '../features/Tutorial48303/navigator';
import Tutorial48302Navigator from '../features/Tutorial48302/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Tutorial48851: { screen: Tutorial48851Navigator },
Tutorial48850: { screen: Tutorial48850Navigator },
Tutorial48849: { screen: Tutorial48849Navigator },
Tutorial48848: { screen: Tutorial48848Navigator },
Tutorial48847: { screen: Tutorial48847Navigator },
Tutorial48846: { screen: Tutorial48846Navigator },
EmailAuth48839: { screen: EmailAuth48839Navigator },
Tutorial48838: { screen: Tutorial48838Navigator },
Tutorial48837: { screen: Tutorial48837Navigator },
Tutorial48836: { screen: Tutorial48836Navigator },
Tutorial48303: { screen: Tutorial48303Navigator },
Tutorial48302: { screen: Tutorial48302Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
