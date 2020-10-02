import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';
import MainButton from 'components/atoms/MainButton';
import {BLACK, GRAY_MEDIUM_2, GRAY_DARK, WHITE} from 'styles/colors';
import {margin} from 'styles/mixins';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormTextField from 'components/molecules/FormTextField';
import FormPassword from 'components/molecules/FormPassword';
import FormPassword2 from '../../components/molecules/FormPassword2';
import FormTextField2 from '../../components/molecules/FormTextField2';
import SquareButtonCenter from '../../components/atoms/SquareButtonCenter';

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
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('assets/images/logo45.png')} />
          </View>
          <FormTextField2
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="E-mail"
            fieldName="email"
          />
          <View style={styles.space} />
          <FormPassword2
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
          <View style={styles.space} />
          <SquareButtonCenter text={'Sign in'} callback={handleSubmit} bgColor="rgb(149, 84, 253)" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingBottom: 30,
    paddingTop: 65,
  },
  fadedText: {
    alignSelf: 'flex-end',
    color: GRAY_DARK,
    marginTop: 10,
  },
  logo: {
    height: 100,
    position: 'absolute',
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 20,
    elevation: 5,
    height: 110,
    justifyContent: 'center',
    position: 'absolute',
    top: -75,
    width: 110,
  },
  space: {
    height: 20,
  },
});
