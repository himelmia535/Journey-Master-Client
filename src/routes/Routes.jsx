import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import PrivateAddTouristsSpot from "../pages/PrivateAddTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import PrivateMyList from "../pages/PrivateMyList";
import MyList from "../pages/MyList";
import Details from "../components/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/touristsSpot')
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('http://localhost:5000/touristsSpot')
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/touristsSpot/${params.id}`)
            },
            {
                path: '/addTouristsSpot',
                element: <PrivateAddTouristsSpot><AddTouristsSpot></AddTouristsSpot></PrivateAddTouristsSpot> 
            },
            {
                path: '/myList',
                element: <PrivateMyList><MyList></MyList></PrivateMyList>,
                loader: () => fetch('http://localhost:5000/touristsSpot')
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
        ]
    }
]);
export default router;