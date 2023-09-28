import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type Props = {
  id: number;
  title: string;
  desc: string;
  price: number;
  is_done: boolean;
};

const GoalCard = (props: Props) => {
  return (
    <Dialog>
      <div className="z-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border text-white rounded-xl m-2 justify-center items-center">
        <div className="flex justify-center items-center h-20">
          <img
            src="/assets/trophy.png"
            alt="image"
            className="h-24"
            draggable='false'
          />
        </div>
        <div className="pt-6 pb-0 px-10">
          <h2 className="text-4xl font-semibold font-poppins">{props.title}</h2>
          <p className="mt-2 text-xl font-poppins">{props.is_done ? "Sudah diselesaikan" : "Belum diselesaikan"}</p>
          <p className="mt-2 font-poppins">{props.price}</p>
        </div>
        <div className="flex py-8 pt-6 justify-center items-center">
          <DialogTrigger className="bg-[#FEAE33] text-black font-bold rounded-full px-14 py-2 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
            Kerjakan
          </DialogTrigger>
        </div>
      </div>
      <DialogContent className="max-w-[1025px] h-[700px]">
        <DialogHeader>
          <DialogTitle>Kerjakan Questmu</DialogTitle>
          <DialogDescription>
            Pilih planet untuk menyelesaikan quest
          </DialogDescription>
        </DialogHeader>
        <img
          src="/assets/main_envi.png"
          alt="background image"
          draggable='false'
          className="rotate-90 fixed left-56 top-8 justify-center items-center w-[500px] h-[700px] pb-20 pr-8"
        />
        <div className="justify-center items-center">
          <img
              src="/assets/background.png"
              alt="background image"
              className="rotate-270 w-[1000px] h-[550px] rounded-xl"
              draggable='false'
          />
        </div>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-72 top-[7.5rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-1.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 1</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-[12rem] bottom-[18rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-2.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 2</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-[22rem] bottom-[6rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-3.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 3</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[26.2rem] bottom-[13rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-4.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 4</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed right-[27rem] top-[15.5rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-5.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 5</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[17.6rem] top-[10.4rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-6.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 6</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[12.7rem] bottom-[15.5rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-7.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 7</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button className="transition-transform duration-200 transform hover:scale-125 fixed left-[17.8rem] bottom-[7rem] justify-center items-center">
              <img
                src="/assets/planets/planet-fix-8.png"
                alt="background image"
                className="w-[80px] h-[80px]"
                draggable='false'
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <h4 className="font-medium leading-none">Task 8</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Berikut adalah beberapa task yang perlu diselesaikan :
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </DialogContent>
    </Dialog>
  );
};
export default GoalCard;
