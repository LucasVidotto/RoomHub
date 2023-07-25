'use client'
'use client'
import { useState, useEffect } from "react";
import { GoEyeClosed } from "react-icons/go";

const ErrorCard = ({ onClose }) => {
  return (
    <div className="flex justify-center items-center absolute top-[40%] left-[60%] w-64 h-24 bg-red-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-solid border-2 border-white rounded-xl z-10">
      Usuario ou senha Incorretos
      <GoEyeClosed className="absolute top-1 right-2 cursor-pointer" onClick={onClose} />
    </div>
  );
};

export default function Error() {
  const [visibled, setVisibled] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o card estiver visível e o clique não foi dentro do card, feche o card.
      if (visibled && !event.target.closest(".ErrorCard")) {
        setVisibled(false);
      }
    };

    // Adiciona o event listener quando o componente for montado.
    document.addEventListener("click", handleClickOutside);

    // Remove o event listener quando o componente for desmontado.
    return () => document.removeEventListener("click", handleClickOutside);
  }, [visibled]);

  return (
    <>
      {visibled ? <ErrorCard onClose={() => setVisibled(false)} /> : null}
    </>
  );
}
