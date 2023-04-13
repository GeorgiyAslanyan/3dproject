import { Canvas } from "@react-three/fiber";
import SceneContainer from "./components/SceneContainer";
import Navbar from "./components/Navbar";
import SphereScene from "./components/SphereScene";

function App() {
  return (
    <div className="bg-zinc-900 w-full">
      <div className="">
        <Navbar />
      </div>
      <div className="h-[100vh] w-full">
        <div className="absolute w-full h-[100vh] bg-gradient-to-t from-black items-center justify-start flex pl-10  z-10">
          <div>
            <h1 className="text-white text-6xl uppercase">New era 3d design</h1>
            <h2 className="text-gray-300 text-4xl uppercase">
              Write me a letter
            </h2>
          </div>
        </div>
        <Canvas color="" camera={{ position: [100, 30, 0], fov: 75 }}>
          <SceneContainer />
        </Canvas>
      </div>
      <div className="h-[100vh] bg-black grid grid-cols-2">
        <div>
          <h1 className="text-white">Selector</h1>
        </div>
        <Canvas
          className="cursor-grab"
          color=""
          camera={{ position: [2, 2, 0], fov: 75 }}
        >
          <SphereScene />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
