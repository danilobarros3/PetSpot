import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  name: yup.string().required("Nome é obrigatório"),
  surname: yup.string().required("Sobrenome é obrigatório"),
  birthday: yup.string().required("Data de nascimento é obrigatória"),
});

export const initialRegisterFormValues = {
  email: "",
  password: "",
  name: "",
  surname: "",
  birthday: "",
  usuario: "PETOWNER",
};
