import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {WHITE} from '../../styles/colors';
import {boxShadow, scaleSize} from '../../styles/mixins';

export const BackGroundImage = styled.Image`
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Card = styled.View`
  background-color: ${WHITE};
  border-radius: 10px;
  ${boxShadow()};
  width: 95%;
`;

export const CircleContainer = styled(LinearGradient)`
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  height: 50%;
  position: absolute;
  top: 0;
  width: 115%;
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-horizontal: ${scaleSize(20)};
  margin-vertical: ${scaleSize(10)};
  padding-bottom: ${scaleSize(30)};
  padding-top: ${scaleSize(65)};
`;

export const ImageContainer = styled.View`
  align-items: center;
  height: 75%;
  justify-content: center;
  width: 100%;
`;

export const Logo = styled.Image`
  position: absolute;
  resize-mode: contain;
  z-index: 2;
`;

export const LogoContainer = styled.View`
  align-items: center;
  background-color: ${WHITE};
  border-radius: 20px;
  ${boxShadow()};
  height: ${scaleSize(110)};
  justify-content: center;
  position: absolute;
  top: ${scaleSize(-65)};
  width: ${scaleSize(110)};
`;

export const MiniLogo = styled.Image`
  height: 100;
  position: absolute;
  resize-mode: contain;
`;
