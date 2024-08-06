import { Bell, CircleUser, Mail, Search, Settings } from "lucide-react";

import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

import { useState } from "react";
import { Accent, AccentColor, useTheme } from "../components/ThemeProvider";
import LogoutAlert from "./LogoutAlert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function Header() {
  const { setTheme, setAccent, accent } = useTheme();
  const [isMailDrawerOpen, setIsMailDrawerOpen] = useState(false);
  const [isNotificationsDrawerOpen, setIsNotificationsDrawerOpen] =
    useState(false);
  const [isSupportAlertDialogOpen, setIsSupportAlertDialogOpen] =
    useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);
  const [isLogoutAlertDialogOpen, setIsLogoutAlertDialogOpen] = useState(false);

  function onOpenChange(value: boolean) {
    if (isMailDrawerOpen) {
      setIsMailDrawerOpen(value);
    }
    if (isNotificationsDrawerOpen) {
      setIsNotificationsDrawerOpen(value);
    }
    if (isSettingsDrawerOpen) {
      setIsSettingsDrawerOpen(value);
    }
  }

  return (
    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4 dark:bg-slate-800">
      <div className="relative ml-auto flex-1 ">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:hover:bg-slate-600 sm:flex hidden"
          >
            <Mail className="size-4" />
            <span className="sr-only">Mail</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[80vh]">
          <DrawerHeader>
            <DrawerTitle>Mail</DrawerTitle>
            <DrawerDescription>Check your mail here</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-40">No new mails founds. </div>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:hover:bg-slate-600 sm:flex hidden"
          >
            <Settings className="size-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </DrawerTrigger>
        <SettingsDrawer accent={accent} setAccent={setAccent} />
      </Drawer>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:hover:bg-slate-600 sm:flex hidden"
          >
            <Bell className="size-4" />
            <span className="sr-only">Notifications</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[80vh]">
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              All your notifications will be shown here
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-40">No notifications to show</div>
        </DrawerContent>
      </Drawer>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:hover:bg-slate-600 sm:flex hidden"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Drawer
        open={
          isMailDrawerOpen || isNotificationsDrawerOpen || isSettingsDrawerOpen
        }
        onOpenChange={onOpenChange}
      >
        <AlertDialog
          open={isSupportAlertDialogOpen || isLogoutAlertDialogOpen}
          onOpenChange={
            isSupportAlertDialogOpen
              ? setIsSupportAlertDialogOpen
              : setIsLogoutAlertDialogOpen
          }
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full ml-6"
              >
                <Avatar className=" h-9 w-9 flex">
                  <AvatarImage src="/images/me.png" alt="Avatar" />
                  <AvatarFallback>
                    <CircleUser className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="sm:hidden flex" />
              <DropdownMenuItem
                className="sm:hidden flex"
                onClick={() => setIsMailDrawerOpen(true)}
              >
                <span>Mail</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="sm:hidden flex"
                onClick={() => setIsNotificationsDrawerOpen(true)}
              >
                <span>Notifications</span>
              </DropdownMenuItem>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <DropdownMenuItem className="sm:hidden flex">
                    <span>Toggle Theme</span>
                  </DropdownMenuItem>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => setIsSettingsDrawerOpen(true)}>
                <span>Settings</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => setIsSupportAlertDialogOpen(true)}
              >
                <span>Support</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => setIsLogoutAlertDialogOpen(true)}
              >
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isMailDrawerOpen && (
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Mail</DrawerTitle>
                <DrawerDescription>Check your mail here</DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-40 text-center sm:text-left">
                No new mails founds.{" "}
              </div>
            </DrawerContent>
          )}
          {isNotificationsDrawerOpen && (
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Notifications</DrawerTitle>
                <DrawerDescription>
                  All your notifications will be shown here
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 pb-40 text-center sm:text-left">
                No notifications to show
              </div>
            </DrawerContent>
          )}
          {isSettingsDrawerOpen && (
            <SettingsDrawer accent={accent} setAccent={setAccent} />
          )}
          {isSupportAlertDialogOpen && (
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Support</AlertDialogTitle>
                <AlertDialogDescription>
                  Email me on{" "}
                  <a
                    href="mailto:vishmallik@gmail.com"
                    className="text-blue-500"
                  >
                    vishmallik@gmail.com
                  </a>{" "}
                  to connect
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Okay</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          )}
          {isLogoutAlertDialogOpen && <LogoutAlert />}
        </AlertDialog>
      </Drawer>
    </header>
  );
}

type SettingsDrawerProps = {
  setAccent: (accent: Accent) => void;
  accent: Accent;
};

function SettingsDrawer({ setAccent, accent }: SettingsDrawerProps) {
  return (
    <DrawerContent className="max-h-[80vh]">
      <DrawerHeader>
        <DrawerTitle>Settings</DrawerTitle>
        <DrawerDescription>Configure the settings here</DrawerDescription>
      </DrawerHeader>
      <div className="p-4 mb-10">
        <p className="mb-2 font-medium">Theme</p>
        <Tabs
          defaultValue={accent}
          className="w-full sm:w-[400px] text-sm overflow-auto"
          onValueChange={(v) => {
            setAccent(v as Accent);
          }}
        >
          <TabsList>
            <TabsTrigger value={AccentColor.BLUE}>Blue</TabsTrigger>
            <TabsTrigger value={AccentColor.RED}>Red</TabsTrigger>
            <TabsTrigger value={AccentColor.GREEN}>Green</TabsTrigger>
            <TabsTrigger value={AccentColor.YELLOW}>Yellow</TabsTrigger>
            <TabsTrigger value={AccentColor.CYAN}>Cyan</TabsTrigger>
            <TabsTrigger value={AccentColor.MAGENTA}>Magenta</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </DrawerContent>
  );
}
