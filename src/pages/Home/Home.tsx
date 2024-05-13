import imageHome from "../../assets/imageHome.png";
import service1 from "../../assets/service1.png";
import imageDanilo from "../../assets/imageDanilo.jpeg";
import imageAnrry from "../../assets/imageAnrry.jpeg";
import imageBruno from "../../assets/imageBruno.jpeg";
import imageJeser from "../../assets/imageJeser.jpeg";
import imageLincoln from "../../assets/imageLincoln.jpeg";
import { Header } from "../../components/Header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";


export function Home() {
  return (
    <>
      <Header />
      <div className="w-full bg-primary flex flex-col justify-center items-center rounded-3xl shadow-2xl">
        <div className="flex w-full">
          <div className="flex flex-col justify-center items-center p-4">
            <p className="font-semibold text-5xl mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur a quaerat repellendus quos, asperiores illum hic
              dolorem animi alias pariatur blanditiis earum ducimus provident?
              At numquam autem voluptatem quisquam quidem?
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imageHome}
              alt="Home"
              className="w-full max-h-full rounded-4xl"
            />
          </div>
        </div>
      </div>
      <div className="grid justify-center text-center mb-5">
        <p className="font-bold text-2xl mt-6 mb-6">Nossos serviços</p>
        <div className="w-full bg-primary items-center rounded-3xl shadow-2xl text-start">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <img src={service1} width={400} alt="" />
                  <div className="text-left">
                    <h1 className="font-bold">PetSpot</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Libero voluptate reiciendis, labore provident repellendus
                      deserunt assumenda! Suscipit, enim aperiam accusantium
                      accusamus quam mollitia cum earum numquam? Mollitia itaque
                      excepturi ab?Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Consequuntur facere, commodi, sequi
                      beatae incidunt sunt ex dolore odit illum reprehenderit
                      non aperiam animi libero placeat quaerat neque aliquam
                      culpa officiis.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <CarouselItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <img src={service1} width={400} alt="" />
                    <div className="text-left">
                      <h1 className="font-bold">PetSpot</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rem explicabo odio nulla ratione, doloribus alias.
                        Fugiat veniam, est magni quibusdam inventore rerum fugit
                        minima quasi maiores unde voluptatem dolore modi.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselItem>
              <CarouselItem>
                <CarouselItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <img src={service1} width={400} alt="" />
                    <div className="text-left">
                      <h1 className="font-bold">PetSpot</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rem explicabo odio nulla ratione, doloribus alias.
                        Fugiat veniam, est magni quibusdam inventore rerum fugit
                        minima quasi maiores unde voluptatem dolore modi.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="grid justify-center text-center mb-5">
        <p className="font-bold text-2xl mt-6 mb-6">Nosso time</p>
        <div className="w-full bg-primary items-center rounded-3xl shadow-2xl text-start">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={imageDanilo} className="" alt="" />
                <div className="bg-white p-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi sunt qui autem iure expedita incidunt dicta accusantium
                    quis quod, aperiam consectetur, atque veniam beatae sequi
                    neque debitis! Ullam, quos aperiam?
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={imageLincoln} alt="" />
                <div className="bg-white p-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro facere saepe sint pariatur quae blanditiis eius
                    dolores facilis cupiditate eum, ut nam quis fugiat quos
                    voluptatibus laudantium adipisci dicta repellendus.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={imageAnrry} alt="" />
                <div className="bg-white p-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eveniet, architecto dolores eaque dolor laborum
                    voluptate officia repellendus nobis sed accusamus maiores
                    magnam, officiis repellat omnis eos, enim quod ea.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={imageBruno} alt="" />
                <div className="bg-white p-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eveniet, architecto dolores eaque dolor laborum
                    voluptate officia repellendus nobis sed accusamus maiores
                    magnam, officiis repellat omnis eos, enim quod ea.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img src={imageJeser} alt="" />
                <div className="bg-white p-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eveniet, architecto dolores eaque dolor laborum
                    voluptate officia repellendus nobis sed accusamus maiores
                    magnam, officiis repellat omnis eos, enim quod ea.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
          {/* <GetInTouch/> */}
      </div>
    </>
  );
}
