import React from 'react';
import {scaleSize} from 'styles/mixins';
import {WHITE} from 'styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default ({types}) => (
  <Icon
    name={
      types.includes('physical')
        ? 'bicycle'
        : types.includes('problem')
        ? 'warning'
        : types.includes('project')
        ? 'construct'
        : types.includes('relax')
        ? 'game-controller'
        : 'shapes'
    }
    size={scaleSize(75)}
    color={WHITE}
  />
);
