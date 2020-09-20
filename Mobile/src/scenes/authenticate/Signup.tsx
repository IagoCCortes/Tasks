import React from 'react';
import MainButton from 'components/atoms/MainButton';
import {margin} from 'styles/mixins';
import FormPassword from 'components/molecules/FormPassword';
import FormTextField from 'components/molecules/FormTextField';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default ({signup, action}: {signup: Function; action: Function}) => {
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
        <>
          <FormTextField
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Username"
            fieldName="name"
          />
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
          <FormPassword
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched}
            values={values}
            name="Repeat Password"
            fieldName="repPassword"
          />
          <MainButton text={'Sign up'} callback={handleSubmit} margin={() => margin(15, 0, 15, 0)} />
        </>
      )}
    </Formik>
  );
};
