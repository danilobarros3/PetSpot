import * as yup from "yup";

export const getInTouchSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  nome: yup.string().required("Nome é obrigatório"),
  sobrenome: yup.string().required("Sobrenome é obrigatório"),
  obs: yup.string().required("Observação é obrigatória"),
});

export const initialGetInTouchFormValues = {
  nome: "",
  sobrenome: "",
  email: "",
  obs: "",
};
