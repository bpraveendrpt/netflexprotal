import { createBrowserRouter } from "react-router-dom";
import Browser from "./Browser";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import Error from "./Error";

const Body = () =>{

    const appRouter = createBrowserRouter([
        {
            path: "",
            element: <Login />

        },
        {
            path: "/browser",
            element: <Browser />
        },
        {
            path: "/error",
            element: <Error />
        },
    ]);

    return(
        <div>
            <RouterProvider  router={appRouter} />
        </div>
    )
}
export default Body;