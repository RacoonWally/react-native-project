export const getAuth = async (login, password) => {
    const response = await fetch("http://37.140.199.187:4000/auth/login", {
            method: 'POST',
            body: JSON.stringify({"username":login+'', "password":password+''}),
            headers: {
                'content-type': 'application/json'
            }
        }
    );
    return await response.json();
};
