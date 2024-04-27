import { createContext } from "react";

export const AuthContext = createContext(null)
const FirebaseProvider = ({children}) => {

    const allValues = {name: "Test"}

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;