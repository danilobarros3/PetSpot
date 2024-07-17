import { useEffect, useState } from "react";
import { HeaderFeed } from "../../components/HeaderFeed";
import api from "../../services";
import { useAuth } from "../../hooks/useAuth";
import { ChevronLeft, ChevronRight, LoaderCircle } from "lucide-react";
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

export function MyPets() {
  const [petList, setPetList] = useState<Pet[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { userId } = useAuth();
  const [sort, setSort] = useState<string>("");

  const getPetAll = async (pageNumber: number, sort: string = "") => {
    setLoading(true);
    try {
      const response = await api.get(
        `/${userId}/pet/findAll?page=${pageNumber}&sort=${sort}`
      );
      const { content, totalPages } = response.data.page;
      const pets = content.map((item: Pet) => ({
        id: item.id,
        name: item.name,
        gender: item.gender === 1 ? "Macho" : item.gender === 0 ? "Desconhecido" : "Fêmea",
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
    getPetAll(page, sort);
  }, [page, sort]);

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <HeaderFeed />
      <div className="w-full bg-gradient-to-r from-primary to-blue-500 flex flex-col justify-center items-center rounded-3xl shadow-2xl">
        <div className="grid w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold text-5xl mb-6">Meus Pets</p>
            <p className="">Clique no seu pet para ver mais informações</p>
          </div>
          <div className="md:flex grid ml-[35px] p-2 gap-5 mb-5 md:ml-[115px]">
            <select
              className="border-2 rounded-2xl border-white bg-white p-2 mt-4 text-lg md:w-[27%] text-center w-[90%]"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="" disabled selected hidden>
                Selecione
              </option>
              <option value="lastAccess">Último acesso</option>
              <option value="specie">Espécie</option>
              <option value="petName">Ordem alfabética</option>
            </select>
            <div>
              <Button className="border-2 rounded-2xl border-white bg-white p-2 mt-4 hover:bg-black hover:text-white h-[80%] w-[90%] md:w-[100%]">
                <p className="text-lg">Cadastrar novo pet</p>
              </Button>
            </div>
          </div>
          <div className=" bg-gradient-to-r from-primary to-[#cce7f6]rounded-2xl md:h-[70vh] p-2 w-[80%] md:ml-[120px] ml-[40px] border-2">
            <div className="p-2 grid grid-cols-1 md:grid-cols-2 w-full md:h-[500px]">
              {loading && <LoaderCircle className="animate-spin size-10" />}
              {petList?.map((item: Pet) => (
                <div
                  key={item.id}
                  className="relative m-2 p-4 bg-black rounded-xl flex flex-col md:flex-row items-center mb-10"
                >
                  <div
                    className="w-full h-full absolute top-0 left-0 bg-cover bg-center opacity-20 rounded-xl"
                    style={{
                      backgroundImage: `url(https://media.discordapp.net/attachments/1111489625232515115/1247927718897647627/3C2C9005-A507-4ADD-BEA7-ADFE807822A3.jpg?ex=66632041&is=6661cec1&hm=9151650d699ecc02a2a8df327b9b7f890b1d91fd98ed7fc90971941da99d1d0f&=&format=webp&width=1357&height=1169)`,
                    }}
                  ></div>
                  <div className="relative w-[170px] h-[170px] bg-gray-200 rounded-3xl mb-2 mt-10 md:mt-10">
                    <img
                      src={`https://media.discordapp.net/attachments/1111489625232515115/1247927718897647627/3C2C9005-A507-4ADD-BEA7-ADFE807822A3.jpg?ex=66632041&is=6661cec1&hm=9151650d699ecc02a2a8df327b9b7f890b1d91fd98ed7fc90971941da99d1d0f&=&format=webp&width=1357&height=1169`}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div className="ml-0 md:ml-10 grid justify-start text-start items-center">
                    <p className="font-semibold text-4xl text-white">
                      {item.name}
                    </p>
                    <p className="text-2xl text-white underline">
                      {item.gender}
                    </p>
                    <p className="text-sm text-white">{item.age} anos</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between p-2 md:mt-5">
            <button
              className="border-2 rounded-2xl border-white bg-white/70 p-2 cursor-pointer hover:bg-black hover:text-white"
              onClick={handlePreviousPage}
              disabled={page === 0}
            >
              <ChevronLeft />
            </button>
            <button
              className="border-2 rounded-2xl border-white bg-white/70 p-2 cursor-pointer hover:bg-black hover:text-white"
              onClick={handleNextPage}
              disabled={page >= totalPages - 1}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
