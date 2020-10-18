import React, {useContext, useState} from 'react';
import Signin from './Signin';
import {Context as AuthContext} from 'services/context/AuthContext';
import Signup from './Signup';
import * as colors from '../../styles/colors';
import Loading from 'scenes/loading';
import {Card, CircleContainer, Container} from './Styles';
import {StatusBar} from 'react-native';
import Success from '../../components/molecules/lotties/Success';
import AlternativeLoading from '../loading';
import Fail from '../../components/molecules/lotties/Fail';

export default ({route}) => {
  const {signin, signup, clearAnimation, state} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signinColors = [colors.SECONDARY_PURPLE, colors.PRIMARY_PURPLE];
  const signupColors = [colors.SECONDARY_GREEN, colors.PRIMARY_GREEN];
  const {option} = route.params;

  const loadAction = async (callBack, parameters) => {
    setLoading(true);
    await callBack(parameters);
    setLoading(false);
  };

  return (
    <>
      <Container>
        {loading && <AlternativeLoading active={true} />}
        <CircleContainer start={{x: 0.5, y: 0.2}} colors={option === 'signin' ? signinColors : signupColors} />
        <Card>
          {option === 'signin' ? (
            <Signin signin={signin} action={loadAction} />
          ) : (
            <Signup signup={signup} action={loadAction} />
          )}
        </Card>
        <StatusBar backgroundColor={option === 'signin' ? colors.SECONDARY_PURPLE : colors.SECONDARY_GREEN} />
      </Container>
      {state?.animating && state?.errorMessage === '' && <Success onFinish={clearAnimation} />}
      {state?.animating && state?.errorMessage !== '' && <Fail onFinish={clearAnimation} />}
    </>
  );
};
