import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import AtenderScreen from '../screens/AtenderScreen';
import AdminScreen from '../screens/AdminScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Criar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-create" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Encaminhar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-bus" />,
        }}
      />
      <BottomTab.Screen
        name="Atender"
        component={AtenderScreen}
        options={{
          title: 'Atender',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-build" />,
        }}
      />
      <BottomTab.Screen
        name="Administrar"
        component={AdminScreen}
        options={{
          title: 'Administrar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Solicitar um novo serviço';
    case 'Links':
      return 'Encaminhar um serviço';
    case 'Atender':
        return 'Atender serviços';
    case 'Administrar':
        return 'Administrar aplicativo';
  }
}
