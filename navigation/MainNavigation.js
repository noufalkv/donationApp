import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Components from '../screens/AllComponents/Components';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import Payment from '../screens/Payment/Payment';

const Stack = createStackNavigator();

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Comp} component={Components} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
      <Stack.Screen name={Routes.Payment} component={Payment} />
    </Stack.Navigator>
  );
};

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Register} component={Registration} />
    </Stack.Navigator>
  );
};
