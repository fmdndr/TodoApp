import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LottieView from 'lottie-react-native';
//Context
import Context from '../context/store';
//My Components
import {InputComponent, ButtonComponent} from '../components';
//Style
import styles from '../assets/style';
//Constatn api url
import {AUTH_URL} from '../Constatns';

const Login = (props) => {
  const {state, dispatch} = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const getUsername = (text) => {
    setUsername(text);
  };
  const getPassword = (text) => {
    setPassword(text);
  };
  // Authenticaton Function
  const authenticate = async () => {
    try {
      let resp = await axios.post(AUTH_URL + 'signin', {
        username: username,
        password: password,
      });
      await AsyncStorage.setItem('@USERNAME', username);
      await AsyncStorage.setItem('@PASSWORD', password);

      dispatch({type: 'USER_LOG', userLog: resp.data});
      props.navigation.navigate('DashboardNavigation');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.pages.login.safeAreaView}>
      <View style={{flex: 1}}>
        <LottieView
          source={require('../assets/animations/saturn-planet.json')}
          autoPlay
        />
      </View>
      <View style={styles.pages.login.container}>
        <View style={styles.pages.login.styleContainer}>
          <InputComponent
            placeholder="Username"
            textChanged={getUsername}
            inputStyle={styles.pages.login.inputs}
          />

          <InputComponent
            placeholder="Password"
            textChanged={getPassword}
            textSecure
            inputStyle={styles.pages.login.inputs}
          />
          <ButtonComponent
            onPressed={authenticate}
            btnText="Login"
            btnStyle={styles.pages.login.buttonStyle}
            textStyle={styles.pages.login.btnTextStyle}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            onPress={() => props.navigation.navigate('Signup')}
            style={{color: 'white'}}>
            Do you need an account ? Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Login};
