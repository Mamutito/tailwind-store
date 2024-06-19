import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constants";

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
        Hola
      </Sidebar>
    </main>
  );
}

export default App;
