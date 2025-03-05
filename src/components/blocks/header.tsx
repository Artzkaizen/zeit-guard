import { Menu } from "lucide-react";
import { Button } from "../ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="cursor-pointer ml-auto sm:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full">
        <SheetHeader>
        <div className="flex lg:flex-1">
              <a href="/" className="flex items-center space-x-2">
                <img className="size-8" src="/zeit-guard/logo.svg" alt="Zeit Gaurd LogoZeit Guard Logo" />
                <span>ZeitGuard</span>
              </a>
            </div>

        </SheetHeader>

        <nav className="p-8 h-full">
          <ul className="relative isolate flex items-center justify-center flex-col space-y-4 ">
            <SheetClose  asChild>
              <li>
                <a href="#">Home</a>
              </li>
            </SheetClose>
            <SheetClose  asChild>
              <li>
                <a href="#features">Features</a>
              </li>
            </SheetClose>

            <SheetClose asChild>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </SheetClose>
          <div className="flex items-center justify-center  space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6">
            <button
              className="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
              type="button"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                Download Now
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-blue-600/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
          </ul>

        </nav>
      </SheetContent>
    </Sheet>
  );
}

const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-lg ">
      <div className="relative flex justify-center">
        <div className="mx-4 w-full container ">
          <nav
            className="flex items-center justify-between px-1 py-3"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="flex items-center space-x-2">
                <img className="size-8" src="/zeit-guard/logo.svg" alt="Zeit Gaurd Logo" />
                <span>ZeitGuard</span>
              </a>
            </div>

            <ul className="flex space-x-4 max-sm:hidden">
                <li>
              <Button variant="link" asChild>
                  <a href="#">Home</a>
              </Button>
                </li>
                <li>
              <Button variant="link" asChild>
                  <a href="#features">Features</a>
              </Button>
                </li>

                <li>
              <Button variant="link">
                  <a href="#faqs">FAQs</a>
              </Button>
                </li>
            </ul>

            <MobileMenu />

            <div className="flex  items-center  space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6">
              <button
                className="group max-sm:hidden relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
                type="button"
              >
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                  Download Now
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-blue-600/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
