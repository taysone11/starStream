import { Route } from "react-router-dom";
import FilmsPage from "../pages/FilmsPage";
import HomePage from "../pages/HomePage";
import MyFilmsPage from "../pages/MyFilmsPage";


export const routes = [
    {to:"/", element:<HomePage/>},
    {to:"/films", element:<FilmsPage/>},
    {to:"/myfilms", element:<MyFilmsPage/>}
] 