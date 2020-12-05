import React from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import {StyledText} from '../../styledComponents';

export default ({label, value, toggleSwitch}) => {
  return (
    <View style={styles.view}>
      <StyledText style={styles.text} color={colors.GRAY_MEDIUM_2} fontSize={mixins.scaleFont(15)}>
        {label}
      </StyledText>
      <Switch
        trackColor={{false: colors.GRAY_MEDIUM_1, true: colors.SECONDARY_RED}}
        thumbColor={colors.GRAY_LIGHT_1}
        ios_backgroundColor={colors.GRAY_LIGHT_1}
        onValueChange={toggleSwitch}
        value={value}
        style={styles.switch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switch: {
    height: mixins.scaleSize(45),
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
  },
  text: {
    paddingBottom: mixins.scaleSize(10),
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
