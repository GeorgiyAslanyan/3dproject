import { Canvas } from "@react-three/fiber";
import React from "react";
import PixelProject from "./PixelProject";
import Interface from "./Interface";

const Main = () => {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <div className="h-[100vh] w-full grid grid-cols-2" id="contact">
      <div className="w-full h-[100vh] items-center justify-start flex z-10 px-10">
        <div>
          <div className="text-4xl font-extrabold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 ">
              Закажите сайт с 3D 
            </span>
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 ">
            элементами уже сейчас!
            </p>
          </div>
          <div className="bg-white bg-opacity-25 backdrop-blur-md shadow-2xl rounded-lg min-h-[300px] p-5">
            <div className="grid grid-cols-2 gap-10">
              <input
                className=" bg-zinc-100 rounded-md px-2 py-1"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className=" bg-zinc-100 rounded-md px-2 py-1"
                type="text"
                placeholder="Контакт для связи"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className=" my-5">
              <textarea
                className=" w-full bg-zinc-100 rounded-md p-5"
                name=""
                id=""
                cols="30"
                rows="5"
                value={description}
                placeholder="Сообщение..."
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="justify-end">
              <button className="border-none font-bold bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl px-4 py-2 hover:shadow-lg duration-300 hover:shadow-blue-500/50">
                Отправить
              </button>
            </div>
          </div>
        </div>

        <Interface />
      </div>
      <Canvas camera={{ position: [3, 0, -2], fov: 50 }} shadows="soft">
        <PixelProject />
      </Canvas>
    </div>
  );
};

export default Main;
