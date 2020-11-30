import React, {useState, useContext, useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {margin} from 'styles/mixins';
import EllipticalButton from 'components/atoms/buttons/EllipticalButton';
import TypesSelector from './TypesSelector';
import {Context as CommonDataContext} from 'services/context/CommonDataContext';
import {Context as TaskContext} from 'services/context/TaskContext';
import Fields from './Fields';
import SquareButtonCenter from '../../components/atoms/buttons/SquareButtonCenter';
import {Card, CircleContainer, Container} from '../../components/styledComponents';

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
    <Container>
      <CircleContainer start={{x: 0.5, y: 0.2}} colors={[colors.PRIMARY_RED, colors.SECONDARY_RED]} />
      <Card>
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
              {/* {commonDataState?.types && (
                <TypesSelector
                  setSelectedTypes={setSelectedTypes}
                  selectedTypes={selectedTypes}
                  setFieldValue={setFieldValue}
                  values={commonDataState?.types}
                />
              )} */}
              <>
                <View style={{height: mixins.scaleSize(30)}} />
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
                <SquareButtonCenter text={'Create'} bgColor={colors.PRIMARY_RED} callback={handleSubmit} />
                <View style={{height: mixins.scaleSize(30)}} />
              </>
            </>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
  },
  form: {
    alignItems: 'center',
    backgroundColor: colors.GRAY_LIGHT_1,
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    marginTop: mixins.scaleSize(49 + StatusBar.currentHeight),
    paddingBottom: 70,
  },
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.PRIMARY_PURPLE,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'center',
  },
  headerText: {
    alignSelf: 'center',
    color: colors.GRAY_LIGHT_1,
    fontSize: 23,
  },
});

export default NewTask;
