import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Button, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import AppStatusBar from '../components/AppStatusBar';
import { ScrollView } from 'react-native-web';

import Logo from '../assets/images/logo.png'
import Lock from '../assets/icons/padlock.png'
import Mobile from '../assets/icons/mobile.png'
import RelativeLayout from '../components/RelativeLayout';
import UserInput from '../components/Userinput';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic

  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'login successful',
      position: 'top',
    });
  }

  return (
    <View style={{flex: 1, }}>
                 <AppStatusBar
          backgroundColor='#ff6347'
          barStyle="light-content"
          visibleStatusBar={false}
        />
                <ScrollView>
                    <View style={styles.mainContainer}>
                        <Image source={Logo} style={styles.logo}/>
                        <Text style={styles.title}>Name</Text>
                        <Text style={styles.subTitle}>Phone details</Text>
                        <View style={styles.space}/>
                        <RelativeLayout>
                            <UserInput
                                placeholder='Enter email'
                                maxLength={100}
                                // value={this.state.email}
                                containerStyle={{paddingLeft: 35}}
              // onChangeText={(email) => this.setState({ email })}
            />
                            <Image source={Mobile} style={styles.inputIcon}/>

                        </RelativeLayout>
                        <RelativeLayout>
                            <UserInput
                                // placeholder={Strings.enterPassword}
                                maxLength={20}
                                // value={this.state.password}
                                secureTextEntry={true}
                                containerStyle={{paddingLeft: 35}}
            // onChangeText={(password) => this.setState({password})}
            />
                            <Image source={Lock} style={styles.inputIcon}/>

                        </RelativeLayout>

                        <Button
                            title={Strings.login_text}
                            style={{marginTop: 25}}
                            // onPress={this.handleSubmit}
                            // loading={this.state.loading}
                        />
                        <TouchableOpacity style={{padding: 20, marginTop: 20}}
          // onPress={() => this.props.navigation.navigate("RegisterScreen")}
          >
                            <Text style={styles.newUser}>new UserInput</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: 20
  },
  logo: {
      height: 150,
      width: 150,
      alignSelf: 'center',
      resizeMode: 'contain'
  },
  title: {
      // fontFamily: Fonts.primaryBold,
      fontSize: 20,
      // color: Color.titleColor,
      marginTop: 50,

  },
  subTitle: {
      // fontFamily: Fonts.primaryRegular,
      fontSize: 16,
      // color: Color.grayColor,
      marginTop: 10
  },
  space: {
      height: 50
  },
  smallButton: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      // backgroundColor: Color.colorPrimary,
      borderRadius: 15,
      marginLeft: 50
  },
  newUser: {
      // color: Color.gray,
      // fontFamily: Fonts.primarySemiBold,
      alignSelf: 'center',
      fontSize: 16

  },
  inputIcon: {
      height: 18,
      width: 18,
      position: 'absolute',
      top: 14,
      left: 10,
      resizeMode:'contain'
  }

})

export default LoginScreen;
