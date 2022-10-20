import * as yup from "yup";

const AddBloodPressureSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  systolic: yup.string().required("mm is required"),
  diastolic: yup.string().required("Hg is required"),
});

export default AddBloodPressureSchema;
