import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  return (
    <div className="absolute bottom-12 right-5">
      <div className="grid grid-cols-1 gap-3">
        {["hip-hop", "robot dance", "stay", "walk"].map((animation, index) => (
          <button
            key={index + 3}
            className={
              index + 3 === animationIndex
                ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg  py-1 px-2 uppercase font-extrabold"
                : "text-blue-500 bg-white py-1 px-2 rounded-lg uppercase font-extrabold"
            }
            onClick={() => setAnimationIndex(index + 3)}
          >
            {animation}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Interface;
