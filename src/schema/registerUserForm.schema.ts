import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: yup.string().required("Senha é obrigatória"),
  nome: yup.string().required("Nome é obrigatório"),
  sobrenome: yup.string().required("Sobrenome é obrigatório"),
  dataDeNascimento: yup.string().required("Data de nascimento é obrigatória"),
});

export const initialRegisterFormValues = {
  email: "",
  senha: "",
  nome: "",
  sobrenome: "",
  dataDeNascimento: "",
}