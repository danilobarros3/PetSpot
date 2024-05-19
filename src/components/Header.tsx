import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoPaws from "../assets/paws.png";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "./ui/menubar";

export function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectLogin = () => {
    navigate("/login");
  };
  const redirectRegister = () => {
    navigate("/cadastro");
  };
  const redirectHome = () => {
    navigate("/");
  };

  return (
    <div className="rounded-3xl w-full bg-white border-[1px] border-gray-100 shadow-lg p-4 mb-10 mt-10">
      <div className="flex md:justify-start gap-10 items-center w-full">
        <img
          src={logoPaws}
          alt="Logo da Pata"
          className="cursor-pointer"
          onClick={redirectHome}
        />
        <p className="md:hidden text-center items-center flex justify-center text-lg font-bold">PETSPOT</p>
        <div className="hidden md:flex gap-10 md:justify-start items-center">
          <p>Sobre nós</p>
          <p>Nossos serviços</p>
          <p>Produtos</p>
          <p>Pet Care</p>
          <p>Contato</p>
          <div className="p-2 rounded-full">
            <p className="text-lg cursor-pointer" onClick={redirectLogin}>
              Login
            </p>
          </div>
          <div className="p-2 rounded-full">
            <p className="text-lg cursor-pointer" onClick={redirectRegister}>
              Registre-se
            </p>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger
                className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </MenubarTrigger>
              {isMenuOpen && (
                <MenubarContent className="top-16 bg-white shadow-lg rounded-b-3xl">
                  <MenubarItem onClick={redirectHome}>Home</MenubarItem>
                  <MenubarItem>Sobre nós</MenubarItem>
                  <MenubarItem>Nossos serviços</MenubarItem>
                  <MenubarItem>Produtos</MenubarItem>
                  <MenubarItem>Pet Care</MenubarItem>
                  <MenubarItem>Contato</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={redirectLogin}>Login</MenubarItem>
                  <MenubarItem onClick={redirectRegister}>Registre-se</MenubarItem>
                </MenubarContent>
              )}
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
}
