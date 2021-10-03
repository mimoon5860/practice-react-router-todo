import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Chart from './Components/Chart/Chart';
import Error from './Components/Error/Error';
import Todos from './Components/Todos/Todos';
import SingleTodo from './Components/Todos/SingleTodo/SingleTodo';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='text-center bg-dark'>
      <BrowserRouter>
        <div style={{ minHeight: "95vh" }}>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/todos'>
              <Todos></Todos>
            </Route>
            <Route path='/chart'>
              <Chart></Chart>
            </Route>
            <Route path='/todo/:todoId'>
              <SingleTodo></SingleTodo>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
