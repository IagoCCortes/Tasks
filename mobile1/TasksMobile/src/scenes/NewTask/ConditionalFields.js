import React from 'react';
import Picker from 'components/molecules/inputs/Picker';
import DatePicker from 'components/molecules/inputs/DatePicker';
import TextField from 'components/molecules/inputs/TextField';
import {WidthView} from '../../components/styledComponents';
import {View} from 'react-native';
import {scaleSize} from '../../styles/mixins';

export default ({errors, handleChange, handleBlur, touched, values, setFieldValue, selectedTypes, frequencies}) => {
  return (
    <WidthView>
      {selectedTypes.includes('routine') ? (
        <Picker
          errors={errors}
          touched={touched}
          values={frequencies}
          name="Frequency"
          fieldName="frequency"
          setFieldValue={setFieldValue}
        />
      ) : (
        <DatePicker
          errors={errors}
          touched={touched}
          values={values}
          name="Due date"
          fieldName="dueDate"
          setFieldValue={setFieldValue}
        />
      )}
      <View style={{height: scaleSize(20)}} />
      {selectedTypes.includes('quantity') && (
        <>
          <TextField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Quantity"
            fieldName="expectedValue"
          />
          <View style={{height: scaleSize(20)}} />
        </>
      )}
      {selectedTypes.includes('timed') && (
        <>
          <TextField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Time (minutes)"
            fieldName="expectedTime"
          />
          <View style={{height: scaleSize(20)}} />
        </>
      )}
    </WidthView>
  );
};
