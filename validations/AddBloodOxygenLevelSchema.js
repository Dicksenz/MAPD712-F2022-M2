import * as yup from "yup";

const AddBloodOxygenLevelSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  rate: yup.string().required("Blood Oxygen level is required"),
});

export default AddBloodOxygenLevelSchema;
