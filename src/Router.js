import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Context Provider
import Provider from './context/Provider';
//Pages
import {Splash, Home, Login, Dashboard, Add, Signup} from './pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Router() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Login}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DashboardNavigation"
            component={DashboardNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
      <DrawerItemList {...props} />
      <View style={{flex: 1, justifyContent: 'flex-end', bottom: 15}}>
        <DrawerItem
          label="Logout"
          icon={({size}) => (
            <Image
              source={require('./assets/icons/logout-rounded-down-256.png')}
              style={{height: 30, width: 30}}
            />
          )}
          onPress={() => {
            AsyncStorage.removeItem('@USERNAME');
            AsyncStorage.removeItem('@PASSWORD');
            props.navigation.navigate('Home');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

function DashboardNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={require('./assets/icons/dashboard-layout-96-sharp.png')}
              style={{height: 30, width: 30}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Add"
        component={Add}
        options={{
          drawerIcon: ({size}) => (
            <Image
              source={require('./assets/icons/add-column-256.png')}
              style={{height: 30, width: 30}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Router;
