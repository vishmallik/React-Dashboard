import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { AccentColor, ThemeProvider } from "./components/ThemeProvider";

import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import Orders from "./components/Orders";
import Wallet from "./components/Wallet";
import Inventory from "./components/Inventory";
import { Toaster } from "./components/ui/toaster";

export enum Tab {
  DASHBOARD = "Dashboard",
  ANALYTICS = "Analytics",
  ORDERS = "Orders",
  WALLET = "Wallet",
  INVENTORY = "Inventory",
}
function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD);
  function getContent(tab: Tab) {
    switch (tab) {
      case Tab.DASHBOARD:
        return <Dashboard />;
      case Tab.ANALYTICS:
        return <Analytics />;
      case Tab.ORDERS:
        return <Orders />;
      case Tab.WALLET:
        return <Wallet />;
      case Tab.INVENTORY:
        return <Inventory />;
      default:
        return <Dashboard />;
    }
  }
  return (
    <ThemeProvider
      defaultTheme="dark"
      defaultAccent={AccentColor.BLUE}
      storageKey="app-theme"
      accentStorageKey="app-accent"
    >
      <div className="grid h-screen w-full pl-[56px]">
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
        <div className="flex flex-col">
          <Header />
          {getContent(activeTab)}
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
