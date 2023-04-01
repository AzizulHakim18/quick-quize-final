import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Login = () => {
    const [userEmail] = useState('')
    // const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { signin, resetPassword, signInWithGoogle } = useContext(AuthContext)



    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email);
        signin(email, password)
            .then(result => {
                toast.success("Log in successfully")
                navigate(from, { replace: true });
            })
            .catch(error => toast.error("Failed to log in"));
    }


    // Google Signin
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            console.log(result.user.uid)
            navigate(from, { replace: true })
        })

            .catch((error) => {
                console.log(error);
            })
    }

    //Reset Pass
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email')
            })
            .catch(error => toast.error(error.message))
    }


    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-8 text-3xl text-center font-bold">Log In</h1>

                        {/* for google registration */}
                        <button onClick={handleGoogleSignIn} className="group h-12  m-4 px-6 border-2 border-gray-300 rounded-full transition duration-300 
hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                <span className="block w-max px-2  font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                            </div>
                        </button>

                        <form onSubmit={handleSubmit} action="">

                            <input
                                type="text"
                                className="block border border-gray-400 w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-gray-400 w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1"
                            >Log In</button>
                        </form>
                        {/* reset option */}
                        <div className='text-center'>
                            <button
                                onClick={handleReset}
                                className=' font-bold hover:underline text-red-700'
                            >
                                Forgot password?
                            </button>
                        </div>
                        <div className="text-center text-sm text-gray-400 mt-4">
                            By signing up, you agree to the
                            <Link to="" className="no-underline border-b border-grey-dark text-gray-400" >
                                Terms of Service
                            </Link> and
                            <Link to="" className="no-underline border-b border-grey-dark " >
                                Privacy Policy
                            </Link>
                        </div>


                    </div>



                    <div className=" mt-6 ">
                        Don't have an account?
                        <Link to="/registration" className="no-underline text-blue-600 font-bold text-xl " >
                            Register Now
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;