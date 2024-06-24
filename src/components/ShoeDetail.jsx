import { useState } from "react";
import { QTY, SIZES } from "../constants";
import Select from "./Select";
const ShoeDetail = ({ shoe, onAddShoe }) => {
  const [options, setOptions] = useState({ qty: "", size: "" });
  const handleChangeSize = (size) => {
    setOptions((prevOptions) => ({ ...prevOptions, size }));
  };
  const handleChangeQty = (qty) => {
    setOptions((prevOptions) => ({ ...prevOptions, qty }));
  };
  return (
    <section className="flex flex-col space-y-4 lg:flex-row-reverse">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6]">
          <img className="animate-float" src={shoe.src} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-9xl">{shoe.title}</h1>
        <p className="font-medium md:text-xl">{shoe.description}</p>
        <div className="flex items-center space-x-4">
          <p className="text-3xl font-black md:text-6xl">{shoe.price} $</p>
          <Select
            title="QTY"
            options={QTY}
            onChange={handleChangeQty}
            value={options.qty}
          />
          <Select
            title="SIZE"
            options={SIZES}
            onChange={handleChangeSize}
            value={options.size}
          />
        </div>
        <div className="space-x-10">
          <button
            onClick={() => onAddShoe(shoe, options.qty, options.size)}
            className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700"
          >
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShoeDetail;
