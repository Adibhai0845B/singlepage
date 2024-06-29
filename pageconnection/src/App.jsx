import React from 'react';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 z-10 w-full py-4 text-white bg-blue-600 shadow-md">
        <h1 className="text-xl font-bold text-center">Fixed Header</h1>
      </header>
      <main className="flex-grow p-4 mt-16 overflow-auto">
        {/* Add a lot of content here to enable scrolling */}
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        {/* Repeat the content or add more elements to make the page scrollable */}
        <div className="space-y-4">
          {Array.from({ length: 50 }).map((_, index) => (
            <p key={index}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. {index + 1}</p>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
