import React from 'react';
import SquareButtonRight from '../../components/atoms/buttons/SquareButtonRight';
import {GRAY_DARK_1, PRIMARY_GREEN, PRIMARY_PURPLE, SECONDARY_GREEN, SECONDARY_PURPLE} from '../../styles/colors';
import {BackGroundImage, ButtonsContainer, Container, ImageContainer, Logo} from './Styles';

const AuthenticateScreen = ({navigation}) => (
  <Container>
    <ImageContainer>
      <BackGroundImage source={require('assets/images/backgroundAUTH.jpg')} />
      <Logo source={require('assets/images/logoMAIN.png')} />
    </ImageContainer>
    <ButtonsContainer>
      <SquareButtonRight
        bgColors={[PRIMARY_PURPLE, SECONDARY_PURPLE, GRAY_DARK_1]}
        text={'Sign in'}
        callback={() =>
          navigation.navigate('Sign In', {
            option: 'signin',
          })
        }
      />
      <SquareButtonRight
        bgColors={[PRIMARY_GREEN, SECONDARY_GREEN, GRAY_DARK_1]}
        text={'Sign up'}
        callback={() =>
          navigation.navigate('Sign Up', {
            option: 'signup',
          })
        }
      />
    </ButtonsContainer>
  </Container>
);

export default AuthenticateScreen;
