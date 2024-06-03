import * as yup from "yup";

export const loginUserSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

export const initialLoginFormValues = {
  email: "",
  password: "",
}