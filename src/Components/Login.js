import Header from "./Header";

const Login =()=>{
    return(
        <div>
            <Header />
            
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/e89fdb2e-c0bd-46d9-855d-c63a951376cf/US-en-20231127-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="Logo"
                />

            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className=" font-bold text-3xl py-4"> Sign In</h1>
                <input 
                    type="text" 
                    placeholder="Email Address"
                    className=" p-4 my-4 w-full bg-gray-800"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className=" p-4 my-4 w-full  bg-gray-800"

                />
                <button className=" p-4 my-4 bg-red-700 w-full rounded-lg"> Sin In</button>
                <p className="py-4">New to Netflix? Sign Up Now</p>

            </form>
            </div>
    )
}
export default Login;