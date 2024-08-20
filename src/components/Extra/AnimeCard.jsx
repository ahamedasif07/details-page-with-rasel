/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  const { title, name, image } = anime;

  return (
    <div className="   gap-5 mx-auto whitespace-nowrap">
      <div className="h-[300px]  w-[400px]">
        <img
          src={image}
          className="shadow h-[100%]  w-[100%] rounded-lg  border"
        />
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="mt-2 text-gray-600">{title}</p>
        <div className="mt-5">
          <Link to={`/card/${anime?.id}`}>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
