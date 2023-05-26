import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Toast from 'react-native-toast-message';
import LoginScreen from './src/screens/LoginScreen';



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <Toast style={styles.toast}/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </>
    // <Text>Login</Text>
  );
};
const styles = StyleSheet.create({
  toast: {
    zIndex: 9999,
  },
});

export default App;
