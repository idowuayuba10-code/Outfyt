// import SignUp from "./components/SignUp";

import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Onboarding from "./components/Onboarding";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#212121] min-h-screen">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
