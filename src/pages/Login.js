import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';
//Context
import Context from '../context/store';
//My Components
import {InputComponent, ButtonComponent} from '../components';
//Style
import styles from '../assets/style';

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
  const authenticate = () => {
    axios
      .post('http://192.168.1.37:8080/api/auth/signin', {
        username: username,
        password: password,
      })
      .then((resp) => {
        console.log(resp.data);
        dispatch({type: 'USER_LOG', userLog: resp.data});
        props.navigation.navigate('DashboardNavigation');
        //console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
