import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

const Profile = () => {
    return (
        <View style={styles.accountContainer}>
            <View style={styles.pfpContainer}>
                <Image style={styles.pfp} source={require('../pics/acc.png')}></Image>
            </View>
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.details}>@user_name</Text>
                </View>
                <View>
                    <Text style={styles.details}>Somiran Dutta</Text>
                    <Text style={styles.details}>userMailId@mail.com</Text>
                    <Text style={styles.details}>847354892</Text>
                    <Text style={styles.details}>09/10/2004</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    accountContainer: {
        height: 720,
        width: 300,
        alignItems: 'center'
    },
    pfpContainer: {
        height: 200,
        width: 200,
        borderRadius: 100, 
        borderWidth: 1,
        borderColor: 'black', 
        overflow: 'hidden', 
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    },
    details:{
        textAlign:'center'
    },
    pfp: {
        height: 200,
        width: 200
    }
})

export default Profile;
