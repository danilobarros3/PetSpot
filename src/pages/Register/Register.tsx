import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import imageRegister from "../../assets/registerImage.png";
import { FormRegister } from "./components/FormRegister";

export function Register() {
  return (
    <>
      <Header />
      <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl p-4">
        <div className="grid md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold md:text-7xl text-5xl mt-10 mb-6">Registre-se</p>
            <div className="w-[70%] mt-10 rounded-2xl p-2">
              <FormRegister />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imageRegister}
              alt="Login"
              className="w-full max-h-full hidden md:block"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
