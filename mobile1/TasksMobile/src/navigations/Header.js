import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import * as mixins from 'styles/mixins';
import {navigationRef} from '../RootNavigation';

export default ({tintColor, toggleProfile, props}) => {
  const showGoBack = navigationRef.current.canGoBack();

  return (
    <Wrapper showGoBack={showGoBack}>
      {showGoBack && (
        <StyledIcon
          color={tintColor}
          size={mixins.scaleSize(40)}
          onPress={() => navigationRef.current.goBack()}
          name="arrow-back-circle"
        />
      )}
      <Logo source={require('assets/images/logoMAIN.png')} />
      {/* {tintColor !== '#FFF' && <Logo source={require('assets/images/logoMAIN.png')} />} */}
      <StyledIcon color={tintColor} size={mixins.scaleSize(40)} onPress={toggleProfile} name="person-circle" />
    </Wrapper>
  );
};

const Logo = styled.Image`
  align-self: center;
  height: ${mixins.scaleSize(60)};
  left: ${mixins.WINDOW_WIDTH / 2 - mixins.scaleSize(30)};
  position: absolute;
  resize-mode: contain;
  width: ${mixins.scaleSize(60)};
  z-index: 2;
`;

const StyledIcon = styled(Icon)`
  align-self: flex-end;
  ${mixins.boxShadow()};
  ${mixins.margin(0, 10, 0, 10)};
`;

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  height: ${mixins.scaleSize(40)};
  justify-content: ${(props) => (props.showGoBack ? 'space-between' : 'flex-end')};
  margin-left: ${mixins.scaleSize(-15)};
  width: ${mixins.WINDOW_WIDTH};
`;
