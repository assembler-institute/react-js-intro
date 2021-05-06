`#react.js-intro` `#assembler-school` `#master-in-software-engineering`

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Assembler School: React.js Intro Workshop <!-- omit in toc -->

In this workshop we will learn how to use React.js to build modern SPA.

## Getting Started

### The repository

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/react-js-intro.git
```

### Dependencies

Before we can get started you will need to make sure that all the necessary dependencies are installed in your system.

### Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents of each section.

The main branch includes the base repository and the getting started with React.js guide while the following include more advanced concepts such as working with forms or the Context API.

Each branch adds more contents to the `README.md` file and the folder structure.

### Fetching All the Branches

In order to fetch all the remote branches in the repository you can use the following command or by creating a fork of this current repository.

```bash
$ git fetch --all

# List both remote-tracking branches and local branches
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following command:

```bash
$ git checkout -b <new_branch_name> <remote_branch_name>
```

## Table of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
- [Part I. What is React?](#part-i-what-is-react)
- [Why use react?](#why-use-react)
- [Creating a React App](#creating-a-react-app)
- [JSX](#jsx)
- [Render](#render)
- [React Only Updates What’s Necessary](#react-only-updates-whats-necessary)
- [Components and Props](#components-and-props)
- [Styles In React.js](#styles-in-reactjs)
- [Lists and Keys](#lists-and-keys)
- [Part II. State and Lifecycle](#part-ii-state-and-lifecycle)
- [Lifecycle Methods](#lifecycle-methods)
- [Using State Correctly](#using-state-correctly)
- [The Data Flows Down](#the-data-flows-down)
- [Handling Events](#handling-events)
- [Practical Examples](#practical-examples)
- [Part III. Forms and Events](#part-iii-forms-and-events)
- [Controlled Components](#controlled-components)
- [Handling Multiple Inputs](#handling-multiple-inputs)
- [Part IV. Formik](#part-iv-formik)
- [Part V. React Router Intro](#part-v-react-router-intro)
- [Quick Start](#quick-start)
- [BrowserRouter](#browserrouter)
- [Higher-Order Components](#higher-order-components)
- [Use HOCs For Cross-Cutting Concerns](#use-hocs-for-cross-cutting-concerns)
- [A First Example: `withData(Component)`](#a-first-example-withdatacomponent)
- [A Second Example: `withAuth(Component)`](#a-second-example-withauthcomponent)
- [Learn More About Create React App](#learn-more-about-create-react-app)

---

## Part I. What is React?

React is a JavaScript library for building user interfaces. It is an open-source, component-based, front-end library responsible only for the application’s view layer.

React is the most popular front-end JavaScript library in the field of web development. It was created by Jordan Walke, a software engineer at Facebook.

### Instagram Made With React.js

Let’s take a look at an Instagram webpage example, entirely built using React, to get a better understanding of how React works.

<img src='src/img/react-components-intro.png'>

As the illustration shows, with React we divide the UI into multiple components, which makes the code easier to debug. This way, each component has its property and function.

This would be an example of what that would look like in `JSX`

```jsx
function App() {
  return (
    <div className="App">
      <Search />
      <ProfileDescription />
      <Stories />
      <SinglePost />
      <PostList />
    </div>
  );
}
```

## Why use react?

Now that we know what React is, let’s move on and see why React is the most popular front-end library for web application development.

#### ✅ Improved Performance

React uses a Virtual DOM and compares the components’ previous states and updates only the items in the Real DOM that were changed, instead of updating all of the components again, as conventional web applications do.

#### ✅ Reusable Components

Components can be reused throughout the application, which in turn dramatically reduces the application’s development time.

#### ✅ Unidirectional Data Flow

When designing a React app, developers often nest child components within parent components and it becomes easier to debug errors and know where a problem occurs in an application at the moment in question.

#### ✅ Small Learning Curve

It can be used for the development of both web and mobile apps: There is a framework called React Native, derived from React itself, that is used for creating beautiful mobile applications.

#### ✅ Dedicated Tools for Easy Debugging

React also has a Chrome extension that can be used to debug React applications.

## Creating a React App

To start using React we only need to install the official Create React App package.

However this project was already bootstrapped with it so you can try it out in a different folder on your computer.

```sh
npm i -g create-react-app
```

Command to build a react app from scratch after we have installed it:

```sh
create-react-app myapp
```

### Folder Structure

This is a sample folder structure that the `create-react-app` cli tool creates. This is the most common folder structure of a React app, although you can modify it if you need to.

```sh
.
├── LICENSE
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
└── src
```

#### `/public`

`/public` is where your static files reside. If the file is not imported by your JavaScript application and must maintain its file name, put it here.

Files in the public directory will maintain the same file name in production, which typically means that they will be cached by your client and never downloaded again.

```sh
public
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

#### `/src`

`/src` is where your dynamic files reside. If the file is imported by your JavaScript application or changes contents, put it here.

> ⚠️ The fields listed bellow are the ones that the base Create React App cli tool installs by default, some of them are removed in this repo because we don't need them.

```sh
src
├── App.js
├── App.css
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── serviceWorker.js
├── reportWebVitals.js
└── setupTests.js
```

## JSX

JSX is a syntax extension to JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code. This makes the code easier to understand and debug, as it avoids the usage of complex JavaScript DOM structures.

JSX Example:

```jsx
function App() {
  const fullName = "Josh Perez";

  const element = <h1>Hello, {fullName}</h1>;

  return element;
}
```

```jsx
function App() {
  return <PostList />;
}

function PostList() {
  const posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
  ];

  return posts.map((el) => <div key={el.id}>{el.title}</div>);
}
```

### Specifying Attributes with JSX

- You can use quotes to specify string literals as attributes.
- You can also use curly braces to embed a JavaScript expression in an attribute.

```jsx
function App() {
  return <Button id="1" />;
}

function Button(props) {
  return <button id={props.id}>Click id: {props.id}</button>;
}
```

### Specifying Children with JSX

We can also use the `children` prop to render child elements of a component.

```jsx
function App() {
  function handleClick(event) {
    console.log(event.target);
  }
  return <Button handleClick={handleClick}>Click Me</Button>;
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.children}</button>;
}
```

## Render

The `render()` method is used to convert JSX code is to regular JavaScript at runtime. After translation, JSX code looks like this:

```jsx
const element = <h1>Hello, world</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

### Updating the Rendered Element

React elements are **immutable**. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => (prevCount += 1));
  }
  return <Button handleClick={handleClick} count={count} />;
}

function Button(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.handleClick}>Increment</button>
    </div>
  );
}

export default App;
```

## React Only Updates What’s Necessary

After looking at the workshop demo we can see that React DOM compares the element and its children to the previous one, and **only applies the DOM updates necessary** to bring the DOM to the desired state.

## Components and Props

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

The simplest way to define a component is to write a JavaScript function:

```jsx
import React from "react";

function App() {
  return (
    <div>
      <Welcome name="developer" />
      <SecondWelcome name="developer" />
    </div>
  );
}

// Using a functional component
function Welcome(props) {
  // Notice that a functional component should have a return statement
  return <h3>Hello {props.name}</h3>;
}

// Or a class component
class SecondWelcome extends Component {
  // Notice that class components should have a render method
  render() {
    return <h1>Hello {this.props.name} from a class</h1>;
  }
}

export default App;
```

### What are props?

React is a **component-based library** that divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.

`props` is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

```jsx
import React from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <Welcome name="Assembler" />
    </div>
  );
}

export default App;
```

### Splitting Components

Don’t be afraid to split components into smaller components.
For example, consider this App component:

```jsx
import React from "react";
import img from "./img/react-components-intro.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Hello Assembler</h1>
      <div>
        <img src={img} />
        <div>
          <p>Code your future!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
```

Let’s extract a few components from `<App />` component.

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps.

```jsx
function Welcome(props) {
  return <h3>Hello {props.name}</h3>;
}

function AssemblerLogo(props) {
  return <img src={props.img} />;
}

function AssemblerText(props) {
  return <p>Code your future!</p>;
}
```

Now we can render the components in our `<App />` component.

```jsx
import React from "react";
import img from "./img/react-components-intro.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Welcome name="developer" />
      <div>
        <AssemblerLogo img={img} />
        <div>
          <AssemblerText />
        </div>
      </div>
    </div>
  );
}

function Welcome(props) {
  return <h3>Hello {props.name}</h3>;
}

function AssemblerLogo(props) {
  return <img src={props.img} />;
}

function AssemblerText() {
  return <p>Code your future!</p>;
}

export default App;
```

### Extracting Components in Modules

In React, usually all components are extracted in modules so that they can be reused.

The main way we create components is inside a `src/components` folder:

```jsx
// src/components/Button/Button.js

import React from "react";

function Button({ children }) {
  return <button>{children}</button>;
}

export default Button;
```

And then we can import it inside our `App.js` component.

```jsx
// src/App.js

import React from "react";

import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Button>Hello </Button>
      </div>
    );
  }
}

export default App;
```

However, if we take a closer look at the import we can see that we need to specify the component name and folder twice:

```jsx
import Button from "./components/Button/Button";
```

One way we can solve this is to use an `index.js` file that exports the component from the main folder:

```jsx
// src/components/Button/index.js
export { default } from "./Button";
```

Then we can import it like so:

```jsx
// src/App.js

import React from "react";

import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Button>Hello </Button>
      </div>
    );
  }
}

export default App;
```

## Styles In React.js

With React.js we can define `.scss` or `.css` files that we can use to style our apps.

The main way we use styles in React is with a `.css` or `.scss` file that is stored as close as possible to the component that needs it.

```sh
src/components/Button
├── Button.js
├── Button.scss
└── index.js
```

```scss
// src/components/Button/Button.scss

.Button {
  background-color: darkslateblue;
  color: white;
  padding: 1rem;
  margin: 1rem;
}
```

```jsx
// src/components/Button/Button.js

import React from "react";

import "./Button.scss";

function Button({ children }) {
  return <button className="Button">{children}</button>;
}

export default Button;
```

```jsx
// src/App.js

import React from "react";

import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Button>Hello </Button>
      </div>
    );
  }
}

export default App;
```

Another way is by using Bootstrap.

First, we need to install it:

```sh
npm i bootstrap
```

Then, we need to import it in our app:

```jsx
// src/index.js
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

Now we can add the classes to our `Button` component.

```jsx
// src/components/Button/Button.js

import React from "react";

function Button({ children }) {
  return <button className="btn btn-primary m-5">{children}</button>;
}

export default Button;
```

## Lists and Keys

Now that we know how to create components lets see how we can render a dynamic list of elements.

If we import the `getPosts()` function from the `/src/utils` folder we can use it to render the posts using `Array.map()`.

```jsx
import React, { Component } from "react";

import { getPosts } from "./utils/data";

class App extends Component {
  render() {
    return (
      <main>
        <article className="row-cols-1">
          <div className="col">
            <h1>Posts</h1>
          </div>
          {getPosts().map((post) => (
            <div className="col">
              <h2 className="h4">{post.title}</h2>
              <p className="text-grey">{post.description}</p>
            </div>
          ))}
        </article>
      </main>
    );
  }
}

export default App;
```

However, we can see in the browser console the following error:

```js
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
    at div
    at App (http://localhost:3000/static/js/main.chunk.js:25:1)
```

This is because any time we render JSX elements dynamically we need to specify a `key` prop so that React can identify each rendered element in the final JSX code:

```diff
import React, { Component } from "react";

import { getPosts } from "./utils/data";

class App extends Component {
  render() {
    return (
      <main>
        <article className="row-cols-1">
          <div className="col">
            <h1>Posts</h1>
          </div>
          {getPosts().map((post) => (
-           <div className="col">
+           <div key={post.id} className="col">
              <h2 className="h4">{post.title}</h2>
              <p className="text-grey">{post.description}</p>
            </div>
          ))}
        </article>
      </main>
    );
  }
}

export default App;
```

---

## Part II. State and Lifecycle

Like props, state holds information about the component. However, the kind of information and how it is handled is different.

By default, a component has no state.

For example, this component has no state:

```jsx
function App() {
  const count = 1;

  return (
    <Main>
      <section className="row">
        <div className="col col-12">
          <h1>The current count is: {count}</h1>
        </div>
      </section>
    </Main>
  );
}
```

Neither does this one, even though it is created using a class:

```jsx
class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
```

### So When Would You Use State?

When a component needs to keep track of information between renderings the component itself can create, update, and use state.

We’ll be working with a fairly simple component to see state working in action.

### Modifying the State

Changing the state should only be done from inside a component through the `this.setState()` method.

React exposes the `setState()` method on the component instance to update it so that react finds out data change and can re-render the view.

```jsx
import React, { Component } from "react";

import Button from "./components/Button";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    const { count } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <h1>The current count is: {count}</h1>
          </div>
          <div className="col col-12">
            <Button onClick={this.increment}>increment</Button>
          </div>
        </section>
      </Main>
    );
  }
}

export default App;
```

## Lifecycle Methods

React components have several lifecycle methods which you can monitor and manipulate during its three main phases.

The three phases are: **Mounting**, **Updating**, and **Unmounting**.

### Mounting

Mounting means putting elements into the DOM. React has several built-in methods that gets called, in this order, when mounting a component, but these are the common ones:

- `constructor()`
- `render()`
- `componentDidMount()`

The `render()` method is required and will always be called, the others are optional and will be called if you define them.

### `constructor()`

The `constructor()` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

```jsx
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <h1>The current count is: {count}</h1>
          </div>
        </section>
      </Main>
    );
  }
}
```

### `render()`

The `render()` method is always required, and is the method that actually outputs the HTML to the DOM.

```jsx
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <h1>The current count is: {count}</h1>
          </div>
        </section>
      </Main>
    );
  }
}
```

### `componentDidMount`

The `componentDidMount()` method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM.

At first my favorite color is red, but give me a second, and it is yellow instead:

```jsx
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  render() {
    const { favoriteColor } = this.state;

    return <h1>My Favorite Color is {favoriteColor}</h1>;
  }
}
```

### Updating

The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props.

React calls the following methods, in this order, when a component is updated:

- `render()`
- `componentDidUpdate()`

The `render()` method is required and will always be called, the others are optional and will be called if you define them.

```jsx
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  componentDidUpdate() {
    const { favoriteColor } = this.state;
    console.log(`The updated favorite is ${favoriteColor}`);
  }

  render() {
    const { favoriteColor } = this.state;

    return (
      <div>
        <h1>My Favorite Color is {favoriteColor}</h1>
      </div>
    );
  }
}
```

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

React has only one built-in method that gets called when a component is unmounted:

- `componentWillUnmount()`

```jsx
class Child extends Component {
  componentWillUnmount() {
    console.log("Example component is about to be unmounted.");
  }

  render() {
    return <h1>Hello Assembler!</h1>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.setState((prevState) => ({
      ...prevState,
      show: !prevState.show,
    }));
  }

  render() {
    const { show } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <Button onClick={this.handleRemove}>remove child</Button>
          </div>
          <div className="col col-12">{show ? <Child /> : null}</div>
        </section>
      </Main>
    );
  }
}
```

## Using State Correctly

There are three things you should know about `setState()`.

### 1. Do Not Modify State Directly

For example, this will not re-render a component. The only place where you can assign `this.state` is the constructor.

```jsx
// Wrong
this.state.comment = "Hello";

// Instead, use setState():

// Correct
this.setState({ comment: "Hello" });
```

### 2. State Updates May Be Asynchronous

React may batch multiple `setState()` calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

#### Wrong Way to Update State

For example, this code may fail to update the counter:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });

    this.setState({
      count: this.state.count + 1,
    });

    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <Button onClick={this.increment}>Increment</Button>
          </div>
          <div className="col col-12">
            <h1>Current count: {count}</h1>
          </div>
        </section>
      </Main>
    );
  }
}
```

Even though we have 3 calls to `setState()` the counter is only incremented once.

#### Wright Way to Update State

To fix it, we need to use the second form of calling `setState()` that accepts a function rather than an object.

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <Button onClick={this.increment}>Increment</Button>
          </div>
          <div className="col col-12">
            <h1>Current count: {count}</h1>
          </div>
        </section>
      </Main>
    );
  }
}
```

Now the `state.count` property is incremented by 3 each time.

### 3. State Updates are Merged

When you call `setState()`, React merges the object you provide into the current state. For example, your state may contain several independent variables:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "dani",
        email: "dani@mail.com",
      },
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <Button onClick={this.increment}>Increment</Button>
          </div>
          <div className="col col-12">
            <pre>
              <code>{JSON.stringify(this.state, null, 2)}</code>
            </pre>
          </div>
        </section>
      </Main>
    );
  }
}
```

## The Data Flows Down

Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.

This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.

A component may choose to pass its state down as props to its child components.

The `<FormattedDate />` component would receive the date in its props and wouldn’t know whether it came from the `<Clock />`’s state, its props, or it was typed by hand:

```jsx
// passing the data as props
<FormattedDate date={this.state.date} />;

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```

## Handling Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using `camelCase`, rather than `lowercase`.
- With JSX you pass a function as the event handler, rather than a string.

```jsx
// HTML form
<button onclick="activateLasers()">
  Activate Lasers
