import React, {useContext, useState} from 'react';
import Signin from './Signin';
import {Context as AuthContext} from 'services/context/AuthContext';
import Signup from './Signup';
import {PRIMARY_GREEN, PRIMARY_PURPLE, SECONDARY_GREEN, SECONDARY_PURPLE} from '../../styles/colors';
import Loading from 'scenes/loading';
import {Card, CircleContainer, Container} from './Styles';
import {boxShadow} from '../../styles/mixins';

export default ({route}) => {
  const {signin, signup} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signinColors = [SECONDARY_PURPLE, PRIMARY_PURPLE];
  const signupColors = [SECONDARY_GREEN, PRIMARY_GREEN];
  const {option} = route.params;

  const loadAction = async (callBack, parameters) => {
    setLoading(true);
    await callBack(parameters);
    setLoading(false);
  };

  return (
    <Container>
      {/* {loading && <Loading />} */}
      <CircleContainer start={{x: 0.5, y: 0.2}} colors={option === 'signin' ? signinColors : signupColors} />
      <Card>
        {option === 'signin' ? (
          <Signin signin={signin} action={loadAction} />
        ) : (
          <Signup signup={signup} action={loadAction} />
        )}
      </Card>
    </Container>
  );
};
