import React from "react";

//Image
import wasteman from "../assets/images/Waste management-pana.svg";
import wasteman2 from "../assets/images/Waste management-rafiki.svg"
import gmail from "../assets/images/gmail.svg";
import facebook from "../assets/images/facebook.svg";

// API  Requests
import { userLogin } from "../service/api";

const Login = () => {1

    const paramField = React.useRef();
    const passwordField = React.useRef();
    const [showLoginError, setShowLoginError] = React.useState(false);

    const userLoginFunc = async() => {
        let param = paramField.current.value;
        let password = passwordField.current.value;
        let res = await userLogin({param : param, password:password});
        if(res && res.status === 200 && res.data.success == 1){
            alert("DONE");
        }
        else
            setShowLoginError(true);
    }

    return (
        <div className=" bg-gray-100">
            <p className="text-center font-semibold text-2xl pt-8">KUDAबिन</p>
            <p className="text-center font-semibolfd">Looking for Garbage !</p>

            <div className="max-w-7xl mx-auto flex justify-center items-center md:flex-row flex-col container px-16 min-h-[86vh] py-16 md:py-0">
                <div className="w-2/5 text-center md:text-left translate-x-0 md:translate-x-5">
                    <p className="text-3xl font-semibold">Login</p>
                    <p className="my-2 text-sm">Let's get started with disposing!</p>
                    <div className="w-full md:w-3/5 py-7 space-y-8">
                        <div class="relative z-0">
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={paramField} onChange={()=>setShowLoginError(false)} />
                            <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Email or contact</label>
                        </div>
                        <div class="relative z-0">
                            <input type="password" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={passwordField} onChange={()=>setShowLoginError(false)}/>
                            <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Password</label>
                        </div>
                        {showLoginError && <p className="text-red-500 text-sm">Invalid Credentials</p>}
                    </div>
                    <button className="bg-green px-8 py-2 rounded-lg hover:bg-darkGreen w-3/5" onClick={()=>userLoginFunc()}>
                        <p className="text-md font-semibold">Login</p>
                    </button>
                    <div className="text-center flex w-full md:w-3/5 justify-center py-3 space-x-3">
                        <img src={gmail} className="h-7 w-7" />
                        <img src={facebook} className="h-7 w-7" />
                    </div>
                    <p className="text-sm">Not disposing yet ? <a href="/" className="hover:text-darkGreen">Register Now</a></p>
                </div>
                <div className="w-4/5 text-center content-baseline px-0">
                    <div className="flex">
                        <img src={wasteman} alt="wasteman" className="w-1/2" />
                        <img src={wasteman2} alt="wasteman2" className="w-1/2" />
                    </div>
                </div>

            </div></div>
    );
}

export default Login;