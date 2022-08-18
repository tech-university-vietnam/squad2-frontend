import { GoogleLogin } from 'react-google-login';

export const clientId = '722490053093-vo7kav44uk2i1vkbvsoe4hkubiuh0inq.apps.googleusercontent.com'

const Login = () => {

    const onSuccess = (res) => {
        console.log("Login Success", res.profileObj)
    }

    const onError = (err) => {
        console.log('login failed', err);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login Google"
                onSuccess={onSuccess}
                onError={onError}
                isSignedIn
                cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default Login
