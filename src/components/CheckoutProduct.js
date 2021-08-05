import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";
import QuantityCount from "./QuantityCount";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  quantity,
  rating,
  image,
}) => {
  const dispatch = useDispatch();
  const [quantityUp, setQuantityUp] = useState(quantity);

  const removeItemFromCart = () => {
    // Remove item from redux/ basketSlice
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="sm:grid sm:grid-cols-5 flex flex-col">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5 my-5">
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
        <div className="text-gray-400">
          <Currency
            currency="INR"
            group=","
            quantity={Math.round(price * 72.91)}
          />{" "}
          {" x"} {quantity} {" = "}
          <Currency
            currency="INR"
            group=","
            quantity={Math.round(price * quantity * 72.91)}
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end dark:text-black">
        <QuantityCount
          id={id}
          dispatch
          setQuantity={setQuantityUp}
          quantity={quantityUp}
        />
        <button onClick={removeItemFromCart} className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
