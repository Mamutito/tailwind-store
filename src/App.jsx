import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constants";

function App() {
  return (
    <main className="animate-fadeIn p-10 xl:px-20">
      <Nav />
      <ShoeDetail />
      <Card item={SHOE_LIST[0]} />
    </main>
  );
}

export default App;
