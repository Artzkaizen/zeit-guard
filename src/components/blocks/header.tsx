import { Button } from "../ui/button";

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
                <img className="size-8" src="/logo.svg" alt="" />
                <span>ZeitGuard</span>
              </a>
            </div>

            <ul className="flex space-x-4 max-sm:hidden">
              <Button variant="link" asChild>
                <li>
                  <a href="#feature">Features</a>
                </li>
              </Button>
              <Button variant="link">
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </Button>
              <Button variant="link">
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
              </Button>
            </ul>
            <div className="flex  items-center  space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6">
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
