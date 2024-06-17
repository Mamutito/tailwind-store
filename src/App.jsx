import "./App.css";
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";

function App() {
  return (
    <main className="animate-fadeIn p-10 xl:px-20">
      <Nav />
      <ShoeDetail />
    </main>
  );
}

export default App;
