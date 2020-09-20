import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MainButton from 'components/atoms/MainButton';
import {GRAY_DARK} from 'styles/colors';
import {margin} from 'styles/mixins';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormTextField from 'components/molecules/FormTextField';
import FormPassword from 'components/molecules/FormPassword';

export default ({signin, action}: {signin: Function; action: Function}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please! e-mail?').email('That is not an e-mail'),
    password: Yup.string().required('What about the password?'),
  });

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => action(signin, values)}
      validationSchema={validationSchema}>
      {({errors, handleChange, handleBlur, handleSubmit, touched, values}) => (
        <>
          <FormTextField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="E-mail"
            fieldName="email"
          />
          <FormPassword
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Password"
            fieldName="password"
          />
          <Text style={styles.fadedText} onPress={() => console.log('to do')}>
            Forgot your password?
          </Text>
          <MainButton text={'Sign in'} callback={handleSubmit} margin={() => margin(15, 0, 15, 0)} />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  fadedText: {
    alignSelf: 'flex-end',
    color: GRAY_DARK,
    marginTop: 10,
  },
});
