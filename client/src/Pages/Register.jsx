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

const Login = () => {
  const [userType, setUserType] = React.useState("user");
  const nameField = React.useRef();
  const emailField = React.useRef();
  const passwordField = React.useRef();
  const addressField = React.useRef();
  const contactField = React.useRef();
  const [showLoginError, setShowLoginError] = React.useState(false);

  const userLoginFunc = async () => {
    let name = nameField.current.value;
    let email = emailField.current.value;
    let address = addressField.current.value;
    let contact = contactField.current.value;
    let password = passwordField.current.value;
    // if (!name || !email || !address || !contact || !password) { setShowLoginError(true); return; }
    let res = await userLogin({ name, email, address, contact, password, user_type: userType });
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
    <div className="bg-white min-h-screen bg-login bg-no-repeat bg-cover bg-center bg-fixed">

      <div className="max-w-7xl flex justify-center md:flex-row flex-col container bg-white min-h-screen">
        <div className="w-2/5 h-screen hidden md:block">
          <div className="min-h-screen flex relative justify-center items-center py-4">
            <div className="absolute w-full h-full bg-black opacity-70 z-[10]  "></div>
            <img src={dustbin} className="w-full absolute h-full" />
            <div className="z-[30] text-white font-semibold  px-10 text-center">
              <p className="capitalize text-2xl pb-10">"Where your trash becomes our mission"</p>
              <p>The more effortless the disposing looks, the more effort the writer actually put into the process.</p>
            </div>
          </div>
        </div>
        <div className="w-3/4 md:w-3/5  text-center md:text-left pl-32 h-screen overflow-y-scroll scrollbar-hide">
          <img src={logo} alt="logo" className="h-16 pt-8 mx-auto md:mx-0" />
          <p className="font-semibold text-sm capitalize">Putting waste in its place</p>
          <p className="text-xl md:text-3xl font-semibold pt-8">Register</p>
          <p className="my-2 text-xs md:text-sm">Let's get started with disposing!</p>
          <div className="w-full md:w-3/5 py-8 space-y-8">
            <div class="relative z-0">
              <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={nameField} onChange={() => setShowLoginError(false)} />
              <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Name</label>
            </div>
            <div class="relative z-0">
              <input type="email" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={emailField} onChange={() => setShowLoginError(false)} />
              <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Email Address</label>
            </div>
            <div class="relative z-0">
              <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={contactField} onChange={() => setShowLoginError(false)} />
              <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Contact</label>
            </div>
            <div class="relative z-0">
              <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={addressField} onChange={() => setShowLoginError(false)} />
              <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Address</label>
            </div>
            <div className="flex space-x-5 text-xs text-gray-500">
              <p>User Type:</p>
              <div className="flex space-x-2">
                <input type="radio" id="user" name="user" value="user" onChange={() => setUserType("user")} />
                <label for="user">User</label>
                <input type="radio" id="admin" name="user" value="admin" onChange={() => setUserType("collector")} />
                <label for="admin">Collector</label>
              </div>
            </div>

            <div class="relative z-0">
              <input type="password" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" ref={passwordField} onChange={() => setShowLoginError(false)} />
              <label for="floating_standard" class="absolute text-sm font-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 -translate-x-7 peer-focus:translate-x-20 md:-translate-x-0 peer-focus:translate-x-0 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Password</label>
            </div>
            {showLoginError && <p className="text-red-500 text-sm">All details are required !</p>}
          </div>
          <button className="bg-green px-8 py-2 rounded-lg hover:bg-darkGreen w-full md:w-3/5" onClick={() => userLoginFunc()}>
            <p className="text-md font-semibold">Register</p>
          </button>
          <button className="border-2 border-green px-8 py-2 rounded-lg hover:bg-darkGreen w-full md:w-3/5 my-3" onClick={() => userLoginFunc()}>
            <p className="text-sm font-semibold flex items-center space-x-4 justify-center">
              <img src={gmail} className="h-5 w-5" />
              <p className="text-xs">
                Sign up with Google</p>
            </p>
          </button>
          <button className="border-2 border-green px-8 py-2 rounded-lg hover:bg-darkGreen w-full md:w-3/5" onClick={() => userLoginFunc()}>
            <p className="text-sm font-semibold flex items-center space-x-4 justify-center">
              <img src={facebook} className="h-5 w-5" />
              <p className="text-xs">
                Sign up with Facebook</p>
            </p>
          </button>

          <p className="text-sm py-4">Already disposing with us? <a href="/login" className="hover:text-darkGreen">Login</a></p>
        </div>


      </div></div>
  );
}

export default Login;