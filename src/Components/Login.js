
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";

const Login =()=>{
    const [isSignInForm, setisSignInForm] = useState(true);
    const[errorMessage, seterrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
       //console.log(email.current.value);
      // console.log(password.current.value);
       const msg=  checkValidateData(email.current.value, password.current.value);
       seterrorMessage(msg);
    }
    const toggleSignInForm =() => {
        setisSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/e89fdb2e-c0bd-46d9-855d-c63a951376cf/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="Logo"
                />

            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute p-5 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className=" font-bold text-3xl py-4"> {isSignInForm? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input 
                    type="text" 
                    placeholder="Full Name"
                    className=" p-4 my-4 w-full bg-gray-800"
                />
                )}
                <input 
                ref={email}
                    type="text" 
                    placeholder="Email Address"
                    className=" p-4 my-4 w-full bg-gray-800"
                />
                <input 
                ref={password}
                    type="password" 
                    placeholder="Password"
                    className=" p-4 my-4 w-full  bg-gray-800"

                />
                <p className=" text-red-600 py-2 text-lg">{errorMessage}</p>
                <button 
                    onClick={handleButtonClick}
                    className="p-4 my-4 bg-red-700 w-full rounded-lg"> {isSignInForm?"Sin In": "Sign Up"}
                 </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm? "New to Netflix? Sign Up Now": " alredy Registed Sign In Now"}
                    
                    </p>

            </form>
            </div>
    )
}
export default Login;