import { Footer } from "../../components/Footer";
import imageRegister from "../../assets/registerImage.png";
import { FormRegister } from "./components/FormRegister";
import { Layout } from "../../Layout";

export function Register() {
  return (
    <>
      <Layout> 
      <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl p-4">
        <div className="grid md:grid-cols-2 w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold md:text-7xl text-6xl mt-10 md:mb-6 mb-2">Registre-se</p>
            <div className="w-full md:w-[70%] mt-10 rounded-2xl p-2">
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
      </Layout>
    </>
  );
}
