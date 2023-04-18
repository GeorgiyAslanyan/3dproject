import Navbar from "./components/Navbar";
import Description from "./components/Description";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white w-full">
      <div className="">
        <Navbar />
      </div>
      <Main />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
