import React from "react";
import {useAuth0} from "@auth0/auth0-react";

function LoginButton(): React.ReactElement {
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <button className="btn btn-neutral" onClick={() => loginWithRedirect()}>Login</button>
        </>
    );
}

export default LoginButton;
