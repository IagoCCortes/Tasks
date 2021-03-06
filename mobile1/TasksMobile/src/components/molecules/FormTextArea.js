import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import {GRAY_DARK, GRAY_MEDIUM_2, SUCCESS} from 'styles/colors';
import {TextInput} from 'react-native-gesture-handler';
import useAnimatedHeader from 'hooks/useAnimatedHeader';

const FormTextArea = ({errors, handleChange, handleBlur, touched, values, name, fieldName, numberOfLines}) => {
  const [focused, setFocused] = useState(false);
  const [animate, setAnimate] = useState(undefined);
  const headerAnimation = useAnimatedHeader(animate, -35);

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
      <Animated.Text
        style={{
          ...styles.fieldHeader,
          transform: [{translateY: headerAnimation}],
          ...(focused ? styles.fieldHeaderFocused : {}),
        }}>
        {name}
      </Animated.Text>
      <TextInput
        style={{...styles.textField, ...(focused ? styles.textFieldFocused : {height: 40, marginTop: 20})}}
        onChangeText={handleChange(fieldName)}
        onBlur={blur}
        value={values[fieldName]}
        maxLength={500}
        multiline={true}
        numberOfLines={focused ? numberOfLines : 1}
        onFocus={focus}
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
    top: 20,
  },
  fieldHeaderFocused: {
    color: GRAY_DARK,
    top: 45,
  },
  inputField: {},
  textField: {
    borderColor: GRAY_DARK,
    borderBottomWidth: 2,
    color: GRAY_DARK,
    marginTop: 35,
  },
  textFieldFocused: {
    borderLeftWidth: 2,
    borderColor: SUCCESS,
  },
});

export default FormTextArea;
