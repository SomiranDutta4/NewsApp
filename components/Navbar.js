import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Navbar({ accountPage, setAccPage, newsShowing, setNewsShowing }) {
  const handleBackPress = () => {
    setNewsShowing(-1);
    setAccPage(false);
  };

  const handleAccPress = () => {
    setAccPage(true);
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.heading}>NewsApp</Text>
      {(newsShowing !== -1 || accountPage) && 
        <TouchableOpacity style={styles.button} onPress={handleBackPress}>
          <Image style={styles.imageButton} source={require('../pics/back-arrow-icon.webp')} />
        </TouchableOpacity>
      }
      {!accountPage && newsShowing === -1 &&
        <TouchableOpacity onPress={handleAccPress}>
          <Image style={styles.imageButton} source={require('../pics/account-25.png')} />
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    height: 40,
    width: 40,
  },
  navbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 15,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    height: '100%',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#6200EE',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
