import React from "react";

const TextField = React.memo(({ handleClick, text, handleChange, loading }) => {
  return (
    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg space-y-4">
      <input
        type="text"
        value={text}
        onChange={(e) => handleChange(e)}
        placeholder="Describe your vibe in a few words..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={handleClick}
        className="w-full px-4 py-2 text-white rounded-md transition duration-200 
    bg-indigo-500 hover:bg-indigo-600 cursor-pointer
    disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
        disabled={loading}
      >
        Gaana Barsao!
      </button>
    </div>
  );
});

export default TextField;
