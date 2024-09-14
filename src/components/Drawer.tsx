import { FormikRegisterPet } from "./FormikRegisterPet";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="border-2 rounded-2xl px-8 py-2 mt-4 text-lg md:w-[100%] text-center w-full bg-white ">
          Cadastrar pet
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cadastrar PET!</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo para adicionar um novo PET!
          </SheetDescription>
        </SheetHeader>
        <FormikRegisterPet />
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
