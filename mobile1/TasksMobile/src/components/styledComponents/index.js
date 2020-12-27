import {StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import * as colors from '../../styles/colors';
import * as mixins from '../../styles/mixins';
import * as typography from '../../styles/typography';

export const Card = styled.View`
  background-color: ${colors.WHITE};
  border-radius: 10;
  ${mixins.boxShadow()};
  margin-bottom: ${(props) => mixins.scaleSize(props.marginBottom ? props.marginBottom : 0)};
  margin-top: ${(props) => mixins.scaleSize(props.marginTop ? props.marginTop : 0)};
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
  background-color: ${(props) => (props.bgColor ? props.bgColor : colors.GRAY_LIGHT_1)};
  flex: ${(props) => (props.flex ? props.flex : 1)};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
`;

export const Flex = styled.View`
  flex: ${(props) => (props.size ? props.size : 1)};
`;

export const HeaderSpacing = styled.View`
  background-color: ${(props) => (props.bgColor ? props.bgColor : colors.SECONDARY_BLUE)};
  width: ${mixins.WINDOW_WIDTH};
  height: ${mixins.scaleSize(55 + StatusBar.currentHeight)};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
`;

export const StyledText = styled.Text`
  color: ${(props) => (props.color ? props.color : colors.BLACK)};
  font-size: ${(props) => (props.fontSize ? mixins.scaleFont(props.fontSize) : typography.FONT_SIZE_16)};
  font-weight: ${(props) => (props.bold ? typography.FONT_WEIGHT_BOLD : typography.FONT_WEIGHT_REGULAR)};
`;

export const WidthView = styled.View`
  align-items: center;
  width: ${(props) => (props.percentage ? props.percentage + '%' : '100%')};
`;
