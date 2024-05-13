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
import axios from "axios";
import { Checkbox } from "../../../components/ui/checkbox";

export function FormRegister() {
  const [loading, setLoading] = useState(false);
  const post = async (url: any, data: any) => {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const handleFormRegisterSubmit = async (values: IRegisterInfo) => {
    setLoading(true);
    try {
      const { data } = await post("http://localhost:8080/register", values);
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
      initialValues={initialRegisterFormValues}
      validationSchema={registerFormSchema}
      onSubmit={handleFormRegisterSubmit}
    >
       {({ values, handleChange }) => (
      <Form className="w-full">
        <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Nome
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Sobrenome
            </label>
            <Input
              type="lastname"
              id="lastname"
              value={values.lastname}
              onChange={handleChange}
              name="lastname"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="lastname"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
        </div>

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
        <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
          <div className="mb-4 w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Senha
            </label>
            <Input
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
        </div>
        <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
          <div className="mb-4 w-full">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Data de nascimento
            </label>
            <Input
              type="date"
              id="date"
              onChange={handleChange}
              name="date"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="date"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
        </div>
        <div className="flex justify-between mb-2 mt-2 p-2">
          <Checkbox className="text-black mb-6 size-4 mt-1 border-2 border-black rounded" />
          <p>Eu li e concordo com a Política de Privacidade</p>
        </div>

        <Button
          type="submit"
          className="w-full flex justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6"
        >
          <p className="text-lg">Registre-se</p>
        </Button>
      </Form>
      )}
    </Formik>
  );
}
