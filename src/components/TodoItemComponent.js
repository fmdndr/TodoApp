import React from 'react';
import {View, Text, Image} from 'react-native';
// Moment
import moment from 'moment';
//Style
import styles from '../assets/style';
import {ButtonComponent} from './ButtonComponent';

const TodoItemComponent = (props) => {
  let days = moment(props.todo.createdDate);

  return (
    <View style={styles.components.todoListItem.container}>
      <View style={styles.components.todoListItem.row}>
        <Text style={styles.components.todoListItem.text}>
          {props.todo.description}
        </Text>
        <View style={styles.components.todoListItem.timeDeclaration}>
          <Text style={styles.components.todoListItem.text}>
            {days.diff(moment(), 'days') + 1}
            <Text> days left</Text>
          </Text>

          {props.todo.isDone ? (
            <Image
              source={require('../assets/icons/double-tick-green-100.png')}
              style={{width: 30, height: 30}}
            />
          ) : (
            <ButtonComponent
              btnText="is done ?"
              textStyle={styles.components.todoListItem.text}
              onPressed={props.updateTodo}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export {TodoItemComponent};
