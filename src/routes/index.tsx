import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";
import { RegisterPet } from "../pages/RegisterPet/RegisterPet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/esqueceu-a-senha" element={<ForgotPassword />} />
          <Route path="/cadastre-seu-pet" element={<RegisterPet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
