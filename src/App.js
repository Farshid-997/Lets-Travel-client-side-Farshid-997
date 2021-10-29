import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Location from './Components/Location/Location';
import Packages from './Components/Packages/Packages';
import Blog from './Components/Blog/Blog';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route path='/'>
<Home></Home>
       </Route>

       <Route path="/home">
<Home></Home>
       </Route>
       <Route path="/location">
<Location></Location>
       </Route>

       <Route path="/packages">
<Packages></Packages>
       </Route>


       <Route path="/blog">
<Blog></Blog>
       </Route>

       <Route path="/contact">
<Contact></Contact>
       </Route>

       <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

     </Switch>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
