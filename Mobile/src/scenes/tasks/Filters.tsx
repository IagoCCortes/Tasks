import React, {useState, useEffect} from 'react';
import {View, Text as TextField, StyleSheet} from 'react-native';
import {GRAY_LIGHT_1} from 'styles/colors';
import FilterSwitch from 'components/molecules/FilterSwitch';
import ListTypes from 'components/organisms/ListTypes';
import typesData from 'assets/tempData/types';
import {ITypesList} from 'interfaces/ITypesList';

const Filters = () => {
  const [switches, setSwitches] = useState({status: false, routine: false});
  const [types, setTypes] = useState<ITypesList[] | undefined>(undefined);

  const select = (_id: string) => (types!.find((element) => element._id === _id)!.selected = true);

  useEffect(() => {
    const typeData: ITypesList[] = [];
    typesData.forEach((field) => typeData.push({...field, selected: false}));
    setTypes(typeData);
  }, []);

  const toggleSwitch = (choice: string): void =>
    setSwitches({...switches, [choice]: !switches[choice as keyof typeof switches]});

  return (
    <>
      <View style={styles.switchView}>
        <TextField style={styles.textFilterName}>Completed</TextField>
        <FilterSwitch value={switches.status} toggleSwitch={toggleSwitch} choices={['off', 'on']} />
      </View>
      <View style={styles.switchView}>
        <TextField style={styles.textFilterName}>Only routines</TextField>
        <FilterSwitch value={switches.status} toggleSwitch={toggleSwitch} choices={['off', 'on']} />
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
