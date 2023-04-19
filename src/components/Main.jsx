import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Interface from "./Interface";

import emailjs from "@emailjs/browser";
import { MutatingDots, Rings } from "react-loader-spinner";
import PersonAnimated from "./PersonAnimated";

const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

const Main = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

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
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-10">
                <input
                  className=" bg-zinc-100 rounded-md px-2 py-1"
                  type="text"
                  placeholder="Имя"
                  name="name"
                />
                <input
                  className=" bg-zinc-100 rounded-md px-2 py-1"
                  type="text"
                  placeholder="Контакт для связи"
                  name="contact"
                />
              </div>
              <div className=" my-5">
                <textarea
                  className=" w-full bg-zinc-100 rounded-md p-5"
                  name="description"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Сообщение..."
                ></textarea>
              </div>
              <div className="justify-end">
                <input
                  value={"Отправить"}
                  type="submit"
                  className="cursor-pointer border-none font-bold bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl px-4 py-2 hover:shadow-lg duration-300 hover:shadow-blue-500/50"
                />
              </div>
            </form>
          </div>
        </div>

        <Interface />
      </div>
      <Suspense
        fallback={
          <div className="mx-auto h-[100vh] flex items-center">
            <Rings
              height="80"
              width="80"
              color="blue"
              radius="6"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
          </div>
        }
      >
        <Canvas camera={{ position: [3, 0, -2], fov: 50 }} shadows="soft">
          <PersonAnimated />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Main;
