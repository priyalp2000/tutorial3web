import { Route, Routes } from "react-router-dom";
import { Registration }  from "./Registration.jsx";
import { Profile } from "./Profile.jsx";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Registration />}/>
        <Route exact path="/registration" element={<Registration />}/>
        <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

export default App
