import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";
import ROUTES from "../../../../libs/router/routes.ts";

function LogoutButton(): React.ReactElement {
    const { user, logout } = useAuth0();

    return (
        <>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="icon"
                            src={user ? user.picture : ""}/>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><Link to={ROUTES.MY_RUN}>Your Runs</Link></li>
                    <li><a onClick={() => logout()}>Logout</a></li>
                </ul>
            </div>
        </>
    );
}

export default LogoutButton;
