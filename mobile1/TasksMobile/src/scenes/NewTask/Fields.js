import React from 'react';
import FormTextField from 'components/molecules/FormTextField';
import FormPicker from 'components/molecules/FormPicker';
import DatePicker from 'components/molecules/inputs/DatePicker';
import TextField from 'components/molecules/inputs/TextField';
import {WidthView} from '../../components/styledComponents';
import TextArea from '../../components/molecules/inputs/TextArea';
import {View} from 'react-native';
import {scaleSize} from '../../styles/mixins';

const Fields = ({errors, handleChange, handleBlur, touched, values, setFieldValue, selectedTypes, frequencies}) => (
  <WidthView>
    <TextField
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      touched={touched}
      values={values}
      name="Name"
      fieldName="name"
    />
    <View style={{height: scaleSize(20)}} />
    <TextArea
      errors={errors}
      handleBlur={handleBlur}
      handleChange={handleChange}
      touched={touched}
      values={values}
      name="Description"
      fieldName="description"
    />
    {!selectedTypes.includes('routine') && (
      <DatePicker
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
  </WidthView>
);

export default Fields;
