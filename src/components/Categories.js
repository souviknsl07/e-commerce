const Categories = ({ setValue }) => {
  return (
    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
      <p onClick={(e) => setValue("")} className="link">
        All
      </p>
      <p onClick={(e) => setValue("men's clothing")} className="link">
        Men's
      </p>
      <p onClick={(e) => setValue("women's clothing")} className="link">
        Women's
      </p>
      <p onClick={(e) => setValue("jewelery")} className="link">
        Jewelery
      </p>
      <p onClick={(e) => setValue("electronics")} className="link">
        Electronics
      </p>
    </div>
  );
};

export default Categories;
