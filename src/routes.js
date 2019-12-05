import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import Cards from './pages/Cartas';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cards,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#185585',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
