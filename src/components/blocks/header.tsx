import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";


const Header = () => {
  return (
    <header className="w-full mt-4 p-6 flex items-center justify-between bg-white/4 rounded-md border h-12 backdrop-blur-lg sticky top-0  max-sm:rounded-none max-sm:border-0">
      <div className="flex gap-1.5 items-center justify-center">
        <img className="size-10" src="/logo.svg" alt="" />
        <h1 className="text-2xl">ZeitGuard</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 max-sm:hidden">
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>FAQs</li>
        </ul>
      </nav>

      <Button className="max-sm:hidden">Download</Button>





      {/* Mobile Header */}

      <Sheet>
      <SheetTrigger asChild className="sm:hidden">
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          asdfsd
        </div>
      </SheetContent>
    </Sheet>


    </header>
  );
};



export default Header;