import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "The full name is too short")
    .max(80, "The full name is too long")
    .required("The full name is required"),
  age: Yup.number()
    .min(18, "You must be 18 years old or older")
    .max(72, "You must be 72 years old or younger")
    .required("The age is required"),
  consentAccepted: Yup.bool().oneOf([true], "The consent must be accepted"),
  hobby: Yup.string()
    .oneOf(
      ["Programming", "Running", "Skying", "Eating"],
      "The hobby must be one of these: 'Programming', 'Running', 'Skying', 'Eating'"
    )
    .required("The hobby is required"),
  description: Yup.string()
    .min(2, "The description is too short")
    .max(200, "The description is too long")
    .required("The hobby is required"),
});

export default FormSchema;
