import React, {useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, Animated} from 'react-native';
import {BLACK} from 'styles/colors';
import {Context as AuthContext} from 'services/context/AuthContext';
import SquareButton from '../../components/atoms/SquareButton';

const AuthenticateScreen2 = ({navigation}) => {
  const {signin, signup} = useContext(AuthContext);

  return (
    <View style={styles.view}>
      <View style={styles.imgContainer}>
        <Image style={styles.bgImage} source={require('assets/images/background18.jpg')} />
        <Image style={styles.logo} source={require('assets/images/logo67.png')} />
      </View>
      <View style={styles.buttonsContainer}>
        <SquareButton
          bgColors={['rgb(149, 84, 253)', '#8170ad', '#4e4e4e']}
          text={'Sign in'}
          callback={() => navigation.navigate('Sign In')}
        />
        <SquareButton
          bgColors={['rgb(29, 82, 90)', '#399890', '#4e4e4e']}
          text={'Sign up'}
          callback={() => navigation.navigate('Sign Up')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    fontSize: 35,
    color: BLACK,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  imgContainer: {
    alignItems: 'center',
    height: '75%',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  logo: {
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 1000,
  },
  view: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AuthenticateScreen2;
