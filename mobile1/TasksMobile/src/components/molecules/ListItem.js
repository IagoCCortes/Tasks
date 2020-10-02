import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PRIMARY_MEDIUM, WHITE} from 'styles/colors';
Icon.loadFont();

const ListItem = ({data, navigation}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.push('Task')}>
      <View style={styles.cardHeader}>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.createdAt}</Text>
      </View>
      <View style={styles.cardDetail}>
        <Text>{data.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardDetail: {
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 17,
    padding: 12,
    textAlign: 'justify',
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: WHITE,
    borderRadius: 25,
    elevation: 5,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    height: 150,
    width: '92%',
  },
});

export default ListItem;
