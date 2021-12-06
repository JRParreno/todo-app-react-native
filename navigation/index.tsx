/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { AddToDoScreen, HomeScreen } from '../screens/Home';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={HomeNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const StackNavigator = createNativeStackNavigator<RootTabParamList>();

function HomeNavigator() {
  const colorScheme = useColorScheme();

  return (
    <StackNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#6689E4' },
        contentStyle: { backgroundColor: '#FFFFFF' },
        headerShadowVisible: true,
        statusBarStyle: 'dark',
      }}
    >
      <StackNavigator.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'To-Do App'
        }}
      />
      <StackNavigator.Screen
        name='AddTodo'
        component={AddToDoScreen}
        options={{
          title: 'Add To-Do'
        }}
      />
    </StackNavigator.Navigator>
  );
}

