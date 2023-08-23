import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ char }) => {
  const navigate = useNavigate();

  return (
    <div
      key={char.id}
      className="flex flex-col items-center justify-center w-64 px-5 py-4 border hover:border-4 hover:border-cyan-500 rounded-lg border-emerald-500 h-[350px] cursor-pointer"
      onClick={() => navigate(`/${char.id}`)}
    >
      <img src={char.image} alt="" className="pb-4 rounded-full" />
      <div className="flex justify-between w-full space-x-1">
        <div className="w-1/2 text-xl font-bold text-yellow-400">
          {char.name}
        </div>
        <div className="flex flex-col items-end justify-center w-1/2 text-base text-slate-300">
          <div className=" whitespace-nowrap">Gender: {char.gender}</div>
          <div className=" whitespace-nowrap">Status: {char.status}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
