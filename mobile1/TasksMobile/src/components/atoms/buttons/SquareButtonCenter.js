import React from 'react';
import {TouchableOpacity} from 'react-native';
import {scaleFont, scaleSize} from 'styles/mixins';
import {WHITE} from 'styles/colors';
import styled from 'styled-components';
import {boxShadow} from '../../../styles/mixins';

export default ({bgColor, tColor = WHITE, text, callback, width = '85%'}) => (
  <Button onPress={() => callback()} style={{backgroundColor: bgColor, width}}>
    <ButtonText style={{color: tColor}}>{text}</ButtonText>
  </Button>
);

const Button = styled(TouchableOpacity)`
  align-items: center;
  align-self: center;
  border-radius: 5px;
  display: flex;
  ${boxShadow()};
  height: ${scaleSize(50)};
  justify-content: center;
`;

const ButtonText = styled.Text`
  align-self: center;
  font-size: ${scaleFont(20)};
`;
