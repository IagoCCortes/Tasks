import React, {useContext, useState} from 'react';
import Signin from './Signin';
import {Context as AuthContext} from 'services/context/AuthContext';
import Signup from './Signup';
import * as colors from '../../styles/colors';
import {StatusBar} from 'react-native';
import Loading from '../../components/organisms/Loading';
import {Card, CircleContainer, Container} from 'components/styledComponents';
import Success from '../../components/molecules/lotties/Success';
import Fail from '../../components/molecules/lotties/Fail';

export default ({route}) => {
  const {signin, signup} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState({animation: '', action: null});
  const signinColors = [colors.SECONDARY_PURPLE, colors.PRIMARY_PURPLE];
  const signupColors = [colors.SECONDARY_GREEN, colors.PRIMARY_GREEN];
  const {option} = route.params;

  const loadAction = async (callBack, parameters) => {
    setLoading(true);
    const result = await callBack(parameters);
    const action = () => {
      setAnimating({animation: '', action: null});
      result && result();
    };
    setAnimating({animation: typeof result === 'function' ? 'success' : 'fail', action});
    setLoading(false);
  };

  return (
    <>
      <Container>
        {loading && <Loading active={true} />}
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
      {animating.animation === 'success' && <Success onFinish={animating.action} />}
      {animating.animation === 'fail' && <Fail onFinish={animating.action} />}
    </>
  );
};
