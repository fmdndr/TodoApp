import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Context from '../context/store';
import axios from 'axios';
//Date
import DateTimePicker from '@react-native-community/datetimepicker';
//Components
import {
  ButtonComponent,
  InputComponent,
  MunuIconComponent,
} from '../components';
//Style
import styles from '../assets/style';
//Constant api url
import {TODO_URL} from '../Constatns';

const Add = (props) => {
  const {state, dispatch} = useContext(Context);
  const [date, setDate] = useState(new Date().getDate());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState('');

  const onChange = (event, selectedDate) => {
    //  const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(selectedDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  //
  const getDescription = (text) => {
    setDescription(text);
  };
  // Todo Add
  const addTodo = async () => {
    let resp = await axios.post(
      `${TODO_URL}add/${state.userLog.username}/todo`,
      {
        description: description,
        isDone: false,
        createdDate: date,
        updatedDate: null,
      },
      {headers: {Authorization: `Bearer ${state.userLog.accessToken}`}},
    );
    props.navigation.navigate('Dashboard', {load: resp.data});
  };

  return (
    <SafeAreaView style={styles.pages.add.safeAreaView}>
      <MunuIconComponent menuPressed={() => props.navigation.openDrawer()} />
      <View style={styles.pages.add.container}>
        <View style={{width: Dimensions.get('window').width / 1.3}}>
          <View>
            <InputComponent
              placeholder="Description"
              inputStyle={styles.pages.add.inputs}
              textChanged={getDescription}
              multi={true}
              lineNumber={10}
              textAlign="top"
            />
            <View style={styles.pages.add.timeDoneContainer}>
              <ButtonComponent onPressed={showDatepicker}>
                <Image
                  source={require('../assets/icons/calendar-96.png')}
                  style={{width: 40, height: 40}}
                />
              </ButtonComponent>
              <Text style={{color: 'white'}}>
                {date.toString().slice(0, 16)}
              </Text>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                //date={date}
                minimumDate={new Date()}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
          <View style={styles.pages.add.addTodoButton}>
            <TouchableOpacity onPress={addTodo}>
              <Image
                source={require('../assets/icons/plus128.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export {Add};
