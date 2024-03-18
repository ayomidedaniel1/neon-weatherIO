import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

const SearchInput = () => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
      />

      <TouchableOpacity onPress={() => { }} style={styles.searchBtn}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 46,
    marginTop: 50,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    padding: 10,
    borderWidth: 0.3,
  },
  searchBtn: {
    backgroundColor: '#000',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
});