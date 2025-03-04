const Footer = () => {
  return (
    <footer className="h-64 border rounded-md grid grid-cols-4 max-md:grid-cols-1 gap-4 p-4 justify-center">
      <div>
      <div className="flex gap-1.5 items-center">
        <img className="size-10" src="/logo.svg" alt="" />
        <h1 className="text-2xl">ZeitGuard</h1>
      </div>
        <p>Protecting your time, one minute at a time</p>
      </div>
      <div>
        <div>Features</div>
      </div>
      <div>
        <div>Products</div>
      </div>
      <div>
        <div>Products</div>
      </div>
    </footer>
  );
};

export default Footer;
