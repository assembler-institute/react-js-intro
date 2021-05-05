import React from "react";

import Main from "../../components/Main";

function Home({ users }) {
  return (
    <Main>
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
    </Main>
  );
}

export default Home;
