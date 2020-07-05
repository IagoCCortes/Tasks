import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GRAY_DARK, SUCCESS, GRAY_MEDIUM_2} from 'styles/colors';
// import {DatePicker} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const FormDatePickerNative = ({
  errors,
  setFieldValue,
  touched,
  values,
  name,
  fieldName,
}: {
  errors: any;
  setFieldValue: any;
  touched: any;
  values: any;
  name: string;
  fieldName: string;
}) => {
  const [showHeader, setShowHeader] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <View style={styles.inputField}>
      {showHeader && <Text style={styles.fieldHeader}>{name}</Text>}
      <View style={{...styles.date, borderColor: showHeader ? SUCCESS : GRAY_DARK}}>
        {show && (
          <DateTimePicker
            mode="date"
            display="default"
            onChange={(e, date) => {
              setShow(false);
              setFieldValue('dueDate', date);
              setShowHeader(true);
            }}
            is24Hour={true}
            value={values[fieldName] ? new Date(values[fieldName]) : new Date()}
            minimumDate={new Date()}
            locale={'en'}
          />
        )}
        <Text style={{...styles.fieldHeader, color: showHeader ? GRAY_DARK : GRAY_MEDIUM_2}}>
          {showHeader ? moment(values[fieldName]).format('DD/MM/YYYY') : 'Due date'}
        </Text>
        <TouchableOpacity style={{height: '100%'}} onPress={() => setShow(true)}></TouchableOpacity>
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
    color: GRAY_DARK,
    fontSize: 15,
    left: 4.3,
    position: 'absolute',
    top: 30,
    transform: [{translateY: -20}],
  },
  inputField: {},
  textField: {
    borderColor: GRAY_DARK,
    borderBottomWidth: 2,
    color: GRAY_DARK,
    height: 40,
    marginTop: 20,
    zIndex: 100,
  },
  textFieldFocused: {
    borderColor: SUCCESS,
  },
});

export default FormDatePickerNative;
