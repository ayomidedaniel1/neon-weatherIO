import React from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type SearchInputProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
};

const SearchInput = ({ searchQuery, setSearchQuery, handleSearch }: SearchInputProps) => {

  const handleChangeText = (text: string) => {
    setSearchQuery(text);
  };

  const handleSearchPress = () => {
    Keyboard.dismiss();
    handleSearch();
  };

  // Function to dismiss the keyboard when users press enter on the keyboard
  const handleKeyPress = (event: any) => {
    if (event.nativeEvent.key === 'Enter') {
      Keyboard.dismiss();
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={searchQuery}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSearchPress}
        onKeyPress={handleKeyPress}
        placeholder='Enter a city or location'
        placeholderTextColor={'#999999'}
      />

      <TouchableOpacity onPress={handleSearchPress} style={styles.searchBtn}>
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
    fontFamily: 'medium',
  },
});