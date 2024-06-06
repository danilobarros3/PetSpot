import { useEffect, useState } from "react";
import { HeaderFeed } from "../../components/HeaderFeed";
import api from "../../services";
import { useAuth } from "../../hooks/useAuth";
import { LoaderCircle } from "lucide-react";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";

interface Pet {
  id: string;
  name: string;
  gender: boolean | number;
  age: number;
  weight: number;
  race: string;
}

export function Feed() {
  const [petList, setPetList] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { userId } = useAuth();

  const getPetAll = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await api.get(
        `/${userId}/pet/findAll?page=${pageNumber}`
      );
      const { content, totalPages } = response.data.page;
      const pets = content.map((item: Pet) => ({
        id: item.id,
        name: item.name,
        gender: item.gender === 1 ? "Male" : "Female",
        weight: Number(item.weight),
        age: item.age,
        race: item.race,
      }));
      setPetList(pets);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPetAll(page);
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <HeaderFeed />
      <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl shadow-2xl">
        <div className="grid w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold text-5xl mb-6">Meus Pets</p>
            <p>Clique no seu pet para ver mais informações</p>
          </div>
          <div className="md:flex grid ml-[35px] p-2 gap-5 mb-5 md:ml-[115px]">
            <select className="border-2 rounded-2xl border-white bg-white p-2 mt-4 text-lg md:w-[27%] text-center w-[90%]">
              <option value="" disabled selected hidden>
                Selecione a ordenação
              </option>
              <option value="0">Último acesso</option>
              <option value="1">Ordem alfabética</option>
            </select>
            <div>
              <Button className="border-2 rounded-2xl border-white bg-white p-2 mt-4 hover:bg-black hover:text-white h-[80%] w-[90%] md:w-[100%]">
                <p className="text-lg">Cadastrar novo pet</p>
              </Button>
            </div>
          </div>
          <div className="bg-[#CCE7F6] rounded-2xl md:h-[59vh] p-2 w-[80%] md:ml-[120px] ml-[40px]">
            <div className="p-2 grid grid-cols-1 md:grid-cols-2 w-full md:h-[500px]">
              {loading && <LoaderCircle className="animate-spin size-10" />}
              {petList?.map((item: Pet) => (
                <div
                  key={item.id}
                  className="relative m-2 p-4 bg-black rounded-xl flex flex-col md:flex-row items-center mb-10"
                >
                  <div className="absolute top-0 w-[90%] grid items-center justify-center p-2 bg-white rounded-3xl opacity-80">
                    <p>Banho & Tosa - 05/06/2024</p>
                  </div>
                  <div
                    className="w-full h-full absolute top-0 left-0 bg-cover bg-center opacity-20 rounded-xl"
                    style={{
                      backgroundImage: `url(https://media.discordapp.net/attachments/1111489625232515115/1247927718897647627/3C2C9005-A507-4ADD-BEA7-ADFE807822A3.jpg?ex=6661cec1&is=66607d41&hm=915ddc09df8cae4310a42110c1ee7f74258ade5cbb82b03550062b58e4ecddf1&=&format=webp&width=1357&height=1169)`,
                    }}
                  ></div>
                  <div className="relative w-[170px] h-[170px] bg-gray-200 rounded-3xl mb-2 mt-10 md:mt-10">
                    <img
                      src={`https://media.discordapp.net/attachments/1111489625232515115/1247927718897647627/3C2C9005-A507-4ADD-BEA7-ADFE807822A3.jpg?ex=6661cec1&is=66607d41&hm=915ddc09df8cae4310a42110c1ee7f74258ade5cbb82b03550062b58e4ecddf1&=&format=webp&width=1357&height=1169`}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div className="ml-0 md:ml-10 grid justify-center text-center items-center">
                    <p className="font-semibold text-4xl text-white">
                      {item.name}
                    </p>
                    <p className="text-2xl text-white underline">
                      {item.gender}
                    </p>
                    <p className="text-sm text-white">2 anos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between p-2 md:mt-5">
            <button
              className="border-2 rounded-2xl border-white bg-white p-2"
              onClick={handlePreviousPage}
              disabled={page === 0}
            >
              Voltar
            </button>
            <button
              className="border-2 rounded-2xl border-white bg-white p-2"
              onClick={handleNextPage}
              disabled={page >= totalPages - 1}
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
