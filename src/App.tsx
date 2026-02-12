import './App.css'
import {ListOfSeasons} from "./components/views/season/ListOfSeasons.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Season} from "./components/views/season/Season.tsx";
import {HeaderNav} from "./components/smallComponents/HeaderNav.tsx";
import {rootLoader, seasonLoader} from "./config/loaders.ts";
import {StartSeason} from "./components/views/season/StartSeason.tsx";
import {startSeasonAction} from "./config/actions.ts";
import {SeasonRecap} from "./components/views/season/SeasonRecap.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderNav />,
        loader: rootLoader,
        children: [
            {
                index: true, // "Default page"
                element: <ListOfSeasons />
            },
            {
                path: "season/:id",
                element: <Season />,
                loader: seasonLoader
            },
            {
                path: "season/:id/recap",
                element: <SeasonRecap />,
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
