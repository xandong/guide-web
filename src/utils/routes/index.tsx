import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Login } from "../../pages/auth/Login";
import { CheckIn } from "../../pages/CheckIn";
import Home from "../../pages/Home";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/check-in" element={<CheckIn />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
