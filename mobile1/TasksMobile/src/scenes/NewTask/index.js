import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GRAY_LIGHT_1, PRIMARY_DARK} from 'styles/colors';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {margin} from 'styles/mixins';
import MainButton from 'components/atoms/MainButton';
import TypesSelector from './TypesSelector';
import {Context as CommonDataContext} from 'services/context/CommonDataContext';
import {Context as TaskContext} from 'services/context/TaskContext';
import Fields from './Fields';

const NewTask = ({}) => {
  const {getFrequencies, getTypes, state: commonDataState} = useContext(CommonDataContext);
  const {create, state: taskState} = useContext(TaskContext);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    async function initializeDomainData() {
      if (commonDataState.frequencies === null) await getFrequencies();
      if (commonDataState.types === null) await getTypes();
    }

    initializeDomainData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToSchema = (schema, field, message) =>
    selectedTypes.includes(field) ? schema.required(message) : schema.optional();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please! name?').max(40, "Don't go beyong 50 characters, plz."),
    description: Yup.string().required('Describe the task.').max(500, "Don't go beyong 50 characters, ok?"),
    expectedValue: addToSchema(Yup.number(), 'quantity', 'Give me the number!'),
    frequency: addToSchema(Yup.string(), 'routine', 'Choose how often it should happen.'),
    expectedTime: addToSchema(Yup.number(), 'timed', "How can it be timed if you won't tell the amount of time?!"),
  });

  const createTask = async (values) => {
    await create({
      ...values,
      types: values.types.map((x) => commonDataState?.types.filter((y) => y.name === x)[0]._id),
    });
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>New task</Text>
      </View>
      <View style={styles.container}>
        <Formik
          initialValues={{
            name: '',
            description: '',
            dueDate: undefined,
            expectedValue: undefined,
            frequency: '',
            expectedTime: undefined,
          }}
          onSubmit={async (values) => createTask({...values, types: selectedTypes})}
          validationSchema={validationSchema}>
          {({errors, handleChange, handleBlur, handleSubmit, touched, values, setFieldValue}) => (
            <>
              {commonDataState?.types && (
                <TypesSelector
                  setSelectedTypes={setSelectedTypes}
                  selectedTypes={selectedTypes}
                  setFieldValue={setFieldValue}
                  values={commonDataState?.types}
                />
              )}
              <View style={styles.form}>
                <Fields
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  selectedTypes={selectedTypes}
                  frequencies={commonDataState?.frequencies}
                />
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
