import NavMenu from "./NavMenu";


export default function Navbar() {
  return (
    <nav className="h-16 flex flex-col md:flex-row items-start px-4 py-2 shadow-lg bg-background z-50">
      <NavMenu />
    </nav>
  );
}
