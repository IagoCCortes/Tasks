import React, {useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {GRAY_DARK, SUCCESS, GRAY_MEDIUM_2} from 'styles/colors';
import {Picker} from 'native-base';
import useAnimatedHeader from 'hooks/useAnimatedHeader';

const FormPicker = ({errors, setFieldValue, touched, values, name, fieldName}) => {
  const [moveHeader, setMoveHeader] = useState(false);
  const [selectedValue, setSelectedValue] = useState('daily');
  const [animate, setAnimate] = useState(undefined);
  const headerAnimation = useAnimatedHeader(animate, -35);

  return (
    <View style={styles.inputField}>
      <Animated.Text
        style={{
          ...styles.fieldHeader,
          transform: [{translateY: headerAnimation}],
          ...(moveHeader ? styles.fieldHeaderSelected : {}),
        }}>
        {name}
      </Animated.Text>
      <View style={{...styles.date, borderColor: moveHeader ? SUCCESS : GRAY_DARK}}>
        <Picker
          note
          mode="dropdown"
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(value) => {
            setSelectedValue(value);
            setFieldValue('frequency', value);
            setMoveHeader(true);
            setAnimate(true);
          }}>
          {values.map((v) => (
            <Picker.Item label={v.name.charAt(0).toUpperCase() + v.name.slice(1)} value={v._id} key={v._id} />
          ))}
        </Picker>
      </View>
      {touched[fieldName] && errors[fieldName] && <Text style={styles.error}>{errors[fieldName]}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    borderBottomWidth: 2,
    height: 40,
    marginTop: 20,
  },
  dateText: {
    color: GRAY_DARK,
    fontSize: 15,
  },
  error: {
    fontSize: 10,
    color: 'red',
  },
  fieldHeader: {
    backgroundColor: '#fff',
    color: GRAY_MEDIUM_2,
    fontSize: 15,
    left: 4.3,
    paddingBottom: 5,
    position: 'absolute',
    top: 30,
    zIndex: 10,
  },
  fieldHeaderSelected: {
    backgroundColor: 'transparent',
    color: GRAY_DARK,
    top: 45,
  },
  inputField: {},
  picker: {
    width: '100%',
  },
});

export default FormPicker;
