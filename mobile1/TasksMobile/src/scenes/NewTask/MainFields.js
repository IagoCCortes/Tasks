import React from 'react';
import TextField from 'components/molecules/inputs/TextField';
import {WidthView} from '../../components/styledComponents';
import TextArea from '../../components/molecules/inputs/TextArea';
import {View} from 'react-native';
import {scaleSize} from '../../styles/mixins';

export default ({errors, handleChange, handleBlur, touched, values}) => (
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
    <View style={{height: scaleSize(20)}} />
  </WidthView>
);
