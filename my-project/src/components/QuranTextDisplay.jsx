import React from 'react';
import QuranWord from './QuranWord';

const sampleWords = ['بِسْمِ', 'ٱللَّهِ', 'ٱلرَّحْمَـٰنِ', 'ٱلرَّحِيمِ', 'قُلْ', 'هُوَ', 'ٱللَّهُ', 'أَحَدٌ']; // Added more words for better visual

const QuranTextDisplay = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white shadow">
      <div className="flex flex-wrap justify-center dir-rtl">
        {sampleWords.map((word, index) => (
          <QuranWord key={index} word={word} />
        ))}
      </div>
    </div>
  );
};

export default QuranTextDisplay;
