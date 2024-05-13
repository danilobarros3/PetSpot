import { Input } from "./ui/input";

export function GetInTouch() {
  return (
    <>
      <div className="mt-5">
        <h1 className="font-bold text-2xl">Entre em contato</h1>
      </div>
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
          <div className="flex justify-center items-center bg-white">
            <div>
              <Input
              type="text"
              className="border-2 border-slate-600 rounded-2xl bg-white p-4 mt-4  py-5"
              placeholder="email"
              />
              <Input
              type="password"
              className="border-2 rounded-2xl border-slate-600 p-4 mt-4 bg-white py-5"
              placeholder="password"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
