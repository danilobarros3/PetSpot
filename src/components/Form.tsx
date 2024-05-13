import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function FormComponentFormik() {
  const handleFormSubmit = (values: any, { setSubmitting }: any) => {
    // Lógica para lidar com os dados do formulário
    console.log(values);
    setSubmitting(false);
  };

  const CadastroSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    obs: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    senha: Yup.string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
    cpf: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido")
      .required("Campo obrigatório"),
  });

  function handleCreate() {
    toast.error(
      "Nossa base de usuário está cheia no momento, tente novamente mais tarde."
    );
  }

  return (
    <Formik
      initialValues={{ nome: "", email: "", senha: "", cpf: "" }}
      validationSchema={CadastroSchema}
      onSubmit={handleFormSubmit}
    >
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
              htmlFor="cpf"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              CPF
            </label>
            <Input
              type="cpf"
              id="cpf"
              name="cpf"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="cpf"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
        </div>

        <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
          <div className="mb-4 w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Telefone
            </label>
            <Input
              type="text"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="phone"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="whats"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Whatsapp
            </label>
            <Input
              type="whats"
              id="whats"
              name="whats"
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
              htmlFor="endereço"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Endereço
            </label>
            <Input
              type="text"
              id="endereço"
              name="endereço"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="endereço"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>

          <div className="mb-4 w-full">
            <label
              htmlFor="neighborhood"
              className="block text-sm font-medium text-gray-700 w-full"
            >
              Bairro
            </label>
            <Input
              type="neighborhood"
              id="neighborhood"
              name="neighborhood"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <ErrorMessage
              name="neighborhood"
              component="p"
              className="text-red-500 text-xs italic"
            />
          </div>
        </div>
        <div className="mb-4 w-full">
          <label
            htmlFor="obs"
            className="block text-sm font-medium text-gray-700 w-full"
          >
            Observação
          </label>
          <ErrorMessage
            name="obs"
            component="p"
            className="text-red-500 text-xs italic"
          />
        </div>

        <Button
          type="submit"
          className="w-full bottom-0"
          onClick={handleCreate}
        >
          Cadastrar
        </Button>
      </Form>
    </Formik>
  );
}
