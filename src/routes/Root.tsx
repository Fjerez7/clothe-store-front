import {useRoutes} from "react-router-dom";
import Home from "../pages/Home/Home.tsx";


export const Root = () => {
    return useRoutes([
        {
            path: '/',
            element: <Home/>
        }
    ])
}