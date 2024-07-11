import ProductItem from "./ProductItem";
import { productsData } from "../../data";
import "./Products.css";


function Products() {
  return (
    <div className="products">
      <h2>Products Component</h2>
      <div className="products-wrapper">
        <ProductItem
          image={productsData[0].image}
          title={productsData[0].title}
          price={productsData[0].price}
        />
        <ProductItem
          image={productsData[1].image}
          title={productsData[1].title}
          price={productsData[1].price}
        />
        <ProductItem
          image={productsData[2].image}
          title={productsData[2].title}
          price={productsData[2].price}
        />
      </div>
    </div>
  );
}

export default Products;
