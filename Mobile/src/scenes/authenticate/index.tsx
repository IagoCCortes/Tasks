import React, {useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, Animated} from 'react-native';
import {GRAY_LIGHT_1, BLACK} from 'styles/colors';
import {scaleSize, margin} from 'styles/mixins';
import MainButton from 'components/atoms/MainButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Context as AuthContext} from 'services/context/AuthContext';
import Signin from './Signin';
import Signup from './Signup';
Icon.loadFont();

const AuthenticateScreen = () => {
  const {signin, signup} = useContext(AuthContext);
  const [screen, setScreen] = useState('none');
  const value = useState(new Animated.ValueXY({x: 0, y: 350}))[0];

  const clickChoice = (choice: string) => {
    setScreen(choice);
    value.setValue({x: 0, y: 350});
    Animated.timing(value, {
      toValue: {x: 0, y: 0},
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.view}>
      {screen !== 'none' && (
        <Text style={styles.iconButton} onPress={() => setScreen('none')}>
          <Icon name="arrow-back" size={20} color="#FFF" style={styles.backIcon} />
        </Text>
      )}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('assets/images/logo.png')} />
      </View>
      <View style={styles.fields}>
        {screen === 'none' ? (
          <>
            <MainButton text={'Sign in'} callback={() => clickChoice('signin')} margin={() => margin(0, 0, 15, 0)} />
            <MainButton text={'Sign up'} callback={() => clickChoice('signup')} margin={() => margin(0, 0, 15, 0)} />
          </>
        ) : (
          <Animated.View style={value.getLayout()}>
            {screen === 'signin' ? <Signin signin={signin as Function} /> : <Signup signup={signup as Function} />}
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    fontSize: 35,
    color: BLACK,
  },
  fields: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  iconButton: {
    left: 10,
    position: 'absolute',
    top: 10,
    zIndex: 10,
  },
  logo: {
    height: scaleSize(400),
    resizeMode: 'contain',
    width: scaleSize(400),
  },
  logoContainer: {
    // flex: 2,
  },
  view: {
    alignItems: 'center',
    backgroundColor: GRAY_LIGHT_1,
    flex: 1,
    justifyContent: 'center',
  },
});

export default AuthenticateScreen;
