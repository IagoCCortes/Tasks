import React from 'react';
import {TouchableOpacity} from 'react-native';
import {scaleFont, scaleSize} from 'styles/mixins';
import {BLACK, WHITE, GRAY_MEDIUM_1} from 'styles/colors';
import styled from 'styled-components';

export default ({
  bgColor = BLACK,
  bColor = GRAY_MEDIUM_1,
  disabled = false,
  tColor = WHITE,
  text,
  callback,
  margin,
}) => (
  <Button
    disabled={disabled}
    style={{backgroundColor: bgColor, borderColor: bColor, ...margin()}}
    onPress={() => callback()}>
    <ButtonText style={{color: tColor}}>{text}</ButtonText>
  </Button>
);

const Button = styled(TouchableOpacity)`
  align-items: center;
  border-radius: 100px;
  border-width: 2;
  display: flex;
  height: ${scaleSize(50)};
  justify-content: center;
  width: ${scaleSize(300)};
`;

const ButtonText = styled.Text`
  font-size: ${scaleFont(17)};
`;
