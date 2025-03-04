import { Button } from "../ui/button";

const Hero = () => {
  return (
      <section className="w-full h-150 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl">Elavate yourself with ZeitGuard</h1>
        <p className="text-sm text-muted-foreground">Get things done with our app</p>
       <div className="flex gap-4">
       <Button className="hero-button">

        <span>

        App store
        </span>
       </Button>
       <Button className="hero-button">Play Store</Button>
       </div>
      </section>
  );
};

export default Hero;
