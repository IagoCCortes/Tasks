import React from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import resolveCardIcon from '../../utils/resolveCardIcon';
import {StyledText} from '../../components/styledComponents';
import {navigate} from '../../RootNavigation';

export default ({task}) => {
  const types = task.types.map((type) => type.name);
  const icon = resolveCardIcon(types);

  return (
    <TouchableOpacity onPress={() => navigate('Task', {task})}>
      <ImageBackground
        source={require(`assets/images/background5.jpg`)}
        imageStyle={{borderRadius: 15}}
        style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={mixins.scaleSize(75)} color={colors.WHITE} />
        </View>
        <StyledText bold fontSize={20} color={colors.WHITE}>
          {task.name}
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
