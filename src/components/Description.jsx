import React from "react";
import SphereScene from "./SphereScene";
import { Canvas } from "@react-three/fiber";

const Description = () => {
  return (
    <div className="grid grid-cols-2 px-10" id="description">
      <div className="font-bold">
        <div className="text-4xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
            Описание услуг
          </span>
        </div>
        <div className="pl-5 text-xl gap-4 mt-10 grid grid-cols-1 pb-10">
          <p>
            Создание сайтов с использованием{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              React
            </span>
            ,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Next.js
            </span>
            {" и "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Tailwind CSS
            </span>
          </p>
          <p>
            Интеграция{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Three.js Fiber
            </span>{" "}
            для добавления 3D элементов на сайт
          </p>
          <p>
            Оптимизация сайта для максимальной производительности и скорости
            загрузки
          </p>
          <p>Поддержка и обслуживание сайта после его запуска</p>
        </div>
        <div className="text-4xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
            Преимущества
          </span>
        </div>
        <div className="pl-5 text-xl gap-4 mt-10 grid grid-cols-1 pb-10">
          <p>
            Мы создаем сайты, которые работают на всех устройствах и браузерах
          </p>
          <p>
            Наша команда разработчиков имеет большой опыт работы с{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-indigo-500">
              React
            </span>
            ,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-indigo-500">
              Next.js
            </span>
            ,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500  to-indigo-500">
              Tailwind CSS
            </span>{" "}
            и{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500  to-indigo-500 ">
              Three.js Fiber
            </span>
          </p>
          <p>
            Мы используем современные технологии, чтобы создать красивые и
            функциональные сайты, которые помогут вам достичь ваших целей
          </p>
        </div>
      </div>
      <Canvas
        className="cursor-grab h-full"
        color=""
        camera={{ position: [4, 0, 0], fov: 75 }}
      >
        <SphereScene />
      </Canvas>
    </div>
  );
};

export default Description;
