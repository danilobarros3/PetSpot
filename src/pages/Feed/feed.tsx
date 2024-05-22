import { HeaderFeed } from "../../components/HeaderFeed";
export function Feed(){
  return(
    <>
    <HeaderFeed/>
    <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl shadow-2xl">
        <div className="grid w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold text-5xl mb-6">
              Meus Pets
            </p>
            <p>Clique no seu pet para ver mais informações</p>
          </div>
          <div className="flex gap-2 p-2">
                <select className="border-2 rounded-2xl border-white bg-white p-2 mt-4">
                  <option value="" disabled selected hidden>
                    Selecione:
                  </option>
                  <option value="">Ultimo acesso</option>
                  <option value="">Ordem alfabética</option>
                </select>
              </div>
        </div>
      </div>
    </>
  )
}