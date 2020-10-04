import React from 'react';
import {StyleSheet} from 'react-native';
import {GRAY_MEDIUM_2, GRAY_LIGHT_2, BLACK} from 'styles/colors';
import {TextInput} from 'react-native-gesture-handler';
import {scaleFont, scaleSize} from 'styles/mixins';
import styled from 'styled-components/native';

export default ({errors, handleChange, handleBlur, touched, values, name, fieldName}) => {
  const blur = () => {
    handleBlur(fieldName);
  };

  const anyErrors = touched[fieldName] && errors[fieldName];

  return (
    <InputField>
      <FieldHeader style={anyErrors ? styles.errorText : null}>{name}</FieldHeader>
      <Input
        autoCapitalize="none"
        style={anyErrors ? styles.errorField : null}
        onChangeText={handleChange(fieldName)}
        onBlur={blur}
        value={values[fieldName]}
        maxLength={40}
      />
      {anyErrors && <Error>{errors[fieldName]}</Error>}
    </InputField>
  );
};

const styles = StyleSheet.create({
  errorField: {
    borderWidth: 1,
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
  },
});

const Error = styled.Text`
  font-size: ${scaleFont(11)};
  color: red;
`;

const FieldHeader = styled.Text`
  color: ${GRAY_MEDIUM_2};
  font-size: ${scaleFont(15)};
  margin-bottom: ${scaleSize(10)};
`;

const InputField = styled.View`
  width: ${scaleSize(300)};
`;

const Input = styled(TextInput)`
  background-color: ${GRAY_LIGHT_2};
  border-radius: 5;
  color: ${BLACK};
  font-size: ${scaleFont(20)};
`;
