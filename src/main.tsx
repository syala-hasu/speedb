import { StrictMode } from 'react'
import './index.css'
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import {Auth0Provider} from "@auth0/auth0-react";
import {SWRConfig} from "swr";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin,
                audience: "https://speedb.syalahasu.dev/",
            }}
        >
            <SWRConfig>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SWRConfig>
        </Auth0Provider>
    </StrictMode>
)
