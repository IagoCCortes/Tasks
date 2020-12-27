import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyledText} from '../../components/styledComponents';
import {navigate} from '../../RootNavigation';

export default () => {
  return (
    <TouchableOpacity onPress={() => navigate('Tasks')}>
      <ImageBackground
        source={require(`assets/images/background4.jpg`)}
        imageStyle={{borderRadius: 15}}
        style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="albums" size={mixins.scaleSize(75)} color={colors.WHITE} />
        </View>
        <StyledText bold fontSize={20} color={colors.WHITE}>
          All tasks
        </StyledText>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    ...mixins.boxShadow(),
    borderRadius: 15,
    height: 0.35 * mixins.WINDOW_HEIGHT,
    justifyContent: 'space-between',
    ...mixins.margin(0, 7, 0, 7),
    ...mixins.padding(15, 10, 15, 10),
    width: 0.45 * mixins.WINDOW_WIDTH,
  },
  iconContainer: {
    width: '100%',
  },
  section: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
