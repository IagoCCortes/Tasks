import styled from 'styled-components/native';
import * as colors from '../../styles/colors';

export const Container = styled.View`
  align-items: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : colors.WHITE)};
  flex: ${(props) => (props.flex ? props.flex : 1)};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
`;

export const Flex = styled.View`
  flex: ${(props) => (props.size ? props.size : 1)};
`;
