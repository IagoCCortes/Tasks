import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {scaleSize} from 'styles/mixins';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GRAY_LIGHT_1, PRIMARY_PURPLE, SECONDARY_PURPLE} from 'styles/colors';
import styled from 'styled-components';
Icon.loadFont();

export default ({}) => {
  return (
    <>
      <ImageContainer>
        <BackGroundImage source={require('assets/images/background11.jpg')} />
        <Logo source={require('assets/images/logoMAIN.png')} />
      </ImageContainer>
      <StatusBar translucent backgroundColor="transparent" />
    </>
  );
};

const BackGroundImage = styled.Image`
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const ImageContainer = styled.View`
  align-items: center;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.Image`
  position: absolute;
  resize-mode: contain;
  z-index: 2;
`;

const styles = StyleSheet.create({
  icon: {
    color: SECONDARY_PURPLE,
    fontSize: 25,
  },
  iconView: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 17,
    padding: 12,
    textAlign: 'justify',
  },
  textView: {
    flex: 9,
  },
  view: {
    alignItems: 'center',
    backgroundColor: GRAY_LIGHT_1,
    borderWidth: 1,
    borderColor: PRIMARY_PURPLE,
    flexDirection: 'row',
    minHeight: scaleSize(80),
    justifyContent: 'space-between',
  },
});
