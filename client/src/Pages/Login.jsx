import React from "react";

//Image
import wasteman from "../assets/images/Waste management-pana.svg";
import wasteman2 from "../assets/images/Waste management-rafiki.svg"
import gmail from "../assets/images/gmail.svg";
import facebook from "../assets/images/facebook.svg";

import logo from "../assets/images/Logo1.png";
import dustbin from "../assets/images/loginImg.jpg";
// API  Requests
import { userLogin } from "../service/api";

const Login = () => {1

    const paramField = React.useRef();
    const passwordField = React.useRef();
    const [showLoginError, setShowLoginError] = React.useState(false);

    const userLoginFunc = async () => {
        let param = paramField.current.value;
        let password = passwordField.current.value;
        let res = await userLogin({ param: param, password: password });
        if (res && res.status === 200 && res.data.success == 1) {
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("user_type", res.data.user_type);
            localStorage.setItem('email', res.data.email);
            if (res.data.user_type == "user")
                window.location.href = "/user";
            else if (res.data.user_type == "collector")
                window.location.href = "/collector";
        }
        else
            setShowLoginError(true);
    }

    return (
        <div className="bg-gray-100 min-h-screen bg-login bg-no-repeat bg-cover bg-center bg-fixed">

            <div className="max-w-7xl flex justify-center md:flex-row flex-col container bg-white min-h-screen">
                <div className="w-1/2 text-center md:text-left bg-gray-300 pl-32">
                    <img src={logo} alt="logo" className="h-16 pt-8" />
                    <p className="font-semibold text-sm capitalize">Putting waste in its place</p>
                    <p className="text-3xl font-semibold pt-8">Login</p>
                    <p className="my-2 text-sm">Let's get started with disposing!</p>
                    <div className="w-full md:w-3/5 py-7 space-y-8">
                        <div class="relative z-0">
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={paramField} onChange={() => setShowLoginError(false)} />
                            <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Email or contact</label>
                        </div>
                        <div class="relative z-0">
                            <input type="password" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={passwordField} onChange={() => setShowLoginError(false)} />
                            <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Password</label>
                        </div>
                        {showLoginError && <p className="text-red-500 text-sm">Invalid Credentials</p>}
                    </div>
                    <button className="bg-green px-8 py-2 rounded-lg hover:bg-darkGreen w-3/5" onClick={() => userLoginFunc()}>
                        <p className="text-md font-semibold">Login</p>
                    </button>
                    <button className="border-2 border-green px-8 py-2 rounded-lg hover:bg-darkGreen w-3/5 my-3" onClick={() => userLoginFunc()}>
                        <p className="text-sm font-semibold flex items-center space-x-4 justify-center">
                            <img src={gmail} className="h-5 w-5" />
                            <p className="text-xs">
                                Sign up with Google</p>
                        </p>
                    </button>
                    <button className="border-2 border-green px-8 py-2 rounded-lg hover:bg-darkGreen w-3/5" onClick={() => userLoginFunc()}>
                    <p className="text-sm font-semibold flex items-center space-x-4 justify-center">
                            <img src={facebook} className="h-5 w-5" />
                            <p className="text-xs">
                                Sign up with Facebook</p>
                        </p>
                    </button>

                    <p className="text-sm py-4">Not disposing yet ? <a href="/register" className="hover:text-darkGreen">Register Now</a></p>
                </div>
                <div className="w-1/2 px-0">
                    <div className="min-h-screen flex">
                        <img src={wasteman} alt="wasteman" className="w-1/2 mx-auto" />
                        <img src={wasteman2} alt="wasteman2" className="w-1/2 mx-auto" />
                    </div>
                </div>

            </div></div>
    );
}

export default Login;