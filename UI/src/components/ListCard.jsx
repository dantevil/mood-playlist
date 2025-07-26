import React from "react";
import { Music } from "lucide-react";

const ListCard = React.memo(({ lists, handleNavigate }) => {
  return (
    <>
      {lists?.recommendations?.map((list, idx) => (
        <div
          className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden flex items-center space-x-4 p-4"
          key={idx}
        >
          <Music />

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              {list?.artist}
            </h2>
            <p className="text-sm text-gray-600">{list?.name}</p>
          </div>

          <button
            className="text-indigo-600 hover:text-indigo-900 font-medium cursor-pointer"
            onClick={() => handleNavigate(list?.url)}
          >
            Play
          </button>
        </div>
      ))}
    </>
  );
});

export default ListCard;