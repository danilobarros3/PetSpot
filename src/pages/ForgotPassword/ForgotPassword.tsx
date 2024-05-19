import logo from "../../assets/imageForgotPassword.png";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { toast } from "sonner";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export function ForgotPassword() {
  const navigate = useNavigate();

  function handleRedirect(event: FormEvent) {
    event.preventDefault();
    toast.success("Senha alterada com sucesso.");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  function handleReturnLogin() {
    navigate("/login");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
      <div className="md:max-w-[70%] w-full md:h-[60vh] bg-primary rounded-[40px] flex flex-col rounded-br-[80px] relative">
        <div className="flex-1 flex flex-col md:flex-row h-full">
          <form className="flex-1 md:w-1/2 flex flex-col gap-3 p-5 bg-white rounded-tr-[2.5rem] rounded-br-[5rem] justify-center">
            <div className="flex flex-col items-center px-5 py-8 w-full">
              <span className="text-bg-primary text-4xl text-center font-normal">
                Esqueceu a sua senha?
              </span>
              <span className="text-slate-500 text-lg text-center font-normal mt-4">
                Para redefinir sua senha, informe o e-mail cadastrado na sua
                conta e enviaremos um link com as instruções.
              </span>
              <div className="flex flex-col gap-8 w-full mt-10">
                <Input placeholder="E-mail" />
              </div>
              <span
                className="text-bg-primary text-base cursor-pointer underline text-end w-full mt-2"
                onClick={handleReturnLogin}
              >
                Acessar minha conta
              </span>
              <Button
                variant="default"
                type="button"
                className="bg-primary text-white text-lg w-full rounded-[0.3125rem] h-14 mt-10"
                onClick={handleRedirect}
              >
                Redefinir Senha
              </Button>
            </div>
          </form>
          <div className="flex-1 md:w-1/2 flex items-center justify-center">
            <img src={logo} className="max-w-[400px] md:block hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}