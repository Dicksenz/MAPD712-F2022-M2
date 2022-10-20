import * as yup from "yup";

const AddRespiratoryRateSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  rate: yup.string().required("Respiratory rate is required"),
});

export default AddRespiratoryRateSchema;
