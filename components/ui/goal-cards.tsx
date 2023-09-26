import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  status: boolean;
  price: string;
};

const GoalCard = (props: Props) => {
  return (
    <div className="z-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-30 border text-white rounded-xl m-2 justify-center items-center">
      <div className="flex justify-center items-center h-20">
        <img
          src="/assets/trophy.png"
          alt="image"
          className="h-24"
        />
      </div>
      <div className="pt-6 pb-0 px-10">
        <h2 className="text-4xl font-semibold font-poppins">{props.title}</h2>
        <p className="mt-2 text-xl font-poppins">{props.status ? "Sudah diselesaikan" : "Belum diselesaikan"}</p>
        <p className="mt-2 font-poppins">{props.price}</p>
      </div>
      <div className="flex py-8 pt-6 justify-center items-center">
        <Button className="bg-[#FEAE33] text-black font-bold rounded-full px-14 hover:bg-[#E19323] transition-transform duration-200 transform hover:scale-105">
          Kerjakan
        </Button>
      </div>
    </div>
  );
};
export default GoalCard;
