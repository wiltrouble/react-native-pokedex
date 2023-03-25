import {Platform, StyleProp, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

interface Props {
  style?: StyleProp<ViewStyle>
}

const SearchInput = ({ style }: Props) => {
  return (
    <View style={{...styles.container, ...style as any}}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Search Pokemon"
          style={{...styles.textInput, top: (Platform.OS === 'ios') ? 0 : 2}}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Icon name="search" color="gray" size={24} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {

  },
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
