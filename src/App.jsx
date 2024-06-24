import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";
import Cart from "./components/Cart";

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  const handleCurrentShoe = (shoe) => setCurrentShoe(shoe);
  const handleAddShoe = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingIndex = updatedCartItems.findIndex(
        (productShoe) => productShoe.item.id === product.id,
      );
      if (existingIndex > -1) {
        updatedCartItems[existingIndex] = { item: product, qty, size };
      } else {
        updatedCartItems.push({ item: product, qty, size });
      }
      setCartItems(updatedCartItems);
      setIsOpenSidebar(true);
    }
  };
  const handleRemoveShoe = (id) => {
    if (id) {
      const updatedCartItems = cartItems.filter(
        (productShoe) => productShoe.item.id !== id,
      );
      setCartItems(updatedCartItems);
      if (!updatedCartItems.length) {
        setIsOpenSidebar(false);
      }
    }
  };
  return (
    <main className="animate-fadeIn p-10 xl:px-20">
      <Nav onOpenSidebar={() => setIsOpenSidebar(true)} />
      <ShoeDetail shoe={currentShoe} onAddShoe={handleAddShoe} />
      <NewArrivalsSection items={SHOE_LIST} onShoeChange={handleCurrentShoe} />
      <Sidebar
        isOpen={isOpenSidebar}
        onCloseSidebar={() => setIsOpenSidebar(false)}
      >
        <Cart cartItems={cartItems} onRemoveShoe={handleRemoveShoe} />
      </Sidebar>
    </main>
  );
}

export default App;
