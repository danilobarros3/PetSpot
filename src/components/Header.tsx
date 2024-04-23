import logoPaws from "../assets/paws 1.png"
export function Header() {
  return (
    <div className="rounded-3xl bg-white border-[1px] border-gray-100 shadow-lg p-4 mb-10 mt-10">
      <div className="flex gap-10 text-center items-center">
      <img src={logoPaws} alt="Logo da Pata" />
      <p>Sobre nós</p>
      <p>Nosso serviços</p>
      <p>Sobre Produtos</p>
      <p>Pet Care</p>
      <p>Contato</p>
      <div className="bg-orange-400 p-2 rounded-full">
      <p className="text-lg">Login</p>
      </div>
      <div className="bg-orange-400 p-2 rounded-full">
      <p>Registre-se</p>
      </div>
      </div>
    </div>
  )
}
