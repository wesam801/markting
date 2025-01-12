import { useGlobalContext } from "../../context/language";

const Faqnav = () => {
  const { mode } = useGlobalContext();

  return (
    <div className="h-[70vh] bg-greengrocer-shelf bg-cover bg-center relative">
      <div className="flex items-center justify-center h-full w-full text-gray-200 font-bold bg-gradient-to-tr from-black">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-dancing-script">
          {mode == "Eng" ? " Facnav" : "الاسئلة الشائعة"}
        </h1>
      </div>
    </div>
  );
};

export default Faqnav;
