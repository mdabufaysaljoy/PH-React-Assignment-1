import Home from "./components/Home/Home";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Home />
    </>
  );
}

export default App;
