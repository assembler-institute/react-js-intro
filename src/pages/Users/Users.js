import React from "react";
import axios from "axios";

import Main from "../../components/Main";
import withData from "../../hoc/withData";

function request() {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
}

function Users({ data = [], isLoading, hasError, errorMessage }) {
  return (
    <Main>
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
    </Main>
  );
}

export default withData(Users, request);
