import React from "react";

import Main from "../../components/Main";
import withAuth from "../../hoc/withAuth";

function PrivatePage() {
  return (
    <Main>
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
    </Main>
  );
}

export default withAuth(PrivatePage);
