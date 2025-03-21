import React from "react";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 font-sans">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <div className="text-xl font-bold">Logo</div>
        <input
          type="text"
          placeholder="Search bar"
          className="border rounded px-4 py-2 w-1/3"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Login/Sign-up</button>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl font-bold">Effortless Trading</h1>
        <p className="text-lg mt-2">F&O Trading made simple</p>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="+91"
            className="border rounded px-4 py-2 w-1/4"
          />
          <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded">Login</button>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="flex justify-around py-8">
        <div className="p-4 border rounded shadow-md">Mentorship Feature</div>
        <div className="p-4 border rounded shadow-md">Monetary Analysis</div>
        <div className="p-4 border rounded shadow-md">How It's Better & Benefits of Investing</div>
      </section>

      {/* Preview Section */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold">A Pic of our Website on Laptop & Phone</h2>
        <div className="mt-4 bg-gray-300 h-40 w-3/4 mx-auto rounded"></div>
      </section>

      {/* Everything You Need Section */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold">Everything You Need</h2>
        <div className="flex justify-around mt-4">
          <div className="p-4 border rounded shadow-md">Stats</div>
          <div className="p-4 border rounded shadow-md">Advanced Charts 360</div>
          <div className="p-4 border rounded shadow-md">F&O Directory</div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
