import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";  
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
             navigate("/")
          }).catch((error) => {
            navigate("/error")
          });
    };

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
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
        }, []);

    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"> 
            <img 
            className="w-44" 
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Logo"
            />
            {user && 

        
            <div className="flex p-4">
                <img alt="usericon"
                className="w-10 h-10"
                src={user.photoURL}
                />
                <button onClick={handleSignOut} className="rounded p-2 text-sm text-white">(Sign Out)</button>

            </div>
            }
        </div>
    )
}
export default Header;