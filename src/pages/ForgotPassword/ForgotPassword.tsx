import logo from "../../assets/imageForgotPassword.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ErrorMessage, Form, Formik } from "formik";
import {
  forgotPasswordSchema,
  initialForgotPassword,
} from "../../schema/forgotPassowrd.schema";
import { IForgotPasswordInfo } from "../../types/forgotPassword";
import api from "../../services";
import { catchError } from "../../utils/catchError";
import { LoaderCircle } from "lucide-react";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormForgotPassword = async (values: IForgotPasswordInfo) => {
    setLoading(true);
    try {
      const { data } = await api.post("/forgot", values);
      toast.success(data.message);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error(error);
      catchError(error, "Erro ao trocar a senha. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

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
                <Formik
                  initialValues={initialForgotPassword}
                  validationSchema={forgotPasswordSchema}
                  onSubmit={handleFormForgotPassword}
                >
                  {({ values, handleChange }) => (
                    <Form className="w-full">
                      <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
                        <div className="mb-4 w-full">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 w-full"
                          >
                            Email
                          </label>
                          <Input
                            type="text"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md"
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-500 text-xs italic"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="bg-primary text-white text-lg w-full rounded-[0.3125rem] h-14 mt-10 hover:text-black"
                      >
                        {loading && <LoaderCircle className="animate-spin" />}
                        Redefinir senha
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
              <span
                className="text-bg-primary text-base cursor-pointer underline text-end w-full mt-5"
                onClick={handleReturnLogin}
              >
                Acessar minha conta
              </span>
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
