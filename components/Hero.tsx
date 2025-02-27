import React from "react";

export default function Hero() {
  return (
    <section className="px-6 py-14 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-between md:space-x-14 md:mt-16">
        <div>
          {/* Logo */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Scaffold-ETH Mobile
          </h1>

          {/* Main heading */}
          <p className="max-w-lg mx-auto text-xl sm:text-2xl text-gray-300 mb-8">
            Build native mobile dApps using{" "}
            <span className="text-white font-semibold">lightweight</span>,{" "}
            <span className="text-white font-semibold">composable</span>, and{" "}
            <span className="text-white font-semibold">type-safe</span> modules
            that interface with Ethereum
          </p>

          {/* Action buttons */}
          <div className="flex gap-4 mb-12">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors">
              Get started
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
              Why SEM?
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors">
              GitHub
            </button>
          </div>
        </div>

        {/* Package manager tabs */}
        <div>
          <div className="w-full max-w-[500px] mx-auto bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="flex border-b border-gray-700">
              <button className="px-4 py-2 text-orange-400 border-b-2 border-orange-400 font-medium">
                git
              </button>
            </div>
            <div className="p-4 pb-14 text-left font-mono">
              <code className="text-gray-300">
                git clone https://github.com/dewdrip/scaffold-eth-mobile
              </code>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-between mt-10">
            <div className="flex items-center gap-2 border border-gray-600 px-3 py-[0.35rem] rounded-lg">
              <span className="text-sm font-bold text-gray-400 bg-gray-800 rounded-md px-3">
                stars
              </span>
              <span className="text-sm font-bold text-white">2.4k</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-600 px-3 py-[0.35rem] rounded-lg">
              <span className="text-md font-bold text-gray-400 bg-gray-800 rounded-md px-3">
                coverage
              </span>
              <span className="text-sm font-bold text-green-400">100%</span>
            </div>
            <div className="flex items-center gap-2 border border-gray-600 px-3 py-[0.35rem] rounded-lg">
              <span className="text-md font-bold text-gray-400 bg-gray-800 rounded-md px-3">
                license
              </span>
              <span className="text-sm font-bold text-white">MIT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        <div className="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-2">Modular</h3>
          <p className="text-gray-400">
            Composable modules to build applications & libraries with speed
          </p>
        </div>
        <div className="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-2">Lightweight</h3>
          <p className="text-gray-400">
            Tiny bundle size optimized for tree-shaking
          </p>
        </div>
        <div className="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-2">Performant</h3>
          <p className="text-gray-400">
            Optimized architecture compared to alternative libraries
          </p>
        </div>
        <div className="p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-2">Typed APIs</h3>
          <p className="text-gray-400">
            Flexible programmatic APIs with extensive TypeScript typing
          </p>
        </div>
      </div>
    </section>
  );
}
