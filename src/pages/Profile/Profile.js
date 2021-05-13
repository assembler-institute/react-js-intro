import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { HOME } from "../../constants/routes";

import Layout from "../../components/Layout";
import ProfileForm from "../../components/ProfileForm";

function Profile({ saveUser }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout>
      <section className="row">
        <div className="col col-12">
          <h1>Your profile</h1>
        </div>
        <div className="col col-12 mb-3">
          <hr />
        </div>
        <div className="col col-12">
          <ProfileForm saveUser={saveUser} setSubmitted={setSubmitted} />
        </div>
        {submitted && <Redirect to={HOME} />}
      </section>
    </Layout>
  );
}

export default Profile;
