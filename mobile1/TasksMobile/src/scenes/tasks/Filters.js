import React, {useState, useEffect} from 'react';
import {View, Text as TextField, StyleSheet} from 'react-native';
import {GRAY_LIGHT_1} from 'styles/colors';
import Switch from 'components/molecules/inputs/Switch';
import ListTypes from 'components/organisms/ListTypes';
import typesData from 'assets/tempData/types';

const Filters = () => {
  const [switches, setSwitches] = useState({status: false, routine: false});
  const [types, setTypes] = useState(undefined);

  const select = (_id) => (types.find((element) => element._id === _id).selected = true);

  useEffect(() => {
    const typeData = [];
    typesData.forEach((field) => typeData.push({...field, selected: false}));
    setTypes(typeData);
  }, []);

  const toggleSwitch = (choice) => setSwitches({...switches, [choice]: !switches[choice]});

  return (
    <>
      <View style={styles.switchView}>
        <TextField style={styles.textFilterName}>Completed</TextField>
        <Switch value={switches.status} toggleSwitch={toggleSwitch} choices={['off', 'on']} />
      </View>
      <View style={styles.switchView}>
        <TextField style={styles.textFilterName}>Only routines</TextField>
        <Switch value={switches.status} toggleSwitch={toggleSwitch} choices={['off', 'on']} />
      </View>
      <ListTypes select={select} types={types} />
    </>
  );
};

const styles = StyleSheet.create({
  switchView: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
  },
  textFilterName: {
    color: GRAY_LIGHT_1,
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Filters;
