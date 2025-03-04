import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMushroomContext } from "@/contexts/MushroomContext";

// Size configuration for different card sizes
const SIZES = {
  small: {
    container: "w-[100px]",
    imageContainer: "h-[120px]",
    imageWidth: 90,
    imageHeight: 95,
    warningSize: 16,
    textSize: "text-sm"
  },
  medium: {
    container: "w-[150px]",
    imageContainer: "h-[180px]",
    imageWidth: 135,
    imageHeight: 142,
    warningSize: 24,
    textSize: "text-base"
  },
  large: {
    container: "w-[290px] h-[330px]", // Polaroid effect
    imageContainer: "w-[270px] h-[210px]", // Ensures correct size
    imageWidth: 270, 
    imageHeight: 210, 
    warningSize: 32,
    textSize: "text-lg"
  }
};

export default function MushroomCard({ 
  id, 
  name, 
  imgPath, 
  hasWarning,
  matchPercentage,
  size = "small" // Default to small size
}) {
  const router = useRouter();
  const { setSelectedMushroomId } = useMushroomContext();
  
  // Get size configuration or fallback to small
  const sizeConfig = SIZES[size] || SIZES.small;

  const handleClick = () => {
    setSelectedMushroomId(id);
    router.push("/mushroom");
  };
  
  return (
    <div className={`flex flex-col items-center ${sizeConfig.container} cursor-pointer`} onClick={handleClick}>
      
      {/* Polaroid-Style Card */}
      <div className="relative bg-white shadow-lg rounded-lg p-3 pb-6 flex flex-col items-center">
        
        {/* Match Percentage Badge */}
        {matchPercentage && size === "large" && (
          <div className="absolute top-3 left-3 flex items-center bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            <Image
              className="mr-1"
              src="/icons/icon_warning.png"
              alt="Warning Icon"
              width={14}
              height={14}
              priority
            />
            {matchPercentage}% Match
          </div>
        )}

        {/* Mushroom Image (Fixed Size) */}
        <div className={`relative ${sizeConfig.imageContainer} overflow-hidden flex justify-center items-center`}>
          <Image 
            src={imgPath}
            alt={`Image of ${name}`}
            layout="fixed"  // Ensures exact width & height
            width={sizeConfig.imageWidth}
            height={sizeConfig.imageHeight}
            objectFit="cover"  // Keeps correct proportions
            className="rounded-md"
            priority
          />
        </div>
      </div>

      {/* Mushroom Name (Below the Polaroid Effect) */}
      <h1 className={`text-[#203b5f] ${sizeConfig.textSize} font-semibold mt-2 text-center w-full`}>
        {name}
      </h1>
    </div>
  );
}
