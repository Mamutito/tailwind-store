import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2 className="mb-5 text-4xl font-bold">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((product) => (
          <li key={product.item.id}>
            <CartItem item={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
