import { BrowserRouter,  Switch, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./login";
import Register from "./register"
import UserProfile from "./userProfile";
import Admin from "./Admin";
import AddProduct from "./AddProduct";


import Book from "./Book";
import Category from "./Category"

function Router(){
    return(
        <div>
       <BrowserRouter>

    <Switch>
    <Route path="/login">
           <Login />
         </Route>

         <Route path="/register">
          <Register />
         </Route>

         <Route path="/userProfile/:username">
         <Header />
          <UserProfile />
         </Route>
           
         <Route path="/admin">
         <Header />
          <Admin />
         </Route>

         <Route path="/addProduct">
         <AddProduct />
         </Route>

         <Route path="/category/:categoryName">
            <Header />
       <Category />
         </Route>

         <Route path="/book/:bookname">
            <Header />
           <Book />
         </Route>


         <Route path="/">
           <Header />
           
         </Route>
    </Switch>

    
    </BrowserRouter>
        </div>
    )
}

export default Router;
