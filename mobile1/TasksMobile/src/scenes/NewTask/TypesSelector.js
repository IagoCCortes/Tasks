import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {PRIMARY_PURPLE} from 'styles/colors';
import {scaleSize} from 'styles/mixins';
import TypeChoice from 'components/molecules/TypeChoice';

const TypesSelector = ({selectedTypes, setSelectedTypes, setFieldValue, values}) => {
  const toggleType = (type) => {
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

  const iconNames = {
    timed: 'timer',
    quantity: 'plus-one',
    problem: 'report-problem',
    routine: 'replay',
    relax: 'beach-access',
    project: 'lightbulb-outline',
    other: 'casino',
    physical: 'directions-run',
  };

  return (
    <View style={styles.container}>
      {values.map((t) => (
        <TypeChoice
          name={t.name}
          selected={selectedTypes.includes(t.name)}
          toggleType={toggleType}
          icon={iconNames[t.name]}
          key={t._id}
        />
      ))}
    </View>
  );
};

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: PRIMARY_PURPLE,
    height: ScreenHeight - 25,
    justifyContent: 'space-between',
    paddingBottom: 120,
    width: scaleSize(60),
  },
});

export default TypesSelector;
