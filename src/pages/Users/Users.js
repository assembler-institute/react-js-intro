import React from "react";
import axios from "axios";

import withData from "../../hoc/withData";
import Layout from "../../components/Layout";

function request() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
}

function Users({
  auth,
  login,
  logout,
  data = [],
  isLoading,
  hasError,
  errorMessage,
}) {
  return (
    <Layout auth={auth} login={login} logout={logout}>
      <div className="row">
        <div className="col col-12">
          <h1>Users</h1>
        </div>
        <div className="col col-12 mb-3">
          <hr />
        </div>

        {hasError && (
          <div className="col col-12">
            <h3 className="h6">Something went wrong...</h3>
            <pre className="mb-4">
              <code>{errorMessage}</code>
            </pre>
            <hr />
          </div>
        )}

        {isLoading && (
          <>
            <div className="col col-12">
              <h3 className="h6">Loading data...</h3>
            </div>
            <div className="col col-12 mt-2">
              <hr />
            </div>
          </>
        )}

        {data.length > 0 &&
          data.map((user) => (
            <div key={user.id} className="col col-12">
              <h3 className="h6">{user.name}</h3>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default withData(Users, request);
