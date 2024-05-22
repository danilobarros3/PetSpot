import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import {
  getInTouchSchema,
  initialGetInTouchFormValues,
} from "../schema/getInTouchForm.schema";

export function FormGetInTouch() {
  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialGetInTouchFormValues}
      validationSchema={getInTouchSchema}
      onSubmit={handleFormSubmit}
    >
      <Form className="w-full p-5">
        <div className="w-full">
          <div className="mb-6 w-full">
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 w-full text-start"
            >
              Nome
            </label>
            <Input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="nome"
              component="p"
              className="text-red-500 text-xs italic text-start"
            />
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="sobrenome"
              className="block text-sm font-medium text-gray-700 w-full text-start"
            >
              Sobrenome
            </label>
            <Input
              type="sobrenome"
              id="sobrenome"
              name="sobrenome"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="sobrenome"
              component="p"
              className="text-red-500 text-xs italic text-start"
            />
          </div>
        </div>
        <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
          <div className="mb-6 w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 w-full text-start"
            >
              E-mail
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-xs italic text-start"
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 w-full text-start"
          >
            Mensagem
            <Textarea
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
          <ErrorMessage
            name="message"
            component="p"
            className="text-red-500 text-xs italic text-start"
          />
        </div>
        <div className="flex mt-10 p-2 gap-2">
          <Checkbox className="text-black mb-6 size-4 mt-1 border-2 border-black rounded" />
          <p>Eu li e concordo com a Política de Privacidade</p>
        </div>
        <Button type="submit" className="w-full mt-5 mb-5 bg-black text-white hover:text-black">
          Entrar em contato
        </Button>
      </Form>
    </Formik>
  );
}
