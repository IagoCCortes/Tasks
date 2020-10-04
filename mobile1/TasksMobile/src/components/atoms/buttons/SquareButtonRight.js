import React from 'react';
import {TouchableOpacity} from 'react-native';
import {scaleFont, scaleSize} from 'styles/mixins';
import {WHITE} from 'styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {boxShadow} from '../../../styles/mixins';

export default ({bgColors, tColor = WHITE, text, callback}) => (
  <TouchableOpacity onPress={() => callback()}>
    <Gradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} colors={[...bgColors]}>
      <ButtonText style={{color: tColor}}>{text}</ButtonText>
    </Gradient>
  </TouchableOpacity>
);

const Gradient = styled(LinearGradient)`
  align-items: center;
  border-radius: 5;
  display: flex;
  ${boxShadow()};
  height: ${scaleSize(50)};
  justify-content: center;
  width: ${scaleSize(300)};
`;

const ButtonText = styled.Text`
  align-self: flex-end;
  font-size: ${scaleFont(19)};
  margin-right: ${scaleSize(30)};
`;
