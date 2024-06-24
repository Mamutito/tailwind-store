import Card from "./Card";

const NewArrivalsSection = ({ items, onShoeChange }) => {
  return (
    <section className="mt-20">
      <div className="flex-center">
        <h2 className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,30%)]">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            onShoeChange={() => onShoeChange(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSection;
