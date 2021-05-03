`#react.js-intro` `#assembler-school` `#master-in-software-engineering`

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Assembler School: React.js Intro Workshop

In this workshop we will learn how to use React.js to build modern SPA.

## Getting Started

### The repository

First, you will need to clone the repo:

```bash
$ git clone https://github.com/assembler-school/react-js-intro.git
```

## Dependencies

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

## Contents and Branches Naming Strategy

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

## What is React?

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

## Specifying Attributes with JSX

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

## Specifying Children with JSX

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

### React Only Updates What’s Necessary

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
class SecondWelcome extends React.Component {
  // Notice that class components should have a render method
  render() {
    return <h1>Hello {this.props.name} from a class</h1>;
  }
}

export default App;
```

## What are props?

React is a **component-based library** that divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.

`props` is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

```jsx
import React from "react";

class Welcome extends React.Component {
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

## Extracting Components in Modules

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

class App extends React.Component {
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

class App extends React.Component {
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

class App extends React.Component {
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

## Learn More About Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributors ✨

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
