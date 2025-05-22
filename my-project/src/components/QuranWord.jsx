import React from 'react';

const QuranWord = ({ word }) => {
  const handleClick = () => {
    console.log(`Word clicked: ${word}`);
  };

  return (
    <span
      onClick={handleClick}
      className="text-4xl font-amiri p-2 mx-1 my-1 cursor-pointer rounded-md hover:bg-accent/20 transition-colors duration-200 ease-in-out"
    >
      {word}
    </span>
  );
};

export default QuranWord;
