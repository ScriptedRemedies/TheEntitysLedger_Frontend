import './App.css'
import {UserProfile} from "./components/UserProfile.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {SeasonDetail} from "./components/SeasonDetail.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {rootLoader, seasonLoader} from "./config/loaders.ts";
import {StartSeason} from "./components/StartSeason.tsx";
import {startSeasonAction} from "./config/actions.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        loader: rootLoader,
        children: [
            {
                index: true, // "Default page"
                element: <UserProfile />
            },
            {
                path: "season/:id",
                element: <SeasonDetail />,
                loader: seasonLoader
            },
            {
                path: "season/new",
                element: <StartSeason />,
                action: startSeasonAction
            }
        ]
    }
]);

function App() {return <RouterProvider router={router} />;}

export default App
