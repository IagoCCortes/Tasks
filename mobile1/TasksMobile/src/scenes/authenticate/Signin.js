import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {GRAY_DARK} from 'styles/colors';
import {Formik} from 'formik';
import * as Yup from 'yup';
import SquarePasswordField from '../../components/molecules/SquarePasswordField';
import SquareTextField from '../../components/molecules/SquareTextField';
import SquareButtonCenter from '../../components/atoms/buttons/SquareButtonCenter';
import {PRIMARY_PURPLE} from '../../styles/colors';
import {scaleSize} from '../../styles/mixins';
import {FormContainer, LogoContainer, MiniLogo} from './Styles';

export default ({signin, action}) => {
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
        <FormContainer>
          <LogoContainer>
            <MiniLogo source={require('assets/images/logoPURPLE.png')} />
          </LogoContainer>
          <SquareTextField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="E-mail"
            fieldName="email"
          />
          <View style={styles.space} />
          <SquarePasswordField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Password"
            fieldName="password"
          />
          {/* <Text style={styles.fadedText} onPress={() => console.log('to do')}>
            Forgot your password?
          </Text> */}
          <View style={styles.space} />
          <SquareButtonCenter text={'Sign in'} callback={handleSubmit} bgColor={PRIMARY_PURPLE} />
        </FormContainer>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  space: {
    height: scaleSize(20),
  },
});
