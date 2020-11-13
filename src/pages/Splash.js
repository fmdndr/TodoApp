import React, {useEffect, useContext} from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import Context from '../context/store';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {AUTH_URL} from '../Constatns';

const Splash = (props) => {
  const {state, dispatch} = useContext(Context);
  useEffect(() => {
    SplashScreen.hide();

    AsyncStorage.getItem('@USERNAME') !== null
      ? authUser()
      : props.navigation.navigate('Home');
  }, []);

  const authUser = async () => {
    try {
      const username = await AsyncStorage.getItem('@USERNAME');
      const password = await AsyncStorage.getItem('@PASSWORD');
      let resp = await axios.post(AUTH_URL + 'signin', {
        username: username,
        password: password,
      });
      console.log(resp.data);
      if (resp !== null) {
        dispatch({type: 'USER_LOG', userLog: resp.data});
        props.navigation.navigate('DashboardNavigation');
      } else {
        props.navigation.navigate('Login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <ActivityIndicator />
      </View>
    </SafeAreaView>
  );
};

export {Splash};
