import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({
  id,
  title,
  price,
  quantity,
  description,
  category,
  image,
}) => {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      quantity: 1,
      rating,
      description,
      category,
      image,
    };

    // Sending the product as an action to REDUX store/ BasketSlice
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 mb-auto dark:bg-amazon_blue dark:text-white">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-400" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2 cursor-pointer hover:line-clamp-none">
        {description}
      </p>

      <div className="mb-5">
        <Currency
          currency="INR"
          group=","
          quantity={Math.round(price * 72.91)}
        />
      </div>

      <button
        onClick={addItemToCart}
        className="mt-auto button dark:text-black"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
