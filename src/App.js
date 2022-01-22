import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Location from './Components/Location/Location';
import Packages from './Components/Packages/Packages';

import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

import AddService from './Components/AddService/AddService';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ConfirmOrders from './Components/ConfirmOrders/ConfirmOrders';
import Offer from './Components/Offer/Offer';

import Places from './Components/Places/Places';

import Contact from './Components/Contacts/Contact';
import AddBlogs from './Components/Blog/AddBlogs';
import Dashboard from './Components/Dashboard/Dashboard';
import ShowContact from './Components/ShowContact/ShowContact';
//import AddReview from './Components/AddReview/AddReview';



function App() {
  return (
    <div className="App">
   <AuthProvider>
   <BrowserRouter>
     
     <Switch>
       <Route exact path='/'>
<Home></Home>
       </Route>

       <Route path="/home">
<Home></Home>
       </Route>

       <Route path="/location">
<Location></Location>
       </Route>

       <PrivateRoute path="/packages/:id">
<Packages></Packages>
       </PrivateRoute>


       <PrivateRoute path="/addblog">
<AddBlogs></AddBlogs>
       </PrivateRoute>

       <Route path="/contact">
<Contact></Contact>
       </Route>


       <Route path="/showcontact">
<ShowContact></ShowContact>
       </Route>


       <Route path="/offer">
<Offer></Offer>
       </Route>

       <Route path="/Places">
<Places></Places>
       </Route>

       <PrivateRoute path="/addservice">
<AddService></AddService>
</PrivateRoute>




<Route path="/dashboard">
<Dashboard></Dashboard>
</Route>


       <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

<PrivateRoute path="/confirmOrders">
<ConfirmOrders></ConfirmOrders>

</PrivateRoute>


<Route path="*">
<NotFound></NotFound>
</Route>
     </Switch>
     
     </BrowserRouter>
   </AuthProvider>
  
    </div>
  );
}

export default App;
