import ProductItem from "./ProductItem";

function Products() {
  const image =
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
  const title = "Tişört";
  const price = 100;

  return (
    <div className="products">
      <h2>Products Component</h2>
      <ProductItem image={image} title={title} price={price} />
      <ProductItem image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" title="Ceket" price={200} />
    </div>
  );
}

export default Products;
