import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {GRAY_DARK, SUCCESS, GRAY_MEDIUM_2} from 'styles/colors';
import {TextInput} from 'react-native-gesture-handler';

const FormPassword = ({
  errors,
  handleChange,
  handleBlur,
  touched,
  values,
  name,
  fieldName,
}: {
  errors: any;
  handleChange: any;
  handleBlur: any;
  touched: any;
  values: any;
  name: string;
  fieldName: string;
}) => {
  const [focused, setFocused] = useState(false);
  const headerAnimation = useState(new Animated.Value(0))[0];

  const animateHeader = (open = true) => {
    Animated.spring(headerAnimation, {
      toValue: open ? -20 : 0,
      useNativeDriver: true,
    }).start();
  };

  const blur = () => {
    if (values[fieldName] === '') {
      animateHeader(false);
      setFocused(false);
    }

    handleBlur(fieldName);
  };

  const focus = () => {
    if (values[fieldName] === '') {
      setFocused(true);
      animateHeader();
    }
  };

  return (
    <View style={styles.inputField}>
      <Animated.Text
        style={{
          ...styles.fieldHeader,
          transform: [{translateY: headerAnimation}],
          color: focused ? GRAY_DARK : GRAY_MEDIUM_2,
        }}>
        {name}
      </Animated.Text>
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
      {touched[fieldName] && errors[fieldName] && <Text style={styles.error}>{errors[fieldName]}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    color: 'red',
  },
  fieldHeader: {
    color: GRAY_MEDIUM_2,
    fontSize: 15,
    left: 4.3,
    position: 'absolute',
    top: 30,
  },
  inputField: {},
  textField: {
    borderColor: GRAY_DARK,
    borderBottomWidth: 2,
    color: GRAY_DARK,
    height: 40,
    marginTop: 20,
  },
  textFieldFocused: {
    borderColor: SUCCESS,
  },
});

export default FormPassword;
