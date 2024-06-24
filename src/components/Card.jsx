const Card = ({ item, onShoeChange }) => {
  return (
    <article
      onClick={onShoeChange}
      className={`${item.className} max-w-xl transform cursor-pointer transition hover:scale-105`}
    >
      <div className="p-8">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </p>
      </div>
      <img className="absolute left-[40%] top-3 w-52" src={item.src} />
    </article>
  );
};

export default Card;
