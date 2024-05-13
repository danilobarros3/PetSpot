import { Formik, Form, ErrorMessage } from "formik";
import { toast } from "sonner";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  initialLoginFormValues,
  loginUserSchema,
} from "../../../schema/loginUserForm.schema";
import { ILoginInfo } from "../../../types/loginInfo";
import { useState } from "react";
import api from "../../../services";

export function FormLogin() {
  const [_, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleForgotPassword() {
    navigate("/esqueceu-a-senha");
  }
  
  const handleFormLoginSubmit = async (values: ILoginInfo) => {
    setLoading(true);
    try {
      const { data } = await api.post("http://localhost:8080/login", values);
      toast.success(data.message);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <Button className="w-full flex justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6">
            <p className="text-lg">Login</p>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
