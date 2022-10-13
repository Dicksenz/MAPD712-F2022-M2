import * as yup from "yup";

const AddPatientSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  mobile: yup.string().required("Mobile is required"),
  address: yup.string().required("Address is required"),
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
});

export default AddPatientSchema;
