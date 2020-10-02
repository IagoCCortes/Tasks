import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scaleSize} from 'styles/mixins';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GRAY_LIGHT_1, PRIMARY_DARK, PRIMARY_MEDIUM} from 'styles/colors';
import {FlatList} from 'react-native-gesture-handler';
Icon.loadFont();

const ListTypes = ({types, select}) => {
  return (
    <FlatList
      data={types}
      renderItem={({item}) => (
        <>
          <View style={styles.textView}>
            <Text style={styles.text} onPress={() => select(item._id)}>
              {item.name}
            </Text>
          </View>
        </>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
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

export default ListTypes;
