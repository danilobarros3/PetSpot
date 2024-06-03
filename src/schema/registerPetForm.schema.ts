import * as yup from "yup";

export const registerPetFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  species: yup.string().required("Espécie é obrigatório"),
  gender: yup.string().required("Genêro é obrigatório"),
  race: yup.string().required("Raça é obrigatório"),
  weight: yup.string().required("Peso é obrigatório"),
  birthday: yup.string().required("Data de nascimento é obrigatória"),
});

export const initialRegisterPetFormValues = {
  name: "",
  species: "",
  gender: "",
  race: "",
  weight: "",
  birthday: "",
};
