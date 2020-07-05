import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {PRIMARY_MEDIUM} from 'styles/colors';
import {scaleSize} from 'styles/mixins';
import TypeChoice from 'components/molecules/TypeChoice';

const TypesSelector = ({
  selectedTypes,
  setSelectedTypes,
  setFieldValue,
}: {
  selectedTypes: string[];
  setSelectedTypes: Function;
  setFieldValue: any;
}) => {
  const toggleType = (type: string) => {
    const types = selectedTypes;
    const index = types.indexOf(type);
    if (index !== -1) {
      types.splice(index, 1);
      setFieldValue(type, '');
    } else {
      types.push(type);
    }
    setSelectedTypes([...types]);
  };

  return (
    <View style={styles.container}>
      <TypeChoice
        name={'Timed'}
        type={'timed'}
        selected={selectedTypes.includes('timed')}
        toggleType={toggleType}
        icon={'timer'}
      />
      <TypeChoice
        name={'Counted'}
        type={'quantity'}
        selected={selectedTypes.includes('quantity')}
        toggleType={toggleType}
        icon={'plus-one'}
      />
      <TypeChoice
        name={'Problem'}
        type={'problem'}
        selected={selectedTypes.includes('problem')}
        toggleType={toggleType}
        icon={'report-problem'}
      />
      <TypeChoice
        name={'Physical'}
        type={'physical'}
        selected={selectedTypes.includes('physical')}
        toggleType={toggleType}
        icon={'directions-run'}
      />
      <TypeChoice
        name={'Relax'}
        type={'relax'}
        selected={selectedTypes.includes('relax')}
        toggleType={toggleType}
        icon={'beach-access'}
      />
      <TypeChoice
        name={'Routine'}
        type={'routine'}
        selected={selectedTypes.includes('routine')}
        toggleType={toggleType}
        icon={'replay'}
      />
      <TypeChoice
        name={'Project'}
        type={'project'}
        selected={selectedTypes.includes('project')}
        toggleType={toggleType}
        icon={'lightbulb-outline'}
      />
      <TypeChoice
        name={'Other'}
        type={'other'}
        selected={selectedTypes.includes('other')}
        toggleType={toggleType}
        icon={'casino'}
      />
    </View>
  );
};

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: PRIMARY_MEDIUM,
    height: ScreenHeight,
    justifyContent: 'space-between',
    paddingBottom: 120,
    width: scaleSize(60),
  },
});

export default TypesSelector;
