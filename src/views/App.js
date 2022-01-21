import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import MyComponent from './Example/MyComponent';
import logo from './logo.svg';
import Home from './Navigation/Home';
import Navigation from './Navigation/Navigation';
import ListTodo from './Todos/ListTodo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/example" ><MyComponent /></Route>
            <Route path="/todo" ><ListTodo /></Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
