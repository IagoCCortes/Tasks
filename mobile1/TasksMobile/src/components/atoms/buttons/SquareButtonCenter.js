import React from 'react';
import {TouchableOpacity} from 'react-native';
import {scaleFont, scaleSize} from 'styles/mixins';
import {WHITE} from 'styles/colors';
import styled from 'styled-components';
import {boxShadow} from '../../../styles/mixins';

export default ({bgColor, tColor = WHITE, text, callback}) => (
  <Button onPress={() => callback()} style={{backgroundColor: bgColor}}>
    <ButtonText style={{color: tColor}}>{text}</ButtonText>
  </Button>
);

const Button = styled(TouchableOpacity)`
  align-items: center;
  border-radius: 5px;
  display: flex;
  ${boxShadow()};
  height: ${scaleSize(50)};
  justify-content: center;
  width: ${scaleSize(300)};
`;

const ButtonText = styled.Text`
  align-self: center;
  font-size: ${scaleFont(20)};
`;
