import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SearchNav = () => {
  return (
    <View style={styles.navbarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.searchButton}>
        <Image
          source={require('../pics/rightArrow.jpg')}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    height: 50,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'grey',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
});

export default SearchNav;
