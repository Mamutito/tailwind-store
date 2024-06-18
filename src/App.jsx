import "./App.css";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constants";

function App() {
  return (
    <main className="animate-fadeIn p-10 xl:px-20">
      <Nav />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
    </main>
  );
}

export default App;
