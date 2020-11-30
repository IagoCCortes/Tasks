import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from '../../../styles/colors';
import {boxShadow, scaleFont, scaleSize} from '../../../styles/mixins';
import {navigate} from 'RootNavigation';

export default ({icon = 'add', goesTo, bottom = 25, left, right = 25, top}) => {
  return (
    <TouchableOpacity style={{...styles.styledView, bottom, left, right, top}} onPress={() => navigate(goesTo)}>
      <Icon size={scaleFont(35)} color={colors.GRAY_MEDIUM_3} name={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  styledView: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 50,
    ...boxShadow(),
    height: scaleSize(60),
    justifyContent: 'center',
    position: 'absolute',
    width: scaleSize(60),
  },
});
