import * as yup from "yup";

const AddHeartBeatRateSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  rate: yup.string().required("Heart Beat Rate is required"),
});

export default AddHeartBeatRateSchema;
