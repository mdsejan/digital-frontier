import MenuLink from "./MenuLink";

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between">
      <h1 className="text-3xl tracking-tight  font-bold text-neutral-900">
        Digital Frontier
      </h1>
      <div className="flex gap-5">
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
