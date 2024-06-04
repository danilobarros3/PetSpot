import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import registerPet from "../../assets/registerPet.png";
import { ErrorMessage, Form, Formik } from "formik";
import {
  initialRegisterPetFormValues,
  registerPetFormSchema,
} from "../../schema/registerPetForm.schema";
import { useEffect, useState } from "react";
import { IPetInfo } from "../../types/petInfo";
import { toast } from "sonner";
import api from "../../services";
import { useNavigate } from "react-router-dom";
import { catchError } from "../../utils/catchError";
import { LoaderCircle } from "lucide-react";
import { Layout } from "../../Layout";
import { useAuth } from "../../hooks/useAuth";

export function RegisterPet() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();
  const handleFormRegisterPetSubmit = async (values: IPetInfo) => {
    const petInfo: IPetInfo = {
      ...values,
      species: Number(values.species),
      gender: Number(values.gender),
    };
    setLoading(true);
    try {
      const { data } = await api.post(`/${userId}/pet`, petInfo);
      toast.success(data.message);
      setTimeout(() => {
        navigate("/feed");
      }, 1000);
    } catch (error) {
      console.error(error);
      catchError(error, "Erro ao cadastrar o pet. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  return (
    <>
      <Layout>
      <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl p-4">
        <div className="grid md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold text-4xl md:text-6xl md:mt-10 mt-5 md:mb-2">
              Cadastre seu Pet
            </p>
            <div className="w-full md:w-[70%] mt-10 rounded-2xl p-2">
              <div>
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
                            className="border-2 rounded-2xl w-full p-2 border-white bg-white mt-4"
                          >
                            <option value="" disabled hidden>
                              Selecione a espécie
                            </option>
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
                            className="border-2 rounded-2xl w-full border-white p-2 mt-4 bg-white"
                          >
                            <option value="" disabled hidden>
                              Selecione o gênero
                            </option>
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
                      <div className="flex justify-between mb-5 mt-5 p-2 gap-2">
                        <Checkbox className="text-black mb-6 size-4 mt-1 border-2 border-black rounded" />
                        <p>Eu li e concordo com a Política de Privacidade</p>
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
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={registerPet}
              alt="Login"
              className="w-full max-h-full md:block hidden"
            />
          </div>
        </div>
      </div>
      <Footer />
      </Layout>
    </>
  );
}
