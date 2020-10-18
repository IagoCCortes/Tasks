import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import SquareTextField from '../../components/molecules/SquareTextField';
import SquarePasswordField from '../../components/molecules/SquarePasswordField';
import SquareButtonCenter from '../../components/atoms/buttons/SquareButtonCenter';
import {StyleSheet, View} from 'react-native';
import {scaleSize} from '../../styles/mixins';
import {FormContainer, LogoContainer, MiniLogo} from './Styles';
import {PRIMARY_GREEN} from '../../styles/colors';

export default ({signup, action}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('We need a Username.'),
    email: Yup.string().required('Please! e-mail?').email('That is not an e-mail'),
    password: Yup.string().required('What about the password?').min(8, 'Pretty sure this will be hacked...'),
    repPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'This has to be equal to the Password.')
      .required('This field is required dude -_-'),
  });

  return (
    <Formik
      initialValues={{name: '', email: '', password: '', repPassword: ''}}
      onSubmit={(values) => action(signup, values)}
      validationSchema={validationSchema}>
      {({errors, handleChange, handleBlur, handleSubmit, touched, values}) => (
        <FormContainer>
          <LogoContainer>
            {/* <MiniLogo source={require('assets/images/logoPURPLE.png')} /> */}
            <MiniLogo source={require('assets/images/logoGREEN.png')} />
          </LogoContainer>
          <SquareTextField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Username"
            fieldName="name"
          />
          <SquareTextField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="E-mail"
            fieldName="email"
          />
          <SquarePasswordField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Password"
            fieldName="password"
          />
          <SquarePasswordField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Repeat Password"
            fieldName="repPassword"
          />
          <View style={styles.space} />
          <SquareButtonCenter text={'Sign up'} callback={handleSubmit} bgColor={PRIMARY_GREEN} />
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
