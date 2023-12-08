import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";  
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGE, logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const gptSeacrchSection = useSelector(store => store.gpt.showGptSearch);

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
             navigate("/")
          }).catch((error) => {
            navigate("/error")
          });
    };

    useEffect( () => {
       const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({
                uid: uid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL,
            }));
             navigate("/browser")
            } else {
              // User is signed out
              dispatch(removeUser());  
              navigate("/")          
            }
          });
          // unsubscribe when component unmounts
          return () => unsubscribed();
        }, []);

        const handleGptSearchClick =() =>{
          dispatch(toggleGptSearchView());
        }
        const handleLanguagechange =(e)=>{
          
          dispatch(changeLanguage(e.target.value));
           
        }

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between bg-black sm: bg-black md: bg-black"> 
            <img 
            className="w-44" 
            src={logo}
            alt="Logo"
            />
            {user && 

        
            <div className="flex p-2">
              {gptSeacrchSection && (
                <select className="p-2 px-4  py-2 m-2 my-2 bg-gray-900 text-white rounded-lg" onChange={handleLanguagechange}>
                {SUPPORTED_LANGUAGE.map((lang) =>(
                   <option  key={lang.identifer} value={lang.identifer}>{lang.name}</option>
                )
                )}
              </select>)}
              <button className="py-2 px-4 m-2 my-2 bg-purple-800 text-white rounded-lg"
              onClick={handleGptSearchClick}>
                {gptSeacrchSection ? "Home Page" : "Search"
                }
              </button>
                <img alt="usericon"
                className="w-12 h-12"
                src={user.photoURL}
                />
                <button onClick={handleSignOut} className="rounded p-2 text-sm text-white">(Sign Out)</button>

            </div>
            }
        </div>
    )
}
export default Header;