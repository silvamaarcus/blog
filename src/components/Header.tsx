import Logo from "/assets/svg/logo.svg";

import Button from "./ui/Button";
import Input from "./ui/Input";

import "./styles.css";
import { useState } from "react";

const Header = () => {
  const [open, isOpen] = useState<string>("hidden");
  const [active, isActive] = useState<string>("");

  const handleClick = () => {
    isOpen(open === "hidden" ? "block" : "hidden");
    isActive(active === "" ? "active" : "");
  };

  return (
    <>
      {/* Desktop */}
      <section className="hidden border-b border-customBlack-light sm:block">
        <div className="custom-container mx-auto my-0">
          <header className="flex h-20 items-center justify-between px-5">
            <div className="flex items-center gap-14">
              <div>
                <img src={Logo} alt="Logo" />
              </div>

              <ul className="flex list-none items-center space-x-10">
                <li className="p-2 text-customWhite-dark hover:text-customWhite-light">
                  <a href="#">Categoria</a>
                </li>
                <li className="p-2 text-customWhite-dark hover:text-customWhite-light">
                  <a href="#">Sobre</a>
                </li>
                <li className="p-2 text-customWhite-dark hover:text-customWhite-light">
                  <a href="#">Contato</a>
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
      <section className="block border-b border-customBlack-light sm:hidden">
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
              <a
                href="#"
                className="bg-gradient-1 bg-clip-text text-transparent"
              >
                Login
              </a>
            </span>
          </header>
        </div>
      </section>
      {/* Menu Mobile */}
      <section className={`${open}`}>
        <ul className="border-b border-customBlack-light">
          <li className="border-b border-customBlack-light p-5 hover:bg-customBlack-normal">
            <a href="#">Categorias</a>
          </li>
          <li className="border-b border-customBlack-light p-5 hover:bg-customBlack-normal">
            <a href="#">Sobre</a>
          </li>
          <li className="border-b border-customBlack-light p-5 hover:bg-customBlack-normal">
            <a href="#">Contato</a>
          </li>
          <li className="p-5">
            <Input placeholder="Buscar" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
