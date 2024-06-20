import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constants";

const CartItem = ({ item: { item, qty, size } }) => {
  return (
    <article className="cursor-pointer bg-gray-50 p-2 hover:bg-[#daffa2]">
      <div className="flex space-x-2">
        <img className="h-24" src={item.src} />
        <div className="space-y-2">
          <p className="font-bold">{item.title}</p>
          <p className="text-gray-400">{item.description}</p>
        </div>
        <p className="font-bold">{item.price}$</p>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <p className="font-bold">SIZE</p>
            <Select
              options={SIZES}
              className="w-16 p-1 pl-2"
              defaultValue={size}
            />
          </div>
          <div>
            <p className="font-bold">QTY</p>
            <Select
              options={QTY}
              className="w-16 p-1 pl-2"
              defaultValue={qty}
            />
          </div>
        </div>

        <button>
          <CiTrash size={25} />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
