import React from "react";
import { Link } from "react-router-dom";

const CharViewPage = ({ charData }) => {
  console.log(charData);
  return (
    <div className="px-2 py-3">
      <Link to={"/"}>
        <div className="text-xl font-semibold text-cyan-500">Back To All Charaters</div>
      </Link>
      <div className="flex flex-col items-center justify-center px-6 py-6 space-y-5">
        <img
          src={charData?.image}
          alt=""
          className="border-2 rounded-xl border-cyan-600"
        />
        <h2 className="text-3xl font-bold text-amber-400">{charData?.name}</h2>
        <div className="flex flex-col items-center justify-center w-1/3 space-y-8 font-semibold text-white">
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="text-lg"> Gender : </span>
              <span className="text-xl text-emerald-400">
                {" "}
                {charData?.gender}
              </span>
            </div>
            <div>
              <span className="text-lg"> Status :</span>
              <span className="text-xl text-emerald-400">
                {" "}
                {charData?.status}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div>
              <span className="text-lg"> Species :</span>{" "}
              <span className="text-xl text-emerald-400">
                {charData?.species}
              </span>
            </div>
            <div>
              <span className="text-lg"> Origin : </span>
              <span className="text-xl text-emerald-400">
                {" "}
                {charData?.origin?.name}
              </span>
            </div>
          </div>
          <div className="justify-start w-full">
            <span className="text-lg">Location :</span>
            <span className="text-xl text-emerald-400">
              {" "}
              {charData?.location?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharViewPage;
