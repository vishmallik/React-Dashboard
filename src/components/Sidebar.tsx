import {
  Boxes,
  ChartColumnBigIcon,
  ClipboardCheck,
  Home,
  LogOut,
  ShoppingBag,
  Wallet,
} from "lucide-react";

import { Dispatch, SetStateAction } from "react";
import { AlertDialog, AlertDialogTrigger } from "./ui/alert-dialog";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Tab } from "../App";
import LogoutAlert from "./LogoutAlert";
import { useTheme } from "./ThemeProvider";

type SidebarProps = {
  setActiveTab: Dispatch<SetStateAction<Tab>>;
  activeTab: string;
};
export default function Sidebar({ setActiveTab, activeTab }: SidebarProps) {
  const { accent } = useTheme();
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r  dark:bg-slate-800">
      <div className="border-b p-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Home"
          className="dark:bg-black bg-slate-100"
        >
          <Boxes
            className="size-5"
            style={{
              fill: accent,
              color: accent,
            }}
          />
        </Button>
      </div>
      <nav className="grid gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-full rounded-none hover:bg-slate-300 dark:hover:bg-slate-700"
                style={{
                  borderLeft:
                    activeTab === Tab.DASHBOARD ? `4px solid ${accent}` : "",
                }}
                aria-label="Dashboard"
                onClick={() => {
                  setActiveTab(Tab.DASHBOARD);
                }}
              >
                <Home
                  className="size-5"
                  color={activeTab == Tab.DASHBOARD ? accent : undefined}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Dashboard
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-full rounded-none hover:bg-slate-300 dark:hover:bg-slate-700"
                style={{
                  borderLeft:
                    activeTab == Tab.ANALYTICS ? `4px solid ${accent}` : "",
                }}
                aria-label="Analytics"
                onClick={() => {
                  setActiveTab(Tab.ANALYTICS);
                }}
              >
                <ChartColumnBigIcon
                  className="size-5"
                  color={activeTab == Tab.ANALYTICS ? accent : undefined}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Analytics
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-full rounded-none hover:bg-slate-300  dark:hover:bg-slate-700"
                style={{
                  borderLeft:
                    activeTab == Tab.ORDERS ? `4px solid ${accent}` : "",
                }}
                aria-label="Orders"
                onClick={() => {
                  setActiveTab(Tab.ORDERS);
                }}
              >
                <ClipboardCheck
                  className="size-5"
                  color={activeTab == Tab.ORDERS ? accent : undefined}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Orders
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-full rounded-none hover:bg-slate-300 dark:hover:bg-slate-700"
                style={{
                  borderLeft:
                    activeTab == Tab.WALLET ? `4px solid ${accent}` : "",
                }}
                aria-label="Wallet"
                onClick={() => {
                  setActiveTab(Tab.WALLET);
                }}
              >
                <Wallet
                  className="size-5"
                  color={activeTab == Tab.WALLET ? accent : undefined}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Wallet
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-full rounded-none hover:bg-slate-300 dark:hover:bg-slate-700"
                style={{
                  borderLeft:
                    activeTab == Tab.INVENTORY ? `4px solid ${accent}` : "",
                }}
                aria-label="Inventory"
                onClick={() => {
                  setActiveTab(Tab.INVENTORY);
                }}
              >
                <ShoppingBag
                  className="size-5"
                  color={activeTab == Tab.INVENTORY ? accent : undefined}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Inventory
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <AlertDialog>
          <AlertDialogTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="mt-auto w-full hover:bg-slate-300 dark:bg-black dark:hover:bg-slate-700"
                    aria-label="Logout"
                    type="reset"
                  >
                    <LogOut className="size-5 p-2.5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  Logout
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </AlertDialogTrigger>
          <LogoutAlert />
        </AlertDialog>
      </nav>
    </aside>
  );
}
