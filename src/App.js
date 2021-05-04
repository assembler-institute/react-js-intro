import React, { Component } from "react";

import Main from "./components/Main";
import Input from "./components/Input";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(this.state);
  }

  render() {
    const { firstName } = this.state;
    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <Input
                  label="First name"
                  placeholder="Your first name"
                  type="text"
                  id={firstName}
                  name={firstName}
                  value={firstName}
                  handleChange={this.handleChange}
                />
              </div>
              <Button submitButton>Submit</Button>
            </form>
          </div>
          <div className="col col-12 mt-4">
            <pre className="bg-light p-3">
              <code>{JSON.stringify(this.state, null, 2)}</code>
            </pre>
          </div>
        </section>
      </Main>
    );
  }
}

export default App;
