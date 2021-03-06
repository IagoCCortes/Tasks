import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import * as colors from 'styles/colors';
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
      <View style={{...styles.field, ...(anyErrors ? styles.errorField : {})}}>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          onChangeText={handleChange(fieldName)}
          placeholderTextColor={colors.GRAY_MEDIUM_1}
          underlineColorAndroid="transparent"
          onBlur={blur}
          value={values[fieldName]}
        />
      </View>
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
    borderColor: 'red',
  },
  field: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    backgroundColor: colors.GRAY_LIGHT_1,
    borderRadius: 5,
    ...mixins.boxShadow(),
    justifyContent: 'flex-start',
    marginTop: mixins.scaleSize(10),
    ...mixins.padding(5, 5, 5, 5),
    width: '100%',
  },
  input: {fontSize: mixins.scaleFont(20), textAlignVertical: 'top', width: '100%'},
});
