import mainImage from "../assets/n1-min.png";
import { QTY, SIZES } from "../constants";
import Select from "./Select";
const ShoeDetail = () => {
  return (
    <section className="flex flex-col space-y-4 lg:flex-row-reverse">
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6]">
          <img src={mainImage} />
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-9xl">Nike Air Max 270</h1>
        <p className="font-medium md:text-xl">
          The Nike Air Max 270 is a lifestyle shoe that&apos;s sure to turn
          heads with its vibrant color gradient.
        </p>
        <div className="flex space-x-4">
          <p className="text-3xl font-black md:text-6xl">100 $</p>
          <Select title="QTY" options={QTY} />
          <Select title="SIZE" options={SIZES} />
        </div>
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
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
