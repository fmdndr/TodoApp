import React from 'react';
import {TextInput} from 'react-native';

const InputComponent = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      onChangeText={props.textChanged}
      onChange={props.change}
      secureTextEntry={props.textSecure}
      style={props.inputStyle}
      keyboardType={props.type}
      multiline={props.multi}
      numberOfLines={props.lineNumber}
      textAlignVertical={props.textAlign}
    />
  );
};

export {InputComponent};
