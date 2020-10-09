import React, {useState, useContext, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {Context} from "../../context";

const MainScreen = (props) => {

    const {getUserParams} = useContext(Context);

    const [id, setId] = useState('');
    const [login, setLogin] = useState('');
    const [token, setToken] = useState('');

    useEffect(()=>{
        const user = getUserParams();
        setId(user.id)
        setLogin(user.login)
        setToken(user.token)
    },[]);

    return (
        <View>
            <Text>Идентификатор: {id}</Text>
            <Text>Логин: {login}</Text>
            <Text>Токен: {token}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default MainScreen
