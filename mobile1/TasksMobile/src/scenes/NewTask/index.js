import React, {useState, useContext, useEffect} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Context as CommonDataContext} from 'services/context/CommonDataContext';
import {Context as TaskContext} from 'services/context/TaskContext';
import SquareButtonCenter from '../../components/atoms/buttons/SquareButtonCenter';
import {Card, CircleContainer, Container} from '../../components/styledComponents';
import TypeSelector from './TypeSelector';
import MainFields from './MainFields';
import OptionalTypes from './OptionalTypes';
import ConditionalFields from './ConditionalFields';

export default () => {
  const {getFrequencies, getTypes, state: commonDataState} = useContext(CommonDataContext);
  const {create} = useContext(TaskContext);
  const [mainType, setMainType] = useState('project');
  const [optionalTypes, setOptionalTypes] = useState([]);

  useEffect(() => {
    async function initializeDomainData() {
      if (commonDataState.frequencies === null) {
        await getFrequencies();
      }
      if (commonDataState.types === null) {
        await getTypes();
      }
    }

    initializeDomainData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToSchema = (schema, field, message) =>
    optionalTypes.includes(field) ? schema.required(message) : schema.optional();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please! name?').max(40, "Don't go beyong 50 characters, plz."),
    description: Yup.string().required('Describe the task.').max(500, "Don't go beyong 50 characters, ok?"),
    expectedValue: addToSchema(Yup.number(), 'quantity', 'Give me the number!'),
    frequency: addToSchema(Yup.string(), 'routine', 'Choose how often it should happen.'),
    dueDate: !optionalTypes.includes('routine') ? Yup.date().required('When is the task due?') : Yup.date().optional(),
    expectedTime: addToSchema(Yup.number(), 'timed', "How can it be timed if you won't tell the amount of time?!"),
  });

  const createTask = async (values) => {
    const types = [
      commonDataState?.types.filter((y) => y.name === mainType)[0]._id,
      ...optionalTypes.map((x) => commonDataState?.types.filter((y) => y.name === x)[0]._id),
    ];
    await create({...values, types});
  };

  return (
    <Container>
      <CircleContainer start={{x: 0.5, y: 0.2}} colors={[colors.PRIMARY_RED, colors.SECONDARY_RED]} />
      <Card marginBottom={20} marginTop={mixins.scaleSize(69 + StatusBar.currentHeight)}>
        <Formik
          initialValues={{
            name: '',
            description: '',
            dueDate: undefined,
            expectedValue: undefined,
            frequency: '',
            expectedTime: undefined,
          }}
          onSubmit={async (values) => createTask(values)}
          validationSchema={validationSchema}>
          {({errors, handleChange, handleBlur, handleSubmit, touched, values, setFieldValue}) => (
            <ScrollView>
              <ScrollView>
                <View style={{height: mixins.scaleSize(30)}} />
                <MainFields
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  values={values}
                />
                <TypeSelector mainType={mainType} setMainType={setMainType} />
                <View style={{height: mixins.scaleSize(15)}} />
                <OptionalTypes
                  optionalTypes={optionalTypes}
                  setOptionalTypes={setOptionalTypes}
                  setFieldValue={setFieldValue}
                />
                <View style={{height: mixins.scaleSize(15)}} />
                <ConditionalFields
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  selectedTypes={optionalTypes}
                  frequencies={commonDataState?.frequencies}
                />
                <SquareButtonCenter text={'Create'} bgColor={colors.PRIMARY_RED} callback={handleSubmit} />
                <View style={{height: mixins.scaleSize(30)}} />
              </ScrollView>
            </ScrollView>
          )}
        </Formik>
      </Card>
    </Container>
  );
};
