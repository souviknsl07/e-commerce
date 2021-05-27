import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
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
        ))}
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
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
          ))}
      </div>
      {products
        .slice(5, products.length - 1)
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
        ))}
      <div className="md:col-span-3 mb-5">
        {products
          .slice(products.length - 1, products.length)
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
          ))}
      </div>
    </div>
  );
};

export default ProductFeed;
