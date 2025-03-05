import { Circle, Instagram, Facebook, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-12 border-t border-zinc-800">
    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center mb-4">
          <span className="font-semibold">ZeitGuard</span>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Dream Town Street 1234,
          <br />
         Future
        </p>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="rounded-full w-8 h-8" aria-label="Instagram">
            <Instagram className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full w-8 h-8" aria-label="Facebook">
            <Facebook className="size-4" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Product</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>Privacy & Cookie Policy</li>
          <li>Security Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Info</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>Terms of Service</li>
          <li>Right of Withdrawal</li>
          <li>Disclaimer</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Subscribe for Newsletter</h3>
        <div className="flex gap-2 items-center">
          <input placeholder="Enter Your Email Here" className="bg-transparent border border-zinc-700 px-4 py-2 w-full rounded-md placeholder:text-sm" />
          <Button className="rounded-r-md h-10" aria-label="Subscribe">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
