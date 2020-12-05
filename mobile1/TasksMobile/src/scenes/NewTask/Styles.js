import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import * as colors from '../../styles/colors';
import * as mixins from '../../styles/mixins';

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
  background-color: ${colors.WHITE};
  border-radius: 10px;
  ${mixins.boxShadow()};
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

export const Container = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-horizontal: ${mixins.scaleSize(20)};
  margin-vertical: ${mixins.scaleSize(10)};
  padding-bottom: ${mixins.scaleSize(30)};
  padding-top: ${mixins.scaleSize(65)};
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
  background-color: ${colors.WHITE};
  border-radius: 20px;
  ${mixins.boxShadow()};
  height: ${mixins.scaleSize(110)};
  justify-content: center;
  position: absolute;
  top: ${mixins.scaleSize(-65)};
  width: ${mixins.scaleSize(110)};
`;

export const MiniLogo = styled.Image`
  height: ${mixins.scaleSize(100)};
  position: absolute;
  resize-mode: contain;
`;

export const Tag = styled.Text`
  border-radius: 15;
  color: ${colors.WHITE};
  font-size: ${mixins.scaleFont(18)};
  margin-right: ${mixins.scaleSize(5)};
  ${mixins.padding(10, 10, 10, 10)};
`;

export const Type = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.GRAY_DARK_1};
  border-radius: 5;
  height: ${mixins.scaleSize(60)};
  justify-content: center;
  width: ${mixins.scaleSize(60)};
`;

export const TypesRow = styled.View`
  align-self: center;
  background-color: ${colors.SECONDARY_RED};
  flex-direction: row;
  justify-content: space-around;
  ${mixins.padding(5, 0, 5, 0)};
  width: 100%;
`;
