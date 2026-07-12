import { useState } from "react";

import Dashboard from "./components/Page/Dashboard";
import { AssetProvider } from "./context/AssetContext";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <AssetProvider>
        <Dashboard />
      </AssetProvider>
    </div>
  );
}

export default App;
