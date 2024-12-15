import PropTypes from "prop-types";
import { AuthContext } from "../utils";
import { auth } from "../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // Creating new user
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        userSignUp,
        user,
        setUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;
// Prop type validation
FirebaseProvider.propTypes = {
    children: PropTypes.node,
}