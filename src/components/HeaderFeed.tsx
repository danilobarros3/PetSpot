import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoPaws from "../assets/headerimage.png";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

export function HeaderFeed() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectAllPets = () => {
    navigate("/meus-pets");
  };
  const redirectMenu = () => {
    navigate("/feed");
  };

  return (
    <div className="rounded-3xl w-full bg-white border-[1px] border-gray-100 shadow-lg p-4 mb-10 mt-10">
      <div className="flex md:justify-center gap-10 items-center w-full justify-between">
        <img
          src={logoPaws}
          alt="Logo da Pata"
          className="cursor-pointer"
          onClick={redirectMenu}
        />
        <p className="md:hidden text-center items-center flex justify-center text-lg font-bold">
          PETSPOT
        </p>
        <div className="hidden md:flex md:justify-end gap-10 items-center">
          <p onClick={redirectMenu}>Menu</p>
          <p>Histórico</p>
          <p onClick={redirectAllPets}>Meus Pets</p>
          <p>Prestadores de serviço</p>
          <p>Convênio</p>
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
                  <MenubarItem onClick={redirectMenu}>Menu</MenubarItem>
                  <MenubarItem>Histórico</MenubarItem>
                  <MenubarItem onClick={redirectAllPets}>Meus Pets</MenubarItem>
                  <MenubarItem>Prestadores de serviço</MenubarItem>
                  <MenubarItem>Convênio</MenubarItem>
                </MenubarContent>
              )}
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
}
