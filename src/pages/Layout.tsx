import { FC } from "react";

const Layout: FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-roboto text-white pb-20">
      <div className="flex justify-between items-center h-16 px-4">
        <h1 className="text-2xl">React Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm rounded-md text-gray-500 hover:text-gray-400">
            Dashboard
          </button>
          <button className="px-4 py-2 text-sm rounded-md text-gray-500 hover:text-gray-400">
            Settings
          </button>
        </div>
      </div>
      <div className="flex flex-grow">
        <div className="flex-1 px-4">
          {/* Your dashboard content goes here */}
        </div>
      </div>
      <div className="flex items-center justify-end px-4 py-2 text-sm text-gray
    </div>
  );
};

export default Layout;
