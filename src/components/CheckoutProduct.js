import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  rating,
  category,
  image,
}) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      rating,
      category,
      image,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromCart = () => {
    // Remove item from redux/ basketSlice
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-400" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3 hover:line-clamp-none cursor-pointer">
          {description}
        </p>
        <Currency
          currency="INR"
          group=","
          quantity={Math.round(price * 72.91)}
        />
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToCart} className="button">
          Add To Cart
        </button>
        <button onClick={removeItemFromCart} className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
