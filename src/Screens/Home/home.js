import React, { Component } from "react";
import CategoriesComponent from "../../Components/Categories/categories";
import ModelComponent from "../../Components/Model/model";
import ProductsComponent from "../../Components/Products/products";
import FooterComponent from "../../Layouts/Footer/footer";
import HeaderComponent from "../../Layouts/Header/header";

class HomeScreen extends Component {
  render() {
    return (
      <div className="ml-4">
        <HeaderComponent />
        <div className="row">
          <div className="col-6">
            <CategoriesComponent />
            <ProductsComponent/>
          </div>
          <div className="col-6">
            <ModelComponent/>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
export default HomeScreen;
