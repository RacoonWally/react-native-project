import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import AuthGroup from "../../components/AuthGroup";


const StartAuthScreen = ({navigation}) => {
    return (
        <View style={styles.authscreen}>
            <AuthGroup navigation={navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    authscreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


});

export default StartAuthScreen
