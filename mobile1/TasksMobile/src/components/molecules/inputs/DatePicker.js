import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import {StyledText} from '../../styledComponents';

const FormDatePickerNative = ({errors, setFieldValue, touched, values, name, fieldName, width = '85%'}) => {
  const [show, setShow] = useState(false);

  const anyErrors = touched[fieldName] && errors[fieldName];

  return (
    <View style={{width}}>
      <StyledText color={anyErrors ? colors.PRIMARY_RED : colors.GRAY_MEDIUM_2} fontSize={mixins.scaleFont(15)}>
        {name}
      </StyledText>
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={{...styles.textField, ...(anyErrors ? styles.errorField : {})}}>
        {show && (
          <DateTimePicker
            mode="date"
            display="default"
            onChange={(e, date) => {
              setShow(false);
              setFieldValue('dueDate', date);
            }}
            is24Hour={true}
            value={values[fieldName] ? new Date(values[fieldName]) : new Date()}
            minimumDate={new Date()}
            locale={'en'}
          />
        )}
        <StyledText color={values[fieldName] ? colors.BLACK : colors.GRAY_MEDIUM_2} fontSize={mixins.scaleFont(20)}>
          {values[fieldName] ? format(new Date(values[fieldName]), 'yyyy/MM/dd') : 'YYYY/MM/DD'}
        </StyledText>
      </TouchableOpacity>
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
  textField: {
    backgroundColor: colors.GRAY_LIGHT_1,
    borderRadius: 5,
    ...mixins.boxShadow(),
    height: mixins.scaleSize(45),
    justifyContent: 'center',
    marginTop: mixins.scaleSize(10),
    ...mixins.padding(0, 10, 0, 10),
  },
});

export default FormDatePickerNative;
