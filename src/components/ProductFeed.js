import Product from "./Product";

const ProductFeed = ({ products, search, value }) => {
  const showProducts = (initial, final) => {
    return value !== ""
      ? products
          .filter(
            (product) =>
              (product.title.toLowerCase() || product.category).includes(
                search.toLowerCase()
              ) && product.category === value
          )
          .slice(initial, final)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              category={category}
              price={price}
              description={description}
              title={title}
              image={image}
            />
          ))
      : products
          .filter((product) =>
            (product.title.toLowerCase() || product.category).includes(
              search.toLowerCase()
            )
          )
          .slice(initial, final)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              category={category}
              price={price}
              description={description}
              title={title}
              image={image}
            />
          ));
  };
  return (
    <div className="grid grid-flow-row-dense lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {showProducts(0, 4)}
      <div className="md:col-span-2">{showProducts(4, 5)}</div>
      {showProducts(5, products.length - 1)}
      <div className="md:col-span-3">
        {showProducts(products.length - 1, products.length)}
      </div>
    </div>
  );
};

export default ProductFeed;
