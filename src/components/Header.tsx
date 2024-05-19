import { useNavigate } from "react-router-dom"
import logoPaws from "../assets/paws.png"
export function Header() {
  const navigate = useNavigate()
  const redirectLogin = () => {
    navigate("/login");
  };
  const redirectRegister = () => {
    navigate("/cadastro");
  };
  function redirectHome(){
    navigate("/");
  }
  return (
    <div className="rounded-3xl w-full bg-white border-[1px] border-gray-100 shadow-lg p-4 mb-10 mt-10">
      <div className="flex gap-10 w-full text-center items-center">
      <img src={logoPaws} alt="Logo da Pata" className="cursor-pointer" onClick={redirectHome}/>
      <p>Sobre nós</p>
      <p>Nosso serviços</p>
      <p>Produtos</p>
      <p>Pet Care</p>
      <p>Contato</p>
      <div className="p-2 rounded-full">
      <p className="text-lg cursor-pointer" onClick={redirectLogin}>Login</p>
      </div>
      <div className="p-2 rounded-full">
      <p className="text-lg cursor-pointer" onClick={redirectRegister}>Registre-se</p>
      </div>
      </div>
    </div>
  )
}
