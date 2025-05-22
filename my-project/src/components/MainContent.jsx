import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main className="flex-1 p-6 bg-background overflow-y-auto">
      <div className="container mx-auto">
        {/* Example Content - replace with actual page content later */}
        <h2 className="text-2xl font-bold mb-4 font-amiri text-text">Welcome to the Dashboard</h2>
        <p className="text-gray-700 font-cairo">
          This is where the main content of your application will be displayed. 
          You can start building out your pages and components here.
        </p>
        <div className="mt-6">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