</button>

// React form
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

### Binding `this` in the `constructor()`

Make `this` available in the `shoot` function by binding it in the `constructor()`:

```jsx
class Football extends Component {
  constructor(props) {
    super(props);
    this.shoot = this.shoot.bind(this);
  }

  shoot() {
    console.log(this);
    /*
      Thanks to the binding in the constructor function,
      the 'this' keyword now refers to the component object
    */
  }

  render() {
    return <button onClick={this.shoot}>Take the shot!</button>;
  }
}
```

## Practical Examples

### Saving the App State in `localStorage`

Let's build a simple example of storing the state in `localStorage` and loading it when mounting the component.

```jsx
function loadLocalStorage() {
  const json = localStorage.getItem("app-state");
  const state = JSON.parse(json);

  if (!state) {
    return {
      user: {
        isLoggedIn: false,
        email: null,
        firstName: null,
        lastName: null,
      },
      count: 0,
    };
  }

  return state;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        isLoggedIn: false,
        email: null,
        firstName: null,
        lastName: null,
      },
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const prevState = loadLocalStorage();

    this.setState({
      user: prevState.user,
      count: prevState.count,
    });
  }

  componentDidUpdate() {
    localStorage.setItem("app-state", JSON.stringify(this.state));
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  logout() {
    this.setState({
      user: {
        isLoggedIn: false,
        email: null,
        firstName: null,
        lastName: null,
      },
    });
  }

  login() {
    this.setState({
      user: {
        isLoggedIn: true,
        email: "dani@mail.com",
        firstName: "dani",
        lastName: "assembler",
      },
    });
  }

  render() {
    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <div className="d-flex">
              <span className="mr-3">
                <Button onClick={this.increment}>Increment</Button>
              </span>
              <span className="mr-3">
                <Button onClick={this.logout}>Logout</Button>
              </span>
              <Button onClick={this.login}>Login</Button>
            </div>
          </div>
          <div className="col col-12">
            <pre>
              <code>{JSON.stringify(this.state, null, 2)}</code>
            </pre>
          </div>
        </section>
      </Main>
    );
  }
}
```

