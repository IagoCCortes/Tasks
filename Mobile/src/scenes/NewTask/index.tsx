import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GRAY_LIGHT_1, PRIMARY_DARK} from 'styles/colors';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {margin} from 'styles/mixins';
import MainButton from 'components/atoms/MainButton';
import FormTextField from 'components/molecules/FormTextField';
import FormTextArea from 'components/molecules/FormTextArea';
import TypesSelector from './TypesSelector';
import FormPicker from 'components/molecules/FormPicker';
import FormDatePickerNative from 'components/molecules/FormDatePickerNative';

const NewTask = ({}) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const addToSchema = (schema: any, field: string, message: string) =>
    selectedTypes.includes(field) ? schema.required(message) : schema.optional();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please! name?').max(40, "Don't go beyong 50 characters, plz."),
    description: Yup.string().required('Describe the task.').max(500, "Don't go beyong 50 characters, ok?"),
    quantity: addToSchema(Yup.number(), 'quantity', 'Give me the number!'),
    frequency: addToSchema(Yup.string(), 'routine', 'Choose how often it should happen.'),
    timed: addToSchema(Yup.number(), 'timed', "How can it be timed if you won't tell the amount of time?!"),
  });

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>New task</Text>
      </View>
      <View style={styles.container}>
        <Formik
          initialValues={{name: '', description: '', types: '', dueDate: '', quantity: '', frequency: '', timed: ''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}>
          {({errors, handleChange, handleBlur, handleSubmit, touched, values, setFieldValue}) => (
            <>
              <TypesSelector
                setSelectedTypes={setSelectedTypes}
                selectedTypes={selectedTypes}
                setFieldValue={setFieldValue}
              />
              <View style={styles.form}>
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
                      fieldName="quantity"
                    />
                  )}
                  {selectedTypes.includes('routine') && (
                    <FormPicker
                      errors={errors}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      touched={touched}
                      values={values}
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
                      fieldName="timed"
                    />
                  )}
                </View>
                {/* <Text>{JSON.stringify(errors)}</Text>
                <Text>{JSON.stringify(touched)}</Text> */}
                <MainButton
                  text={'Create'}
                  // disabled={!isValid}
                  callback={handleSubmit}
                  margin={() => margin(15, 0, 15, 0)}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
  },
  fields: {
    width: '85%',
  },
  form: {
    alignItems: 'center',
    backgroundColor: GRAY_LIGHT_1,
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: 70,
  },
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: PRIMARY_DARK,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    color: GRAY_LIGHT_1,
    fontSize: 23,
  },
});

export default NewTask;
