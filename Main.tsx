import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'native-base';

import Login from './screens/auth/Login';
import SignUp from './screens/auth/SignUp';
import OtpScreen from './screens/auth/OtpScreen';
import UserCreation from './screens/auth/UserCreation';
import CreatePassword from './screens/auth/CreatePassword';
import IntroScreen from './screens/main/IntroScreen';
const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    background: '#ffffff',
  },
};
type Props = {};

const Main = () => {
  return (
    // @ts-ignore
    <NavigationContainer theme={MyTheme}>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Stack.Screen
          options={{
            title: '',
          }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                ml={-3}
                as={MaterialIcons}
                size={35}
                color={'black'}
                name="keyboard-arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            title: '',
          })}
          name="signUp"
          component={SignUp}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                ml={-3}
                as={MaterialIcons}
                size={35}
                color={'black'}
                name="keyboard-arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            title: '',
          })}
          name="otp"
          component={OtpScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                ml={-3}
                as={MaterialIcons}
                size={35}
                color={'black'}
                name="keyboard-arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            title: '',
          })}
          name="user"
          component={UserCreation}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                ml={-3}
                as={MaterialIcons}
                size={35}
                color={'black'}
                name="keyboard-arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            title: '',
          })}
          name="createPassword"
          component={CreatePassword}
        />
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                ml={-3}
                as={MaterialIcons}
                size={35}
                color={'black'}
                name="keyboard-arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
            title: '',
          })}
          name="intro"
          component={IntroScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
