import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaleSize} from 'styles/mixins';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GRAY_LIGHT_1, PRIMARY_DARK, PRIMARY_MEDIUM} from 'styles/colors';
Icon.loadFont();

const ListItem = ({text, navigation}: {text: string; navigation: any}) => {
  return (
    <View style={styles.view}>
      <View style={styles.textView}>
        <Text style={styles.text} onPress={() => navigation.push('Task')}>
          {text}
        </Text>
      </View>
      <View style={styles.iconView}>
        <Text onPress={() => console.log('todo')}>
          <Icon name="remove" size={20} style={styles.icon} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: PRIMARY_MEDIUM,
    fontSize: 25,
  },
  iconView: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 17,
    padding: 12,
    textAlign: 'justify',
  },
  textView: {
    flex: 9,
  },
  view: {
    alignItems: 'center',
    backgroundColor: GRAY_LIGHT_1,
    borderWidth: 1,
    borderColor: PRIMARY_DARK,
    flexDirection: 'row',
    minHeight: scaleSize(80),
    justifyContent: 'space-between',
  },
});

export default ListItem;
