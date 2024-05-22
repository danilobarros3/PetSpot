import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { ForgotPassword } from "../pages/ForgotPassword/ForgotPassword";
import { RegisterPet } from "../pages/RegisterPet/RegisterPet";
import { AuthProvider } from "../context/authContext";
import PrivateRoute from "../components/PrivateRoute";
import { Feed } from "../pages/Feed/feed"
const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/esqueceu-a-senha" element={<ForgotPassword />} />
          <Route
            path="/cadastre-seu-pet"
            element={
              <PrivateRoute>
                <RegisterPet />
              </PrivateRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <PrivateRoute>
                <Feed/>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
