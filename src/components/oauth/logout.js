import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { clientId } from './login'

export default function Logout() {
    return (
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={() => console.log("Logout")}
        />
    )
}
