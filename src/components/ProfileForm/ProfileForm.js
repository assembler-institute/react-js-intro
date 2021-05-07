import React from "react";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";

import Button from "../Button";
import FormSchema from "./form-schema";

function ProfileForm({ setSubmitted, saveUser }) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: 0,
      consentAccepted: false,
      hobby: "",
      description: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      saveUser({ id: uuid(), ...values });

      setTimeout(() => {
        setSubmitted(true);
      }, 500);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Your full name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.fullName && formik.errors.fullName
              ? "form-control is-invalid"
              : "form-control"
          }
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <p className="invalid-feedback">{formik.errors.fullName}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="age">Your age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.age && formik.errors.age
              ? "form-control is-invalid"
              : "form-control"
          }
        />
        {formik.touched.age && formik.errors.age && (
          <p className="invalid-feedback">{formik.errors.age}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="hobby">Your hobby</label>
        <select
          name="hobby"
          id="hobby"
          value={formik.values.hobby}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.hobby && formik.errors.hobby
              ? "form-control is-invalid"
              : "form-control"
          }
        >
          <option value="choose">Choose a hobby</option>
          <option value="Programming">Programming</option>
          <option value="Running">Running</option>
          <option value="Skying">Skying</option>
          <option value="Eating">Eating</option>
        </select>
        {formik.touched.hobby && formik.errors.hobby && (
          <p className="invalid-feedback">{formik.errors.hobby}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          cols="20"
          rows="4"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.description && formik.errors.description
              ? "form-control is-invalid"
              : "form-control"
          }
        />
        {formik.touched.description && formik.errors.description && (
          <p className="invalid-feedback">{formik.errors.description}</p>
        )}
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          id="consentAccepted"
          name="consentAccepted"
          checked={formik.values.consentAccepted}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.consentAccepted && formik.errors.consentAccepted
              ? "form-check-input is-invalid"
              : "form-check-input"
          }
        />
        <label htmlFor="consentAccepted" className="form-check-label">
          Do you accept the privacy policy?
        </label>
        {formik.touched.consentAccepted && formik.errors.consentAccepted && (
          <p className="invalid-feedback">{formik.errors.consentAccepted}</p>
        )}
      </div>
      <Button disabled={!formik.isValid} submitButton>
        {formik.isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}

export default ProfileForm;
