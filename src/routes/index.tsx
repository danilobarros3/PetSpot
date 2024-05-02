import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ForgotPassword } from "../pages/ForgotPassword";
import { RegisterPet } from "../pages/RegisterPet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/esqueceu-a-senha" element={<ForgotPassword />} />
          <Route path="/cadastre-seu-pet" element={<RegisterPet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
