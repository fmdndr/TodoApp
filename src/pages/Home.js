import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
//styles
import styles from '../assets/style';

const Home = (props) => {
  return (
    <SafeAreaView style={styles.pages.home.safeAreaView}>
      <View style={{flex: 1}}>
        <LottieView
          source={require('../assets/animations/slow-system.json')}
          autoPlay
        />
      </View>
      <View style={styles.pages.home.bottom}>
        <Text style={styles.pages.home.bottomText}>
          When do you make everything with a plan {'\n\n'} becomes perfect
        </Text>
        <Text
          onPress={() => props.navigation.navigate('Login')}
          style={styles.pages.home.bottomText}>
          Login
        </Text>
      </View>
    </SafeAreaView>
  );
};

export {Home};
