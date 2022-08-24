import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import AdminRoute from "./auth/AdminRoute";
import PrivateRoute from "./auth/PrivateRoute";
import Home from "./core/Home";
import Product from "./core/Product";
import Shop from "./core/Shop";
import AdminDashboard from "./user/AdminDashboard";
import AllUsers from "./user/AllUsers";
import "./user/Routes.css";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Dashboard from "./user/UserDashboard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/create/category" exact component={AddCategory} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <Route path="/product/:productId" exact component={Product} />
        <Route path="/allUsers" exact component={AllUsers} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
