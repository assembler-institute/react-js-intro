import React from "react";

import Layout from "../../components/Layout";

function Home({ users, auth, login, logout }) {
  return (
    <Layout auth={auth} login={login} logout={logout}>
      <div className="row">
        <div className="col col-12">
          <h1>Home</h1>
        </div>
        <div className="col col-12 mb-3">
          <hr />
        </div>

        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="col col-12">
              <pre className="mb-3">
                <code>
                  {user.fullName} likes: {user.hobby}
                </code>
              </pre>
              <hr />
            </div>
          ))
        ) : (
          <>
            <div className="col col-12">
              <pre className="m-0">
                <code>no users</code>
              </pre>
            </div>
            <div className="col col-12 mt-3">
              <hr />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Home;
