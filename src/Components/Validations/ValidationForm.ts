import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup.object({
  firstName: yup.string().required("ce champs est obligatoire"),
  lastName: yup.string().required("ce champs est obligatoire"),
  pseudo: yup.string().required("ce champs est obligatoire"),
  city: yup.string().required("ce champs est obligatoire"),
  promoCode: yup.string().required("ce champs est obligatoire"),
  email: yup.string().email("email valid").required(),
  age: yup.string().required("ce champs est obligatoire"),
  password: yup
    .string()
    .matches(/[a-z]/, "il faut aumoins un miniscule")
    .matches(/[A-Z]/, "il faut aumoins un majuscule")
    .matches(/[1-9]/, "il faut aumoins un chiffre")
    .min(8, "minimum 8 ")
    .required("ce champs est obligatoire")
    .required("champs obligatoire"),
  confirmPassword: yup
    .string()
    .matches(/[a-z]/, "il faut aumoins un miniscule")
    .matches(/[A-Z]/, "il faut aumoins un majuscule")
    .matches(/[1-9]/, "il faut aumoins un chiffre")

    .min(8, "minimum 8 ")
    .required("ce champs est obligatoire")
    .required("champs obligatoire"),
});
