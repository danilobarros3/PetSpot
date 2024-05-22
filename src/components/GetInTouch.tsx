import { FormGetInTouch } from "./FormGetInTouch";
import emailIcon from "../assets/mailIcon.png";
import locationIcon from "../assets/locationIcon.png";
import phoneIcon from "../assets/phoneIcon.png";

export function GetInTouch() {
  return (
    <>
      <div className="w-full bg-primary rounded-3xl shadow-2xl mt-16 p-7">
        <h1 className="font-bold text-2xl mt-5">Entre em contato</h1>
        <hr className="w-full mt-5 mb-5" />
        <div className="grid md:grid-cols-2 w-full">
          <div className="md:flex grid justify-start items-center bg-white rounded-2xl w-full h-full mb-10">
            <FormGetInTouch />
          </div>
          <div className="grid-cols-1 md:grid-cols-2 gap-20 p-20 mt-10 md:grid hidden">
            <div className="text-start">
              <img src={emailIcon} alt="" />
              <p className="mt-2">Nós temos um time para te ajudar</p>
              <p className="text-white mt-2">contato@gmail.com</p>
            </div>
            <div className="text-start">
              <img src={locationIcon} alt="" />
              <p className="mt-2">Atendimento das 8h as 18h</p>
              <p className="text-white mt-2">
                Rua PetSpot, 123 - Vila do PetSpot
              </p>
            </div>
            <div className="text-start">
              <img src={phoneIcon} alt="" />
              <p className="mt-2">Entre em contato pelo telefone</p>
              <p className="text-white mt-2">(11) 1234-5678</p>
            </div>
            <div className="text-start">
              <img src={locationIcon} alt="" />
              <p className="mt-2">Nosso escritório</p>
              <p className="text-white mt-2">
                Rua PetSpot, 123 - Vila do PetSpot
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
