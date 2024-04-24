import imageRegister from "../assets/registerImage.png";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
export function Register() {
  return (
    <div className="w-full bg-[#FFE9D8] flex flex-col justify-center items-center rounded-3xl p-4">
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col justify-center items-center p-4">
          <p className="font-semibold text-7xl mt-10 mb-6">Registre-se</p>
          <div className="w-[70%] mt-10 rounded-2xl p-2">
            <div className="flex gap-5">
              <Input
                type="text"
                placeholder="Nome"
                className="border-2 rounded-2xl border-white bg-white p-4 mt-4  py-5"
              />
              <Input
                type="text"
                placeholder="Sobrenome"
                className="border-2 rounded-2xl border-white bg-white p-4 mt-4  py-5"
              />
            </div>
            <Input
              type="text"
              placeholder="E-mail"
              className="border-2 rounded-2xl border-white bg-white p-4 mt-4  py-5"
            />
            <Input
              type="password"
              placeholder="Senha"
              className="border-2 rounded-2xl border-white p-4 mt-4 bg-white py-5"
            />
            <Input
              type="date"
              className="border-2 rounded-2xl border-white bg-white p-4 mt-4  py-5"
            />
            <div className="flex justify-between">
              <p className="mt-5 mb-5">
                <Checkbox className="rounded" /> Eu li e concordo com os Termos
                e Política de privacidade
              </p>
            </div>
            <Button className="w-full flex justify-center border-2 rounded-3xl mt-4 bg-black text-white py-6">
              <p className="text-lg">Registre-se</p>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={imageRegister} alt="Login" className="w-full max-h-full" />
        </div>
      </div>
    </div>
  );
}