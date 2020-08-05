import React from 'react';
import {View, StyleSheet} from 'react-native';
import FormTextField from 'components/molecules/FormTextField';
import FormTextArea from 'components/molecules/FormTextArea';
import FormPicker from 'components/molecules/FormPicker';
import FormDatePickerNative from 'components/molecules/FormDatePickerNative';

const Fields = ({errors, handleChange, handleBlur, touched, values, setFieldValue, selectedTypes, frequencies}: any) => (
  <View style={styles.fields}>
    <FormTextField
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      touched={touched}
      values={values}
      name="Name"
      fieldName="name"
    />
    <FormTextArea
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      touched={touched}
      values={values}
      name="Description"
      fieldName="description"
      numberOfLines={3}
    />
    {!selectedTypes.includes('routine') && (
      // <FormDatePicker
      //   errors={errors}
      //   handleBlur={handleBlur}
      //   handleChange={handleChange}
      //   touched={touched}
      //   values={values}
      //   name="Due date"
      //   fieldName="dueDate"
      //   setFieldValue={setFieldValue}
      // />
      <FormDatePickerNative
        errors={errors}
        touched={touched}
        values={values}
        name="Due date"
        fieldName="dueDate"
        setFieldValue={setFieldValue}
      />
    )}
    {selectedTypes.includes('quantity') && (
      <FormTextField
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        touched={touched}
        values={values}
        name="Quantity"
        fieldName="expectedValue"
      />
    )}
    {selectedTypes.includes('routine') && (
      <FormPicker
        errors={errors}
        touched={touched}
        values={frequencies}
        name="Frequency"
        fieldName="frequency"
        setFieldValue={setFieldValue}
      />
    )}
    {selectedTypes.includes('timed') && (
      <FormTextField
        errors={errors}
        handleBlur={handleBlur}
        handleChange={handleChange}
        touched={touched}
        values={values}
        name="Time (minutes)"
        fieldName="expectedTime"
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  fields: {
    width: '85%',
  },
});

export default Fields;
