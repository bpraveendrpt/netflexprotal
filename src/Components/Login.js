
import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { authar_logo, bg_image } from "../utils/constants";

const Login =()=>{
    const [isSignInForm, setisSignInForm] = useState(true);
    const[errorMessage, seterrorMessage] = useState(null);
    
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
       // Validation checking
       const msg=  checkValidateData(email.current.value, password.current.value);
       seterrorMessage(msg);
        // Authentication

        if(msg) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
                )
  .         then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, 
                photoURL: authar_logo,
              }).then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(
                    addUser({
                  uid: uid, 
                  email: email, 
                  displayName: displayName, 
                  photoURL: photoURL,
              }));
                
              }).catch((error) => {
                // An error occurred
                seterrorMessage(error.Message);
              });
            
            // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-" + errorMessage);
            });

        } else{

            // sign up
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-" + errorMessage);
            });
        }

    }


    
    const toggleSignInForm =() => {
        setisSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            
            <div className=" absolute">
                <img src= {bg_image}
                alt="Logo"
                />

            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute p-5 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className=" font-bold text-3xl py-4"> {isSignInForm? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input 
                    ref ={name}
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