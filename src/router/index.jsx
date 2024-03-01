import Layout from "@/pages/Layout"; // src/pages/layout
import Login from "@/pages/Login";
import {createBrowserRouter} from "react-router-dom";
import {AuthRoute} from '@/components/AuthRoute';
import Home from "@/pages/Home";
import Visualization from "@/components/Visualization";
import HealthHabit from '@/components/HealthHabit';
import DiaryEntries from "@/components/DiaryEntries";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute> <Layout/> </AuthRoute>,
        children:[
            {   
                path:'home',
                element: <Home/>
            },
            {
                path:'diary',
                element: <DiaryEntries/>
            },
            {   
                path:'healthTracker',
                element: <HealthHabit/>
            },
            {
                path:'healthAnalysis',
                element: <Visualization />
            }//,
            // {
            //     path:'carouseldemo',
            //     element: <DiaryEntries/>
            // },
        
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
  ]);

  export default router