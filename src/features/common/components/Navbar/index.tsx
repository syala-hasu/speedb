import {useAuth0} from "@auth0/auth0-react";
import LogoutButton from "../../../auth0/components/LogoutButton";
import LoginButton from "../../../auth0/components/LoginButton";
import Loading from "../Loading";
import {Link} from "react-router-dom";

function Navbar() {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
        <>
            <div className="navbar shadow-2xl">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to={`/`}>speedb</Link>
                </div>

                { isLoading ? <Loading /> : isAuthenticated ? <LogoutButton /> : <LoginButton /> }
            </div>
        </>
    )
}

export default Navbar
