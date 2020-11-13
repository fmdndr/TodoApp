import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
//Context
import Context from '../context/store';
//Components
import {
  TodoItemComponent,
  ButtonComponent,
  MunuIconComponent,
} from '../components';
//Style
import styles from '../assets/style';
// Constatn api urls
import {TODO_URL} from '../Constatns';
const Dashboard = (props) => {
  const {state, dispatch} = useContext(Context);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, [props.route.params?.load]);
  //Api call for get all todos belong to user
  const getTodos = () => {
    axios
      .get(TODO_URL + state.userLog.username + '/todos', {
        headers: {Authorization: `Bearer ${state.userLog.accessToken}`},
      })
      .then((resp) => {
        setList(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTodo = () => {
    props.navigation.navigate('Add');
  };

  const setUpdate = async (item) => {
    let resp = await axios.put(
      `${TODO_URL}update/${item.username}/${item.id}`,
      {
        id: item.id,
        isDone: true,
        username: item.username,
        description: item.description,
        updatedDate: new Date(),
        createdDate: item.createdDate,
      },
      {headers: {Authorization: `Bearer ${state.userLog.accessToken}`}},
    );
    resp.data != null ? getTodos() : null;
  };

  //Todo rendering with item card
  const rendered = ({item}) => {
    return <TodoItemComponent todo={item} updateTodo={() => setUpdate(item)} />;
  };

  return (
    <SafeAreaView style={styles.pages.dashboard.safeAreaView}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={{flex: 1}}>
          <MunuIconComponent
            menuPressed={() => props.navigation.openDrawer()}
          />

          <View style={styles.pages.dashboard.container}>
            <FlatList
              data={list}
              keyExtractor={(_, index) => index.toString()}
              renderItem={rendered}
              contentContainerStyle={{paddingBottom: 45, paddingTop: 35}}
            />
          </View>
          <View style={styles.pages.dashboard.addButtonContainer}>
            <ButtonComponent onPressed={addTodo}>
              <Image
                source={require('../assets/icons/plus128.png')}
                style={{width: 40, height: 40}}
              />
            </ButtonComponent>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export {Dashboard};
