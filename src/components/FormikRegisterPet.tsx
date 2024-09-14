import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { IPetInfo } from "../types/petInfo";
import api from "../services";
import { toast } from "sonner";
import { catchError } from "../utils/catchError";
import { ErrorMessage, Form, Formik } from "formik";
import {
  initialRegisterPetFormValues,
  registerPetFormSchema,
} from "../schema/registerPetForm.schema";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

export function FormikRegisterPet() {
  const [loading, setLoading] = useState(false);
  const { userId } = useAuth();
  const handleFormRegisterPetSubmit = async (values: IPetInfo) => {
    const petInfo: IPetInfo = {
      ...values,
      species: Number(values.species),
      gender: Number(values.gender),
      birthday: formatDate(values.birthday),
    };
    setLoading(true);
    try {
      const { data } = await api.post(`/${userId}/pet`, petInfo);
      toast.success(data.message);
    } catch (error) {
      console.error(error);
      catchError(error, "Erro ao cadastrar o pet. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  }

  return (
    <>
      <Formik
        initialValues={initialRegisterPetFormValues}
        validationSchema={registerPetFormSchema}
        onSubmit={handleFormRegisterPetSubmit}
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
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>
            <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
              <div className="mb-4 w-full">
                <label
                  htmlFor="species"
                  className="block text-sm font-medium text-gray-700 w-full"
                >
                  Espécie
                </label>
                <select
                  id="species"
                  name="species"
                  onChange={handleChange}
                  value={values.species}
                  className="border-2 rounded-2xl w-full p-2 border-black bg-white mt-4"
                >
                  <option value="" disabled hidden>
                    Selecione a espécie
                  </option>
                  <option value="0">Desconhecido(a)</option>
                  <option value="1">Cachorro</option>
                  <option value="2">Gato</option>
                </select>
                <ErrorMessage
                  name="species"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 w-full"
                >
                  Gênero
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                  value={values.gender}
                  className="border-2 rounded-2xl w-full border-black p-2 mt-4 bg-white"
                >
                  <option value="" disabled hidden>
                    Selecione o gênero
                  </option>
                  <option value="0">Desconhecido(a)</option>
                  <option value="1">Macho</option>
                  <option value="2">Fêmea</option>
                </select>
                <ErrorMessage
                  name="gender"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>
            <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
              <div className="mb-4 w-full">
                <label
                  htmlFor="race"
                  className="block text-sm font-medium text-gray-700 w-full"
                >
                  Raça
                </label>
                <Input
                  type="text"
                  id="race"
                  onChange={handleChange}
                  value={values.race}
                  name="race"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage
                  name="race"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-gray-700 w-full"
                >
                  Peso
                </label>
                <Input
                  type="text"
                  id="weight"
                  onChange={handleChange}
                  value={values.weight}
                  name="weight"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage
                  name="weight"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>
            <div className="w-full lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:gap-4">
              <div className="mb-4 w-full">
                <label
                  htmlFor="birthday"
                  className="block text-sm font-medium text-gray-700 w-full"
                >
                  Data de nascimento
                </label>
                <Input
                  type="date"
                  id="birthday"
                  onChange={handleChange}
                  value={values.birthday}
                  name="birthday"
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <ErrorMessage
                  name="birthday"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full flex justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6 hover:text-black"
            >
              {loading && <LoaderCircle className="animate-spin" />}
              <p className="text-lg">Finalizar cadastro</p>
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
