import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Context as MessageContext} from '../../services/context/MessageContext';
import styled from 'styled-components/native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';

export default () => {
  const {addMessage, state} = useContext(MessageContext);

  useEffect(() => {
    setTimeout(() => addMessage('', '', 0, ''), state.duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.message]);

  return (
    <>
      {state.message !== '' && (
        <StyledMessageContainer type={state.type}>
          <Text style={styles.text}>{state.message}</Text>
        </StyledMessageContainer>
      )}
    </>
  );
};

const typeColorResolver = {
  success: colors.SUCCESS,
  warning: colors.WARNING,
  alert: colors.ALERT,
};

export const StyledMessageContainer = styled.View`
  align-items: center;
  background-color: ${(props) => typeColorResolver[props.type]};
  elevation: 50;
  justify-content: center;
  ${mixins.padding(10, 10, 10, 10)};
  position: absolute;
  width: 100%;
  z-index: 999;
`;

export const Flex = styled.View`
  flex: ${(props) => (props.size ? props.size : 1)};
`;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
