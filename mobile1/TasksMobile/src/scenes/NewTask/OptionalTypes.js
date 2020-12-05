import React from 'react';
import * as colors from '../../styles/colors';
import {Row} from '../../components/styledComponents';
import {TouchableOpacity} from 'react-native';
import {Tag} from './Styles';

export default ({optionalTypes, setOptionalTypes, setFieldValue}) => {
  const toggleType = (type) => {
    if (optionalTypes.indexOf(type) > -1) {
      setOptionalTypes([...optionalTypes.filter((t) => t !== type)]);
    } else {
      setOptionalTypes([...optionalTypes, type]);
    }
  };

  return (
    <Row justifyContent="center">
      <TouchableOpacity
        onPress={() => {
          toggleType('routine');
          setFieldValue('frequency', '');
          setFieldValue('dueDate', undefined);
        }}>
        <Tag
          style={{
            backgroundColor: colors[optionalTypes.includes('routine') ? 'SECONDARY_ORANGE' : 'PRIMARY_ORANGE'],
          }}>
          Routine
        </Tag>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toggleType('quantity');
          setFieldValue('expectedValue', undefined);
        }}>
        <Tag
          style={{
            backgroundColor: colors[optionalTypes.includes('quantity') ? 'SECONDARY_ORANGE' : 'PRIMARY_ORANGE'],
          }}>
          Quantity
        </Tag>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          toggleType('timed');
          setFieldValue('expectedTime', undefined);
        }}>
        <Tag
          style={{
            backgroundColor: colors[optionalTypes.includes('timed') ? 'SECONDARY_ORANGE' : 'PRIMARY_ORANGE'],
          }}>
          Timed
        </Tag>
      </TouchableOpacity>
    </Row>
  );
};
