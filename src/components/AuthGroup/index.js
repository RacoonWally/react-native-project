import React, {useState, useEffect, useContext} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'


import {Context} from "../../context";
import {getAuth} from '../../service'



const AuthGroup = ({navigation}) => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isClicked, setClicked] = useState(false);

    const {addUserParams} = useContext(Context);

    const changeLogin = (inputLogin) => {
        setLogin(inputLogin)
    };

    const changePassword = (inputPassword) => {
        setPassword(inputPassword)
    };

    const directScreen = (name) => {
        return navigation.navigate(name)
    };


    useEffect(() => {
        if (isClicked){
            getAuth(login, password).then((item) => {
                if (item.statusCode !== undefined){
                    throw item.message
                } else {
                    const {access_token, id, login} = item;
                    addUserParams(id,login,access_token);
                }
            }).then(() => {
                directScreen('Main')
            }).catch((e) => {
                setClicked(false);
                alert(`Error: ${e}`);
            });
        }
    }, [isClicked]);


    return (
        <View style={styles.center}>
            <View>
                <Text style={styles.margins}>Логин</Text>
                <TextInput style={[styles.margins, styles.border]} value={login} onChangeText={(text) => changeLogin(text)} autoCapitalize={'none'}/>
            </View>
            <View>
                <Text style={styles.margins}>Пароль</Text>
                <TextInput style={[styles.margins, styles.border]} secureTextEntry={true} value={password} onChangeText={(text) => changePassword(text)}/>
            </View>
            <View style={styles.margins}>
                <Button title='Авторизация' onPress={() => {
                    setClicked(true);
                }}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    margins: {
        marginTop: 5,
        width: 200
    },
    border:{
        borderBottomWidth: 1,
        borderBottomColor: "#a7a7a7"
    }
});

export default AuthGroup
