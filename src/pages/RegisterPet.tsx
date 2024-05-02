import registerPet from "../assets/registerPet.png";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
export function RegisterPet() {
  return (
    <>
      <Header />
      <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl p-4">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold text-7xl mt-10 mb-6">
              Cadastre seu Pet
            </p>
            <div className="w-[70%] mt-10 rounded-2xl p-2">
              <div className="flex gap-5">
                <Input
                  type="text"
                  placeholder="Nome"
                  className="border-2 rounded-2xl border-white bg-white p-4 mt-4  py-5"
                />
              </div>
              <div className="flex gap-2">
                <select className="border-2 rounded-2xl w-full p-2 border-white bg-white mt-4">
                  <option value="" disabled selected hidden>
                    Espécie
                  </option>
                  <option value="">Cachorro</option>
                  <option value="">Gato</option>
                </select>
                <select className="border-2 rounded-2xl w-full border-white p-2 mt-4 bg-white">
                  <option value="" disabled selected hidden>
                    Gênero
                  </option>
                  <option value="">Macho</option>
                  <option value="">Femêa</option>
                </select>
              </div>
              <div className="flex gap-2">
                <select className="border-2 rounded-2xl border-white bg-white p-2 mt-4 w-full">
                  <option value="" disabled selected hidden>
                    Raça
                  </option>
                  <option value="">Pitbull</option>
                  <option value="">Bulldog</option>
                </select>
                <Input
                  type="text"
                  placeholder="Peso atual"
                  className="border-2 rounded-2xl border-white bg-white p-4 mt-4  py-5"
                />
              </div>
              <div>
                <Input
                  type="date"
                  className="border-2 rounded-2xl border-white bg-white p-4 mt-4  py-5"
                />
              </div>
              <div className="flex justify-between mb-5 mt-5 p-2">
                <Checkbox className="text-black mb-6 size-4 mt-1 border-2 border-black rounded" />
                <p>Eu li e concordo com a Política de Privacidade</p>
              </div>
              <Button className="w-full flex justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6">
                <p className="text-lg">Finalizar cadastro</p>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={registerPet} alt="Login" className="w-full max-h-full" />
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center mt-20">
        <p className="text-lg font-medium">
          Mantenha seus animais de estimação felizes e saudáveis com cuidado
          constante.
        </p>
      </div> */}
      <Footer/>
    </>
  );
}
