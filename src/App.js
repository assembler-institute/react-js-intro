import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Main from "./components/Main";
import Button from "./components/Button";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  render() {
    const { submitted } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <h1>Your profile</h1>
          </div>
          <div className="col col-12 mb-3">
            <hr />
          </div>
          <div className="col col-12">
            <Formik
              initialValues={{
                fullName: "",
                age: 0,
                consentAccepted: false,
                hobby: "",
                description: "",
              }}
              validationSchema={FormSchema}
              onSubmit={(values, props) => {
                console.log(values);
                console.log(props);

                this.setState({ submitted: true });
              }}
            >
              {({
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                errors,
                values,
                isValid,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Your full name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.fullName && errors.fullName
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    {touched.fullName && errors.fullName && (
                      <p className="invalid-feedback">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Your age</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.age && errors.age
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    {touched.age && errors.age && (
                      <p className="invalid-feedback">{errors.age}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="hobby">Your hobby</label>
                    <select
                      name="hobby"
                      id="hobby"
                      value={values.hobby}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.hobby && errors.hobby
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
                    {touched.hobby && errors.hobby && (
                      <p className="invalid-feedback">{errors.hobby}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      cols="20"
                      rows="4"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.description && errors.description
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    {touched.description && errors.description && (
                      <p className="invalid-feedback">{errors.description}</p>
                    )}
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      id="consentAccepted"
                      name="consentAccepted"
                      checked={values.consentAccepted}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.consentAccepted && errors.consentAccepted
                          ? "form-check-input is-invalid"
                          : "form-check-input"
                      }
                    />
                    <label
                      htmlFor="consentAccepted"
                      className="form-check-label"
                    >
                      Do you accept the privacy policy?
                    </label>
                    {touched.consentAccepted && errors.consentAccepted && (
                      <p className="invalid-feedback">
                        {errors.consentAccepted}
                      </p>
                    )}
                  </div>
                  <Button disabled={!isValid} submitButton>
                    Submit
                  </Button>
                  <hr />
                  <pre className="bg-light p-3">
                    <h3 className="h6 font-weight-bold">values</h3>
                    <code>{JSON.stringify(values, null, 2)}</code>
                  </pre>
                  <hr />
                  <pre className="bg-light p-3">
                    <h3 className="h6 font-weight-bold">errors</h3>
                    <code>{JSON.stringify(errors, null, 2)}</code>
                  </pre>
                  <pre className="bg-light p-3">
                    <h3 className="h6 font-weight-bold">touched</h3>
                    <code>{JSON.stringify(touched, null, 2)}</code>
                  </pre>
                </form>
              )}
            </Formik>
          </div>
          {submitted && (
            <div className="col col-12 mt-4">
              <h2 className="h4">Submitted!</h2>
            </div>
          )}
        </section>
      </Main>
    );
  }
}

export default App;
