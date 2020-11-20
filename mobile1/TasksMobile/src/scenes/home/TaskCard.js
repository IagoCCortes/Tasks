import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import resolveCardStyle from '../../utils/resolveCardStyle';

export default ({task}) => {
  const types = task.types.map((type) => type.name);
  const cardStyle = resolveCardStyle(types);

  return (
    <>
      <LinearGradient
        start={{x: 0.0, y: 0.1}}
        end={{x: 0.8, y: 0.8}}
        colors={cardStyle.colors}
        style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name={cardStyle.icon} size={mixins.scaleSize(75)} color={colors.WHITE} />
        </View>
        <Text style={styles.title}>{task.name}</Text>
      </LinearGradient>
    </>
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
    justifyContent: 'flex-start',
    width: '100%',
  },
  section: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: mixins.scaleFont(20),
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
