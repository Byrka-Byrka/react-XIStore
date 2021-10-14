import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { SingIn } from './components/SingIn/SingIn';
import { SingUp } from './components/SingUp/SingUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { List } from './components/List/List';
import { useDispatch } from 'react-redux'
import { createLocalStorage, setTotalAmountOfProducts } from './components/features/CreateLocalStorage/CreateLocalStorage'
import { setProducts } from './components/features/Filter/Filter'
import { setUsers } from './components/features/singIn/authorizationReducer'
import { AddProductPage } from './components/addProdutPage/AddProductPage';
import { CartPage } from './components/CartPage/CartPage';

function App() {

const dispatch = useDispatch()
if(!localStorage.products){
  
  dispatch(createLocalStorage())
}
dispatch(setTotalAmountOfProducts())
dispatch(setProducts())
dispatch(setUsers())
  return (
    <div>
      <Router>
        <Header/>
        <SingIn/>
        <SingUp/>
        <NavBar/>
        <Switch>
          <Route  path="/list">
            <List/>
          </Route>
          <Route exact path='/newProduct'>
                <AddProductPage/>
          </Route>
          <Route exact path='/cart'>
                <CartPage/>
          </Route>
          <Redirect from='' to='/list'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
