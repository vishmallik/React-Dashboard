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

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
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
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export default function Header() {
  const { setTheme, setAccent, accent } = useTheme();

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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full ml-6">
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
            onClick={(e) => e.preventDefault()}
            className="sm:hidden flex"
          >
            <Drawer>
              <DrawerTrigger asChild>
                <span>Mail</span>
              </DrawerTrigger>
              <DrawerContent className="max-h-[80vh]">
                <DrawerHeader>
                  <DrawerTitle>Mail</DrawerTitle>
                  <DrawerDescription>Check your mail here</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 pb-40">No new mails founds. </div>
              </DrawerContent>
            </Drawer>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={(e) => e.preventDefault()}
            className="sm:hidden flex"
          >
            <Drawer>
              <DrawerTrigger asChild>
                <span>Notifications</span>
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
          <DropdownMenuItem onClick={(e) => e.preventDefault()}>
            <Drawer>
              <DrawerTrigger asChild>
                <span>Settings</span>
              </DrawerTrigger>
              <SettingsDrawer accent={accent} setAccent={setAccent} />
            </Drawer>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={(e) => e.preventDefault()}>
            <AlertDialog>
              <AlertDialogTrigger>Support</AlertDialogTrigger>
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
                  {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
                  <AlertDialogAction>Okay</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault();
              console.dir(e);
            }}
          >
            <AlertDialog>
              <AlertDialogTrigger>Logout</AlertDialogTrigger>
              <LogoutAlert />
            </AlertDialog>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
          className="w-[400px]"
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
