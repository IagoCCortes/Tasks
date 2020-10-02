import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GRAY_DARK, SUCCESS, GRAY_MEDIUM_2} from 'styles/colors';
import {DatePicker} from 'native-base';

const FormDatePicker = ({errors, setFieldValue, touched, name, fieldName}) => {
  const [showHeader, setShowHeader] = useState(false);

  return (
    <View style={styles.inputField}>
      {showHeader && <Text style={styles.fieldHeader}>{name}</Text>}
      <View style={{...styles.date, borderColor: showHeader ? SUCCESS : GRAY_DARK}}>
        <DatePicker
          minimumDate={new Date()}
          locale={'en'}
          modalTransparent={false}
          animationType={'fade'}
          androidMode={'default'}
          placeHolderText="Due date"
          textStyle={styles.dateText}
          placeHolderTextStyle={{color: GRAY_MEDIUM_2}}
          onDateChange={(date) => {
            setFieldValue('dueDate', date);
            setShowHeader(true);
          }}
        />
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
});

export default FormDatePicker;
