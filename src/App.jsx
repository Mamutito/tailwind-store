import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";
import Cart from "./components/Cart";

const FAKE_CART = SHOE_LIST.map((item) => ({ item, qty: 1, size: 44 }));
function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <main className="animate-fadeIn p-10 xl:px-20">
      <Nav onOpenSidebar={() => setIsOpenSidebar(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isOpenSidebar}
        onCloseSidebar={() => setIsOpenSidebar(false)}
      >
        <Cart cartItems={FAKE_CART} />
      </Sidebar>
    </main>
  );
}

export default App;
