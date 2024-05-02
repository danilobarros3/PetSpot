import imageLogin from "../assets/imageLogin.png";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import logoGoogle from "../assets/iconGoogle.png";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
export function Login() {
  const navigate = useNavigate();
  function handleForgotPassword() {
    navigate("/esqueceu-a-senha");
  }
  function handleRegister() {
    navigate("/cadastro");
  }
  return (
    <>
      <Header />
      <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold text-7xl mt-5 mb-6">PetSpot</p>
            <p>Unificando ainda mais você e seu Pet!</p>
            <div className="w-[70%] mt-10 rounded-2xl p-2">
              <Button className="border-2 rounded-2xl text-black border-white bg-white p-4 mt-4  py-5 w-full">
                <div className="flex items-center gap-3">
                  <img src={logoGoogle} width={30} alt="Google" />
                  <p>Login pelo Google</p>
                </div>
              </Button>
              <Input
                type="text"
                placeholder="E-mail"
                className="border-2 rounded-2xl text-red bg-white  p-4 mt-4  py-5"
              />
              <Input
                type="password"
                placeholder="Senha"
                className="border-2 rounded-2xl text-black p-4 mt-4 bg-white  py-5"
              />
              <div className="flex justify-end">
                <p
                  className="mt-2 mb-5 cursor-pointer underline"
                  onClick={handleForgotPassword}
                >
                  Esqueceu sua senha?
                </p>
              </div>
              <Button className="w-full flex justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6">
                <p className="text-lg">Login</p>
              </Button>
              <p
                className="mt-10 flex justify-center cursor-pointer underline"
                onClick={handleRegister}
              >
                Não possui uma conta? Registra-se
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imageLogin}
              alt="Login"
              className="w-full max-h-full rounded-4xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
