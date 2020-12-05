import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import {Picker} from '@react-native-picker/picker';
import {StyledText} from '../../styledComponents';

export default ({errors, setFieldValue, touched, values, name, fieldName, width = '85%'}) => {
  const [selectedValue, setSelectedValue] = useState();

  const anyErrors = touched[fieldName] && errors[fieldName];

  return (
    <View style={{width}}>
      <StyledText color={anyErrors ? colors.PRIMARY_RED : colors.GRAY_MEDIUM_2} fontSize={mixins.scaleFont(15)}>
        {name}
      </StyledText>
      <View style={{...styles.picker, ...(anyErrors ? styles.errorField : {})}}>
        <Picker
          note
          mode="dropdown"
          selectedValue={selectedValue}
          onValueChange={(value) => {
            setSelectedValue(value);
            setFieldValue('frequency', value);
          }}>
          {values.map((v) => (
            <Picker.Item label={v.name.charAt(0).toUpperCase() + v.name.slice(1)} value={v._id} key={v._id} />
          ))}
        </Picker>
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
    borderColor: colors.PRIMARY_RED,
  },
  picker: {
    backgroundColor: colors.GRAY_LIGHT_1,
    borderRadius: 5,
    ...mixins.boxShadow(),
    fontSize: mixins.scaleFont(20),
    marginTop: mixins.scaleSize(10),
    width: '100%',
  },
});
