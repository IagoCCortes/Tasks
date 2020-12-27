import React from 'react';
import {Animated, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import * as colors from 'styles/colors';
import * as mixins from 'styles/mixins';
import Icon from 'react-native-vector-icons/Ionicons';
import resolveCardIcon from '../../utils/resolveCardIcon';
import resolveCardBgImage from '../../utils/resolveCardBgImage';
import {StyledText} from '../../components/styledComponents';
import {navigate} from '../../RootNavigation';
import {StyledImageBackground} from './Styles';

export default ({task, y, index}) => {
  const types = task.types.map((type) => type.name);
  const icon = resolveCardIcon(types);
  const bgImage = resolveCardBgImage(types);
  const height = mixins.WINDOW_HEIGHT - mixins.scaleSize(49 + StatusBar.currentHeight);
  const CARD_HEIGHT = 0.27 * mixins.WINDOW_HEIGHT + mixins.scaleSize(20);
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolateRight: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });

  return (
    <Animated.View style={{opacity, transform: [{translateY}, {scale}]}}>
      <TouchableOpacity onPress={() => navigate('Task', {task})}>
        <StyledImageBackground source={bgImage}>
          <View style={styles.iconContainer}>
            <Icon name={icon} size={mixins.scaleSize(75)} color={colors.WHITE} />
          </View>
          <StyledText bold fontSize={20} color={colors.WHITE}>
            {task.name}
          </StyledText>
        </StyledImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: '100%',
  },
  section: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
