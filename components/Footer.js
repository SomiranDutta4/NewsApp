import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Footer = ({setNewsShowing, setSearchScreen}) => {
    const handleHome = () => {
        setNewsShowing(-1);
        setSearchScreen(false);
    }
    const handleSearch = () => {
        setSearchScreen(true);
    }
  
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={handleHome} style={styles.button}>
                <Image
                    source={require('../pics/home.jpg')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch} style={styles.button}>
                <Image
                    source={require('../pics/search.webp')}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSearch} style={styles.button}>
                <Image
                    source={require('../pics/like.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    button: {
        flex: 1,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: 'white',
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default Footer;
