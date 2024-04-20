import MenuLink from "./MenuLink";

const Navigation: any = () => {
  return (
    <nav className="w-full p-5 flex flex-row flex-wrap place-items-center justify-between">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900 mb-5 md:mb-0 mx-auto md:mx-0">
        Digital Frontier
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <MenuLink href="/" label="Home" />
        <MenuLink href="/about" label="About" />
        <MenuLink href="/work" label="Work" />
        <MenuLink href="/lab" label="Lab" />
        <MenuLink href="/contact" label="Contact" />
      </div>
    </nav>
  );
};

export default Navigation;
