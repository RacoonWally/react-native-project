import React, {useState} from 'react';
import AppNavigation from "./src/navigation";
import {Context} from "./src/context";


export default function App() {

    const [id, setIdApp]= useState('');
    const [login, setLoginApp] = useState('');
    const [token, setTokenApp] = useState('');

    const addUserParams = (id, login, token) => {
        setIdApp(id);
        setLoginApp(login);
        setTokenApp(token);
    };

    const getUserParams = () => {
        return {
            id,
            login,
            token
        }
    };

    return (
        <Context.Provider value={{addUserParams, getUserParams}}>
            <AppNavigation/>
        </Context.Provider>
    );
}