### Forms

Let's see a simple example of how to work with forms (we will see more about working with forms in the next pill):

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: "",
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({
      selectedUser: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const { selectedUser } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <h1>Selected user: {selectedUser}</h1>
          </div>
          <div className="col col-12">
            <pre>
              <code>{JSON.stringify(this.state, null, 2)}</code>
            </pre>
          </div>
          <div className="col col-12">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor={selectedUser} className="d-block">
                  <span className="d-block mb-2">Select User</span>
                  <select
                    name={selectedUser}
                    id={selectedUser}
                    value={selectedUser}
                    onChange={this.handleSelect}
                    onBlur={this.handleSelect}
                    className="custom-select"
                  >
                    <option value="dani">dani</option>
                    <option value="alex">alex</option>
                    <option value="maria">maria</option>
                    <option value="ana">ana</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
        </section>
      </Main>
    );
  }
}
```

### Conditional Class Names

Let's see how we can conditionally render classes based on the current state value:

```jsx
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  resetCount() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;

    return (
      <Main>
        <section className="row">
          <div className="col col-12">
            <span className="mr-2">
              <Button onClick={this.increment}>Increment</Button>
            </span>
            <Button onClick={this.resetCount}>Reset Count</Button>
          </div>
          <div className="col col-12">
            <h1 className={count > 2 ? "text-danger" : "text-success"}>
              Current Count: {count}
            </h1>
          </div>
        </section>
      </Main>
    );
  }
}
```

---

## Part III. Forms and Events

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

React events are named using camelCase, rather than lowercase. With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

is slightly different in React:

```jsx
<button onClick={activateLasers}>Activate Lasers</button>
```

Another important difference is that if we want to prevent the default action of an event in React we `return false;`. Instead, we need to call the `event.preventDefault()` method.

## Controlled Components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.

We can combine the two by making the React state be the _**single source of truth**_. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a _**controlled component**_.

In the following example, the form and its inputs are controlled components.

```jsx
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
```

### Synthetic Events

In the previous example, `event` was a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the [SyntheticEvent](https://reactjs.org/docs/events.html) reference guide to learn more.

When using React, you generally don’t need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class. In our previous example, we had the `handleChange()` method which is used to store in state the input value.

## Handling Multiple Inputs

Here we can see an example of controlling multiple input types:

```jsx
import React, { Component } from "react";

