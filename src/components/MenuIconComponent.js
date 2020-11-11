import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const MunuIconComponent = (props) => {
  return (
    <TouchableOpacity
      onPress={props.menuPressed}
      style={{position: 'absolute', top: 20, left: 10, zIndex: 999}}>
      <Image
        source={require('../assets/icons/menu-96-white.png')}
        style={{width: 25, height: 25}}
      />
    </TouchableOpacity>
  );
};

export {MunuIconComponent};
