import imageLogin from "../../assets/imageLogin.png";
import logoGoogle from "../../assets/iconGoogle.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { FormLogin } from "./components/FormLogin";
export function Login() {
  const navigate = useNavigate();
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
              <FormLogin />
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