import Main from "./components/Main";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      fullName: "",
      age: 0,
      consentAccepted: false,
      hobby: "",
      description: "",
    };

    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleConsentAcceptedChange = this.handleConsentAcceptedChange.bind(
      this
    );
    this.handleHobbyChange = this.handleHobbyChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFullNameChange(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: Number(event.target.value),
    });
  }

  handleConsentAcceptedChange(event) {
    this.setState({
      consentAccepted: event.target.checked,
    });
  }

  handleHobbyChange(event) {
    this.setState({
      hobby: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  }

  render() {
    const {
      fullName,
      age,
      consentAccepted,
      hobby,
      description,
      submitted,
    } = this.state;

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
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Your full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={this.handleFullNameChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Your age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={this.handleAgeChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="hobby">Your hobby</label>
                <select
                  name="hobby"
                  id="hobby"
                  value={hobby}
                  onChange={this.handleHobbyChange}
                  onBlur={this.handleHobbyChange}
                  className="form-control"
                >
                  <option value="Programming">Programming</option>
                  <option value="Running">Running</option>
                  <option value="Skying">Skying</option>
                  <option value="Eating">Eating</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  cols="20"
                  rows="4"
                  value={description}
                  onChange={this.handleDescriptionChange}
                  className="form-control"
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="consentAccepted"
                  name="consentAccepted"
                  checked={consentAccepted}
                  onChange={this.handleConsentAcceptedChange}
                  className="form-check-input"
                />
                <label htmlFor="consentAccepted" className="form-check-label">
                  Do you accept the privacy policy?
                </label>
              </div>
              <Button disabled={!consentAccepted} submitButton>
                Submit
              </Button>
            </form>
          </div>
          {submitted && (
            <div className="col col-12 mt-4">
              <h2 className="h4">Submitted!</h2>
            </div>
          )}
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
```

### Reusing Event Handlers

One way to simplify this code is by using the `event.name` property to have a single event listener for multiple inputs.

In this case we are reusing the `handleChange` handler for the input elements that are not of type `checkbox` or `number` because they not use the `event.value` property or it should be coerced to a number.

```jsx
import React, { Component } from "react";

import Main from "./components/Main";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      fullName: "",
      age: 0,
      consentAccepted: false,
      hobby: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleConsentAcceptedChange = this.handleConsentAcceptedChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: Number(event.target.value),
    });
  }

  handleConsentAcceptedChange(event) {
    this.setState({
      consentAccepted: event.target.checked,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  }

  render() {
    const {
      fullName,
      age,
      consentAccepted,
      hobby,
      description,
      submitted,
    } = this.state;

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
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Your full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Your age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={this.handleAgeChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="hobby">Your hobby</label>
                <select
                  name="hobby"
                  id="hobby"
                  value={hobby}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                  className="form-control"
                >
                  <option value="Programming">Programming</option>
                  <option value="Running">Running</option>
                  <option value="Skying">Skying</option>
                  <option value="Eating">Eating</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  cols="20"
                  rows="4"
                  value={description}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="consentAccepted"
                  name="consentAccepted"
                  checked={consentAccepted}
                  onChange={this.handleConsentAcceptedChange}
                  className="form-check-input"
                />
                <label htmlFor="consentAccepted" className="form-check-label">
                  Do you accept the privacy policy?
                </label>
              </div>
              <Button disabled={!consentAccepted} submitButton>
                Submit
              </Button>
            </form>
          </div>
          {submitted && (
            <div className="col col-12 mt-4">
              <h2 className="h4">Submitted!</h2>
            </div>
          )}
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
```

---

## Part IV. Formik

Even though we can manage forms in React using controlled components we still haven't seen how to add form validation.

A simple solution would be to check the values of each input field in the `handleChange` event handlers to see if the email field passes a Regex validation or to see if the checkbox was checked before we can submit the form.

However, we can use a simpler solution: the [Formik](https://formik.org/docs/overview) package.

The main pain points that this library solves are:

- Getting values in and out of form state
- Validation and error messages
- Handling form submission

### Getting Started With Formik

First, lets install the formik package together with the yup package that is used for validating the form fields

```sh
$  npm install formik yup
```

### Converting a Form to Formik

Lets see how we can convert the following form to Formik.

`@see` the `<App />` component for the solution.

```jsx
import React, { Component } from "react";

import Main from "./components/Main";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      fullName: "",
      age: 0,
      consentAccepted: false,
      hobby: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleConsentAcceptedChange = this.handleConsentAcceptedChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: Number(event.target.value),
    });
  }

  handleConsentAcceptedChange(event) {
    this.setState({
      consentAccepted: event.target.checked,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  }

  render() {
    const {
      fullName,
      age,
      consentAccepted,
      hobby,
      description,
      submitted,
    } = this.state;

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
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Your full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Your age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={this.handleAgeChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="hobby">Your hobby</label>
                <select
                  name="hobby"
                  id="hobby"
                  value={hobby}
                  onChange={this.handleChange}
                  onBlur={this.handleChange}
                  className="form-control"
                >
                  <option value="Programming">Programming</option>
                  <option value="Running">Running</option>
                  <option value="Skying">Skying</option>
                  <option value="Eating">Eating</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  cols="20"
                  rows="4"
                  value={description}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  id="consentAccepted"
                  name="consentAccepted"
                  checked={consentAccepted}
                  onChange={this.handleConsentAcceptedChange}
                  className="form-check-input"
                />
                <label htmlFor="consentAccepted" className="form-check-label">
                  Do you accept the privacy policy?
                </label>
              </div>
              <Button disabled={!consentAccepted} submitButton>
                Submit
              </Button>
            </form>
          </div>
          {submitted && (
            <div className="col col-12 mt-4">
              <h2 className="h4">Submitted!</h2>
            </div>
          )}
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
```

---

## Part V. React Router Intro

### What is React Router?

React Router is the standard routing library for React.

From the [docs](https://reactrouter.com/web/guides/quick-start)

> React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in.

### Why use React Router?

React Router allows us to build a single-page web application with navigation without the page refreshing as the user navigates.

React Router uses component structure to call components, which display the appropriate information.

<img src='src/img/react-router-diagram.png'>

## Quick Start

To get started with React Router in a web app, you’ll need to install React Router from npm using the `react-router-dom` package.

```bash
npm install react-router-dom
```

## BrowserRouter

### Primary Components

There are three primary categories of components in React Router:

- routers, like `<BrowserRouter>`
- route matchers, like `<Route>` and `<Switch>`
- and navigation, like `<Link>`, `<NavLink>`, and `<Redirect>`

We also like to think of the navigation components as `route changers`. All of the components that you use in a web application should be imported from `react-router-dom`.

```jsx
import { BrowserRouter, Route, Link } from "react-router-dom";
```

### BrowserRouter Usage

A `<BrowserRouter>` uses regular URL paths. These are generally the best-looking URLs.

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```

However, this doesn't do much so far. Let's see how to fix that.

First lets create the constants that will hold the route paths:

```js
// src/constants/routes.js
export const HOME = "/";
export const PROFILE = "/profile";
```

Then, lets create the page components.

First, we will create the `/` page component.

```jsx
// src/pages/Home.js
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
```

And the `/profile` page:

```jsx
// src/pages/Profile.js
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";

import { HOME } from "../../constants/routes";

import Main from "../../components/Main";
import Button from "../../components/Button";

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

class Profile extends Component {
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
              onSubmit={(values, { setSubmitting }) => {
                const { saveUser } = this.props;
                setSubmitting(true);

                saveUser({ id: uuid(), ...values });

                setTimeout(() => {
                  this.setState({ submitted: true });
                }, 500);
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
                isSubmitting,
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
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              )}
            </Formik>
          </div>
          {submitted && <Redirect to={HOME} />}
        </section>
      </Main>
    );
  }
}

export default Profile;
```

Now lets create the `App` component that will render each path.

```jsx
import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { HOME, PROFILE } from "./constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.saveUser = this.saveUser.bind(this);
  }

  saveUser(userData) {
    this.setState((prevState) => ({
      users: [...prevState.users, userData],
    }));
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <Header />
        <Route
          exact
          path={HOME}
          render={(routeProps) => <Home users={users} {...routeProps} />}
        />
        <Route
          exact
          path={PROFILE}
          render={(routeProps) => (
            <Profile saveUser={this.saveUser} {...routeProps} />
          )}
        />
      </>
    );
  }
}

export default App;
```

## Higher-Order Components

**From the: [React.js docs](https://reactjs.org/docs/higher-order-components.html)**

_A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature._

_Concretely, a higher-order component is a function that takes a component and returns a new component._

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

_Whereas a component transforms props into UI, a higher-order component transforms a component into another component._

## Use HOCs For Cross-Cutting Concerns

Higher-Order Components are especially useful for eliminating duplicate code because we can define the logic in a HOC that receives the component that we want to receive it.

This way we simply inject the data or information that the component needs as a prop from the Higher-Order Component and we can avoid duplicate code and logic because it is encapsulated in our HOC.

**@see:** [Docs](https://reactjs.org/docs/higher-order-components.html#use-hocs-for-cross-cutting-concerns)

## A First Example: `withData(Component)`

In this case we will build a `withData(Component)` HOC that injects data in a component with the different loading states and errors.

First, lets build our `withData` hoc:

```jsx
import React, { Component } from "react";

import getDisplayName from "../utils/getDisplayName";

function withData(WrappedComponent, request) {
  class WrapperComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        isLoading: false,
        hasError: false,
        errorMessage: null,
      };

      this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
      this.loadData();
    }

    async loadData() {
      this.setState({
        isLoading: true,
      });

      try {
        const data = await request();

        this.setState({
          isLoading: false,
          data: data,
        });
      } catch (error) {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: error.message,
        });
      }
    }

    render() {
      const { data, isLoading, hasError, errorMessage } = this.state;

      return (
        <WrappedComponent
          data={data}
          isLoading={isLoading}
          hasError={hasError}
          errorMessage={errorMessage}
          {...this.props}
        />
      );
    }
  }

  WrapperComponent.displayName = getDisplayName(`withData(WrapperComponent)`);

  return WrapperComponent;
}

export default withData;
```

And our `Users` page with the props:

```jsx
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
```

## A Second Example: `withAuth(Component)`

In this case we will build a `withAuth(Component)` HOC that uses the `Redirect` component from the `react-router-dom` library to redirect the user to the home page when the `isAuthenticated` prop is `false`.

First, lets build our `withAuth` hoc:

```jsx
import React from "react";
import { Redirect } from "react-router-dom";

import getDisplayName from "../utils/getDisplayName";

import { HOME } from "../constants/routes";

function withAuth(WrappedComponent) {
  function WrapperComponent({ isAuthenticated, ...props }) {
    if (!isAuthenticated) {
      return <Redirect to={HOME} />;
    }
    return <WrappedComponent {...props} />;
  }

  WrapperComponent.displayName = getDisplayName(`withAuth(WrapperComponent)`);

  return WrapperComponent;
}

export default withAuth;
```

And our `PrivatePage` page:

```jsx
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
```

And our `App` component:

```jsx
import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import PrivatePage from "./pages/PrivatePage";

import { HOME, PROFILE, USERS, PRIVATE } from "./constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isAuthenticated: false,
    };

    this.saveUser = this.saveUser.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  saveUser(userData) {
    this.setState((prevState) => ({
      users: [...prevState.users, userData],
    }));
  }

  login() {
    this.setState({
      isAuthenticated: true,
    });
  }

  logout() {
    this.setState({
      isAuthenticated: false,
    });
  }

  render() {
    const { users, isAuthenticated } = this.state;

    return (
      <>
        <Header
          isAuthenticated={isAuthenticated}
          login={this.login}
          logout={this.logout}
        />
        <Route
          exact
          path={HOME}
          render={(routeProps) => <Home users={users} {...routeProps} />}
        />
        <Route
          exact
          path={PROFILE}
          render={(routeProps) => (
            <Profile saveUser={this.saveUser} {...routeProps} />
          )}
        />
        <Route
          exact
          path={USERS}
          render={(routeProps) => <Users {...routeProps} />}
        />
        <Route
          exact
          path={PRIVATE}
          render={(routeProps) => (
            <PrivatePage isAuthenticated={isAuthenticated} {...routeProps} />
          )}
        />
      </>
    );
  }
}

export default App;
```

## Learn More About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License <!-- omit in toc -->

[MIT](https://choosealicense.com/licenses/mit/)

## Contributors ✨ <!-- omit in toc -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.danilucaci.com"><img src="https://avatars.githubusercontent.com/u/19062818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dani Lucaci</b></sub></a><br /><a href="https://github.com/assembler-school/react-js-intro/commits?author=danilucaci" title="Documentation">📖</a> <a href="#infra-danilucaci" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/assembler-school/react-js-intro/commits?author=danilucaci" title="Tests">⚠️</a> <a href="#mentoring-danilucaci" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/assembler-school/react-js-intro/commits?author=danilucaci" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
