import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {GRAY_DARK, SUCCESS, GRAY_LIGHT_3, GRAY_MEDIUM_2, BLACK} from 'styles/colors';
import {scaleSize} from 'styles/mixins';
import {TextInput} from 'react-native-gesture-handler';
import useAnimatedHeader from 'hooks/useAnimatedHeader';

const FormPassword2 = ({errors, handleChange, handleBlur, touched, values, name, fieldName}) => {
  const [focused, setFocused] = useState(false);
  const [animate, setAnimate] = useState(undefined);
  const headerAnimation = useAnimatedHeader(animate);

  const blur = () => {
    if (values[fieldName] === '') {
      setAnimate(false);
      setFocused(false);
    }

    handleBlur(fieldName);
  };

  const focus = () => {
    if (values[fieldName] === '') {
      setFocused(true);
      setAnimate(true);
    }
  };

  return (
    <View style={styles.inputField}>
      <Text style={styles.fieldHeader}>{name}</Text>
      <TextInput
        style={{...styles.textField, ...(focused ? styles.textFieldFocused : '')}}
        onChangeText={handleChange(fieldName)}
        onBlur={blur}
        value={values[fieldName]}
        onFocus={focus}
        maxLength={40}
        secureTextEntry={true}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldHeader: {
    color: GRAY_MEDIUM_2,
    fontSize: 15,
    marginBottom: 10,
  },
  inputField: {
    width: scaleSize(300),
  },
  textField: {
    backgroundColor: GRAY_LIGHT_3,
    borderRadius: 5,
    color: BLACK,
    fontSize: 20,
  },
});

export default FormPassword2;
