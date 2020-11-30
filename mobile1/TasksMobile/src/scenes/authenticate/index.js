import React, {useContext, useEffect, useState} from 'react';
import SquareButtonRight from '../../components/atoms/buttons/SquareButtonRight';
import {Container} from 'components/styledComponents';
import {GRAY_DARK_1, PRIMARY_GREEN, PRIMARY_PURPLE, SECONDARY_GREEN, SECONDARY_PURPLE} from '../../styles/colors';
import {BackGroundImage, ButtonsContainer, ImageContainer, Logo} from './Styles';
import SplashScreen from '../../components/organisms/SplashScreen';
import {Context as AuthContext} from 'services/context/AuthContext';

const AuthenticateScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(true);
  const {tryLocalSignin} = useContext(AuthContext);

  useEffect(() => {
    const tryToSignIn = async () => {
      await tryLocalSignin();
      setLoading(false);
    };

    tryToSignIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
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
};

export default AuthenticateScreen;
