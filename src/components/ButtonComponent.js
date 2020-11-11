import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressed} style={props.btnStyle}>
      <Text style={props.textStyle}>{props.btnText}</Text>
      {props.children}
    </TouchableOpacity>
  );
};

export {ButtonComponent};
