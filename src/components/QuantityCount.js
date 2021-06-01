import { updateQuantity } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

const QuantityCount = ({
  setQuantity,
  quantity = 1,
  dispatch = false,
  id = null,
}) => {
  const newDispatch = useDispatch();

  const increaseCount = () => {
    setQuantity(quantity + 1);
    updateQuantityHere(quantity + 1);
  };

  const decreaseCount = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateQuantityHere(quantity - 1);
    }
  };

  const updateQuantityHere = (count) => {
    if (dispatch) {
      const product = { id, quantity: count };
      newDispatch(updateQuantity(product));
    }
  };

  return (
    <div className="flex justify-center mb-3">
      <button
        onClick={decreaseCount}
        className="px-2 bg-gradient-to-b text-md from-blue-200 to-blue-400 border border-blue-300 rounded-full border-none focus:outline-none"
      >
        -
      </button>
      <span className="bg-gray-200 mx-3 px-2 rounded-full">{quantity}</span>
      <button
        onClick={increaseCount}
        className="px-2 bg-gradient-to-b text-md from-blue-200 to-blue-400 border border-blue-300 rounded-full border-none focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCount;
