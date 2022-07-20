import { getAuth } from "firebase/auth";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const auth = getAuth();
        setAuth(auth);
    }, []);

    return (
        <Fragment>
            {children}
            {/* {auth.currentUser ? children : null} */}
        </Fragment>
    )
}

export default Auth;