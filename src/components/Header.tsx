import { Link } from "react-router-dom";

import Logo from "/assets/svg/logo.svg";

import Button from "./ui/Button";
import Input from "./ui/Input";

import "./styles.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, isOpen] = useState<string>("hidden");
  const [active, isActive] = useState<string>("");

  const [showMenu, isShowMenu] = useState<string>("");

  // Efeito Glass no Header ao fazer scroll no mouse
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    isOpen(open === "hidden" ? "block" : "hidden");
    isActive(active === "" ? "active" : "");
    isShowMenu(showMenu === "" ? "show-menu-mobile" : "");
  };

  return (
    <>
      {/* Desktop */}
      <section
        className={`scroll fixed z-10 hidden w-full border-b border-customBlack-light sm:block ${isScrolled ? "bg-customAuxiliary-glass backdrop-blur-[6px]" : "bg-customAuxiliary-glass backdrop-blur-[6px]"}`}
      >
        <div className="custom-container mx-auto my-0">
          <header className="flex h-20 items-center justify-between px-5">
            <div className="flex items-center gap-14">
              <div>
                <Link to="/home">
                  <img src={Logo} alt="Logo" className="hover:opacity-80" />
                </Link>
              </div>

              <ul className="flex list-none items-center space-x-10">
                <li className="p-2 text-customWhite-dark hover:text-customWhite-light">
                  <Link to="/home">Categoria</Link>
                </li>
                <li className="p-2 text-customWhite-dark hover:text-customWhite-light">
                  <Link to="/home">Sobre</Link>
                </li>
                <li className="p-2 text-customWhite-dark hover:text-customWhite-light">
                  <Link to="/home">Contato</Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-[68px]">
              <Input placeholder="Buscar" />
              <Button>Login</Button>
            </div>
          </header>
        </div>
      </section>

      {/* Mobile */}
      <section
        className={`fixed z-10 block w-full border-b border-customBlack-light sm:hidden ${isScrolled ? "bg-customAuxiliary-glass backdrop-blur-[6px]" : "bg-customAuxiliary-glass backdrop-blur-[6px]"}`}
      >
        <div className="custom-container mx-auto my-0">
          <header className="flex h-20 items-center justify-between px-5">
            <div>
              <img src={Logo} alt="Logo" />
            </div>

            <div
              className={`bx ${active} h-10 w-10 cursor-pointer hover:opacity-80`}
              onClick={handleClick}
            ></div>

            <span>
              <Link
                to="/home"
                className="bg-gradient-1 bg-clip-text text-transparent"
              >
                Login
              </Link>
            </span>
          </header>
        </div>
      </section>
      {/* Menu Mobile */}
      <section
        className={`${open} ${showMenu} animation-menu-mobile h-screen w-full pt-20`}
      >
        <ul className="border-b border-customBlack-light">
          <li className="inline-block w-full border-b border-customBlack-light px-2 py-6 hover:bg-customBlack-light hover:pl-6">
            <Link to="/home">Categorias</Link>
          </li>
          <li className="inline-block w-full border-b border-customBlack-light px-2 py-6 hover:bg-customBlack-light hover:pl-6">
            <Link to="/home">Sobre</Link>
          </li>
          <li className="inline-block w-full border-b border-customBlack-light px-2 py-6 hover:bg-customBlack-light hover:pl-6">
            <Link to="/home">Contato</Link>
          </li>
          <li className="px-2 py-6">
            <Input placeholder="Buscar" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
