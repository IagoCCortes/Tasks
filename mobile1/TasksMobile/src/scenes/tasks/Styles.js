import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import * as colors from '../../styles/colors';
import * as mixins from '../../styles/mixins';

export const StyledFlatlist = styled.FlatList.attrs((props) => ({
  contentContainerStyle: {
    alignItems: 'center',
  },
}))`
  width: 100%;
`;

export const StyledImageBackground = styled.ImageBackground.attrs((props) => ({
  imageStyle: {
    borderRadius: 15,
  },
}))`
  align-items: center;
  background-color: ${colors.WHITE};
  border-radius: 15;
  ${mixins.boxShadow()};
  height: ${0.27 * mixins.WINDOW_HEIGHT};
  justify-content: space-between;
  ${mixins.margin(10, 0, 10, 0)};
  ${mixins.padding(15, 10, 15, 10)};
  width: ${0.9 * mixins.WINDOW_WIDTH};
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-horizontal: ${mixins.scaleSize(20)};
  margin-vertical: ${mixins.scaleSize(10)};
  padding-bottom: ${mixins.scaleSize(30)};
  padding-top: ${mixins.scaleSize(65)};
`;
