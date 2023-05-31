import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../products/SingleProduct";
import Profile from "../profile/Profile";
import SingleCategory from "../categories/SingleCategory";
import Cart from "../cart/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.CART} element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
