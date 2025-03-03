import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMushroomContext } from "@/contexts/MushroomContext";

export default function MushroomCard({ id, name, imgPath, hasWarning }) {
  const router = useRouter();
  const { setSelectedMushroomId } = useMushroomContext();

  const handleClick = () => {
    setSelectedMushroomId(id);
    router.push("/mushroom");
  }
  
  return (
    <div
      className="flex flex-col w-[100px] cursor-pointer"
      onClick={handleClick}
    >
      <div className  ="relative h-[120px] bg-white shadow-md flex justify-center items-start">
        {hasWarning && (
          <Image
            className="absolute top-2 left-2"
            src="/icons/icon_warning.png"
            alt="Warning Symbol"
            width={16}
            height={16}
            priority
          />
        )}
        <Image 
          className="object-cover mt-1"
          src={imgPath}
          alt={`Image of ${name}`}
          width={90}
          height={95}
          priority
        />
      </div>
      <h1 className="text-[#203b5f] text-sm font-semibold mt-2 text-center w-full">{name}</h1>
    </div>
  );
}