import { createContext, useEffect, useState } from "react";
import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (user) => { // Este metodo esta pendiente si el usuario esta logueado
            console.log(user);

            if (user) {
                const { email, photoURL, displayName, uid} = user;
                setUser({ email, photoURL, displayName, uid }); // Si existe el usuario, le pasamos los datos
            } else {
                setUser(null);
            }
        });
        return () => unsuscribe(); // Cancela la suscripcion cuando el componente se desmonta
    }, []);
    
    const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => signOut(auth);

    return (
        <UserContext.Provider value={{ user, setUser, registerUser, loginUser, signOutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;