import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative isolate transform-gpu pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(222,79%,3%,0.5),rgba(255,255,255,0))]"></div>

      {/* SVG Background Pattern */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero"
            width="80"
            height="80"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero)"
        ></rect>
      </svg>

      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-3xl text-center">
            {/* Main Heading */}
            <h1 className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold tracking-tight text-transparent md:text-7xl/[1.07]">
              Unlock hidden super powers with ZeitGuard
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg font-medium text-zinc-400 md:text-xl max-w-xl md:mx-auto">
              Say goodbye to procrastion. Become one of the top 10% of people
              who get things done.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-y-8">
              {/* Download Button */}
              <div>
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

              {/* Download Link*/}
              <div className="group">
                <a href="/#features" className="flex flex-col items-center gap-1">
                  <p className="text-sm/6 text-zinc-400 duration-300 group-hover:text-zinc-100">
                    Learn more
                  </p>
                  <ArrowDown className="text-zinc-400 duration-300 group-hover:translate-y-1.5 group-hover:text-zinc-100" />
                </a>
              </div>
            </div>

            {/* App Preview Section */}
            <div className="relative pt-16 container max-w-3xl mx-auto">
              <div className="rounded-md  lg:rounded-2xl">
                <div className="flex justify-center items-center">
                  <img
                    src="/1.svg"
                    className="object-cover"
                    width={300}
                    height={300}
                    alt="A Snapshot displaying zeit gaurd's journey feature"
                  />
                  <img
                    src="/2.svg"
                    className="mb-32 object-cover"
                    alt="A home screen snapshot of zeit guard"
                    width={300}
                    height={300}
                  />
                  <img src="/3.svg" alt="" className="object-cover" width={300}
                    height={300}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
