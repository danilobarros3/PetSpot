import { Formik, Form, ErrorMessage } from "formik";
import { toast } from "sonner";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import {
  initialRegisterFormValues,
  registerFormSchema,
} from "../../../schema/registerUserForm.schema";
import { IRegisterInfo } from "../../../types/registerInfo";
import { useState } from "react";
import { Checkbox } from "../../../components/ui/checkbox";
import api from "../../../services";
import { catchError } from "../../../utils/catchError";
import { Info, LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";

export function FormRegister() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFormRegisterSubmit = async (values: IRegisterInfo) => {
    setLoading(true);
    try {
      const { data } = await api.post("/register", values);
      toast.success(data.message);
      setTimeout(() => {
        navigate("/cadastre-seu-pet");
      }, 1000);
    } catch (error) {
      console.error(error);
      catchError(error, "Erro ao se cadastrar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialRegisterFormValues}
      validationSchema={registerFormSchema}
      onSubmit={handleFormRegisterSubmit}
    >
      {({ values, handleChange }) => (
        <Form className="w-full">
          <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Nome
              </label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={values.nome}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="nome"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>

            <div className="mb-4 w-full">
              <label
                htmlFor="sobrenome"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Sobrenome
              </label>
              <Input
                type="sobrenome"
                id="sobrenome"
                value={values.sobrenome}
                onChange={handleChange}
                name="sobrenome"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="sobrenome"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>
          <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <label
                htmlFor="dataDeNascimento"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Data de nascimento
              </label>
              <Input
                type="date"
                id="dataDeNascimento"
                onChange={handleChange}
                name="dataDeNascimento"
                className="mt-1 p-2 w-full border rounded-md"
              />
              <ErrorMessage
                name="dataDeNascimento"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>
          <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
            <div className="mb-4 w-full">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                E-mail
              </label>
              <Input
                type="email"
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
          <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
            <div className="mb-4 w-full relative">
              <label
                htmlFor="senha"
                className="block text-sm font-medium text-gray-700 w-full"
              >
                Senha
              </label>
              <div className="flex items-center mt-1 relative">
                <Input
                  type="password"
                  id="senha"
                  value={values.senha}
                  onChange={handleChange}
                  name="senha"
                  className="p-2 w-full border rounded-md pr-10"
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="absolute right-2 grid">
                      <Info />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Sua senha precisa ter pelo menos uma letra maiúscula,
                        uma minúsculas, um número e um caracter especial.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <ErrorMessage
                name="senha"
                component="p"
                className="text-red-500 text-xs italic"
              />
            </div>
          </div>

          <div className="flex justify-between mb-2 mt-2 p-2 gap-2">
            <Checkbox className="text-black mb-6 size-4 mt-1 border-2 border-black rounded" />
            <p>Eu li e concordo com a Política de Privacidade</p>
          </div>

          <Button
            type="submit"
            className="w-full flex justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6 gap-2 hover:text-black"
          >
            {loading && <LoaderCircle className="animate-spin" />}
            <p className="text-lg">Registre-se</p>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
