import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
  name: yup.string().required("Nome é obrigatório"),
  lastname: yup.string().required("Sobrenome é obrigatório"),
});

export const initialRegisterFormValues = {
  email: "",
  password: "",
  name: "",
  lastname: "",
}