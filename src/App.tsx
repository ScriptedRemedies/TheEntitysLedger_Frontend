import './App.css'
import {UserProfile} from "./components/UserProfile.tsx";
import {Route, Routes} from "react-router-dom";
import {SeasonDetail} from "./components/SeasonDetail.tsx";

function App() {
    const userId = 1;

  return (
    <main>
        <h1>The Entity's Ledger</h1>
        <Routes>
            <Route path="/" element={<UserProfile userId={userId} />} />
            <Route path="/season/:id" element={<SeasonDetail />} />
        </Routes>
    </main>
  )
}

export default App
