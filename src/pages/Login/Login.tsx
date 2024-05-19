import imageLogin from "../../assets/imageLogin.png";
import logoGoogle from "../../assets/iconGoogle.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/ui/button";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { toast } from "sonner";
import api from "../../services";
import { ILoginInfo } from "../../types/loginInfo";
import { ErrorMessage, Form, Formik } from "formik";
import { Input } from "../../components/ui/input";
import { initialLoginFormValues, loginUserSchema } from "../../schema/loginUserForm.schema";
import { LoaderCircle } from "lucide-react";
import { catchError } from "../../utils/catchError";
import { Footer } from "../../components/Footer";
export function Login() {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [loading, setLoading] = useState(false);
  function handleForgotPassword() {
    navigate("/esqueceu-a-senha");
  }
  function handleRegister() {
    navigate("/cadastro");
  }

  const handleFormLoginSubmit = async (values: ILoginInfo) => {
    setLoading(true);
    setTimeout(async () => {
    try {
      const { data } = await api.post("/login", values);
      toast.success(data.message);
      signin(data.token, data.name, data.email);
      navigate("/cadastre-seu-pet");
    } catch (error) {
      console.error(error);
      catchError(error, "Erro ao realizar o login. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }, 1000);
  };

  return (
    <>
      <Header />
      <div className="w-full bg-primary justify-center items-center rounded-3xl">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold md:text-7xl text-5xl mt-5 mb-6">PetSpot</p>
            <p>Unificando ainda mais você e seu Pet!</p>
            <div className="w-full md:w-[70%] mt-10 rounded-2xl p-2">
              <Button className="border-2 rounded-2xl text-black border-white bg-white p-4 mt-4 mb-5 py-5 w-full">
                <div className="flex items-center gap-3">
                  <img src={logoGoogle} width={30} alt="Google" />
                  <p>Login pelo Google</p>
                </div>
              </Button>
              <div>
              <Formik
                initialValues={initialLoginFormValues}
                validationSchema={loginUserSchema}
                onSubmit={handleFormLoginSubmit}
              >
                {({ values, handleChange }) => (
                  <Form className="w-full">
                    <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
                      <div className="mb-4 w-full">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 w-full"
                        >
                          E-mail
                        </label>
                        <Input
                          type="text"
                          id="email"
                          onChange={handleChange}
                          value={values.email}
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

                    <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
                      <div className="mb-4 w-full">
                        <label
                          htmlFor="senha"
                          className="block text-sm font-medium text-gray-700 w-full"
                        >
                          Senha
                        </label>
                        <Input
                          type="password"
                          id="senha"
                          onChange={handleChange}
                          value={values.senha}
                          name="senha"
                          className="mt-1 p-2 w-full border rounded-md"
                        />
                        <ErrorMessage
                          name="senha"
                          component="p"
                          className="text-red-500 text-xs italic"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <p
                        className="mt-2 mb-5 cursor-pointer underline"
                        onClick={handleForgotPassword}
                      >
                        Esqueceu sua senha?
                      </p>
                    </div>
                    <Button className="w-full flex gap-2 justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6">
                    {loading && <LoaderCircle className="animate-spin" />}
                      <p className="text-lg">Login</p>
                    </Button>
                  </Form>
                )}
              </Formik>
              </div>
              <p
                className="mt-10 flex justify-center cursor-pointer underline"
                onClick={handleRegister}
              >
                Não possui uma conta? Registra-se
              </p>
            </div>
          </div>
          <div className="grid md:flex justify-center items-center">
            <img
              src={imageLogin}
              alt="Login"
              className="w-full max-h-full rounded-4xl hidden md:block"
            />
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
}
