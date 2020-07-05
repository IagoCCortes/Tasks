import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SUCCESS} from 'styles/colors';
// import {TouchableOpacity, TextInput} from 'react-native-gesture-handler';
// import { SUCCESS, WHITE } from 'src/styles/colors';

const LoginScreen = () => (
  // <View style={styles.view}>
  //   <Text style={styles.header}>Login</Text>
  //   <TextInput
  //     placeholder="Username or Email"
  //     autoCapitalize="none"
  //     placeholderTextColor="#ddd"
  //     style={styles.input}
  //   />
  <TextInput
    placeholder="Password"
    autoCapitalize="none"
    placeholderTextColor="#ddd"
    secureTextEntry={true}
    style={styles.input}
  />

  //   <TouchableOpacity
  //     style={styles.button}
  //     onPress={() => navigation.navigate('About')}>
  //       <Text style={styles.text}>Login</Text>
  //   </TouchableOpacity>
  // </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 80,
  },
  input: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    color: '#fff',
    textAlign: 'center',
    width: 300,
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
  button: {
    alignItems: 'center',
    backgroundColor: SUCCESS,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    marginTop: 25,
    width: 300,
  },
  view: {
    alignItems: 'center',
    backgroundColor: 'rgb(53, 70, 95)',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default LoginScreen;
