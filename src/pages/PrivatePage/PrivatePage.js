import React from "react";

import Layout from "../../components/Layout";

function PrivatePage({ auth, login, logout }) {
  return (
    <Layout auth={auth} login={login} logout={logout}>
      <div className="row">
        <div className="col col-12">
          <h1>A very private page</h1>
        </div>
        <div className="col col-12 mb-3">
          <hr />
        </div>
        <div className="col col-12 mb-3">
          <pre>
            <code>
              super important information in here{" "}
              <span role="img" aria-label="see">
                👀
              </span>
            </code>
          </pre>
        </div>
      </div>
    </Layout>
  );
}

export default PrivatePage;
