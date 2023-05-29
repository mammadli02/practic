import * as yup from 'yup';
export const ImageValidation = yup.object().shape({
 name:yup
 .string().required("name is required"),
 age:yup
 .number().required("age is required"),
 image:yup
 .string().required("image is required")
  });