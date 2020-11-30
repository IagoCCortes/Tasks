import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as colors from 'styles/colors';
import {TextInput} from 'react-native-gesture-handler';
import * as mixins from 'styles/mixins';
import {StyledText} from '../../styledComponents';

export default ({errors, handleChange, handleBlur, touched, values, name, fieldName, width = '85%'}) => {
  const blur = () => {
    handleBlur(fieldName);
  };

  const anyErrors = touched[fieldName] && errors[fieldName];

  return (
    <View style={{width}}>
      <StyledText color={anyErrors ? colors.PRIMARY_RED : colors.GRAY_MEDIUM_2} fontSize={mixins.scaleFont(15)}>
        {name}
      </StyledText>
      <TextInput
        autoCapitalize="none"
        style={{...styles.input, ...(anyErrors ? styles.errorField : {})}}
        onChangeText={handleChange(fieldName)}
        onBlur={blur}
        value={values[fieldName]}
        maxLength={40}
      />
      {anyErrors && (
        <StyledText color={colors.PRIMARY_RED} fontSize={mixins.scaleFont(11)}>
          {errors[fieldName]}
        </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorField: {
    borderWidth: 1,
    borderColor: colors.PRIMARY_RED,
  },
  input: {
    backgroundColor: colors.GRAY_LIGHT_1,
    borderRadius: 5,
    ...mixins.boxShadow(),
    fontSize: mixins.scaleFont(20),
    marginTop: mixins.scaleSize(10),
  },
});
