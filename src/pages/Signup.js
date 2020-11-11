import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
// Components
import {InputComponent, ButtonComponent} from '../components';
// Styles
import styles from '../assets/style';
//Lottie
import LottieView from 'lottie-react-native';
import axios from 'axios';

const Signup = (props) => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUsername = (text) => {
    setUsername(text);
  };
  const getFirstName = (text) => {
    setFirstname(text);
  };
  const getLastName = (text) => {
    setLastname(text);
  };
  const getPassword = (text) => {
    setPassword(text);
  };
  const getEmail = (text) => {
    setEmail(text);
  };

  const signup = () => {
    axios
      .post('http://192.168.1.37:8080/api/auth/signup', {
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((resp) => {
        props.navigation.navigate('Login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.pages.signUp.safeAreaView}>
      <View style={styles.pages.signUp.container}>
        <View style={styles.pages.signUp.lottieContainer}>
          <LottieView
            source={require('../assets/animations/saturn-planet.json')}
            autoPlay
          />
        </View>
        <View style={styles.pages.signUp.row}>
          <InputComponent
            placeholder="Username"
            textChanged={getUsername}
            inputStyle={styles.pages.signUp.inputs}
          />
          <InputComponent
            placeholder="First name"
            textChanged={getFirstName}
            inputStyle={styles.pages.signUp.inputs}
          />
          <InputComponent
            placeholder="Last name"
            textChanged={getLastName}
            inputStyle={styles.pages.signUp.inputs}
          />
          <InputComponent
            placeholder="Email"
            textChanged={getEmail}
            inputStyle={styles.pages.signUp.inputs}
            type="email-address"
          />
          <InputComponent
            placeholder="Password"
            textChanged={getPassword}
            inputStyle={styles.pages.signUp.inputs}
            textSecure
          />
          <ButtonComponent
            onPressed={signup}
            btnText="Sing Up"
            btnStyle={styles.pages.signUp.buttonStyle}
            textStyle={styles.pages.signUp.buttonText}
          />
        </View>
        <View style={styles.pages.signUp.bottomContainer}>
          <Text
            style={styles.pages.signUp.bottomText}
            onPress={() => props.navigation.navigate('Login')}>
            Do you have already an account? Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Signup};
