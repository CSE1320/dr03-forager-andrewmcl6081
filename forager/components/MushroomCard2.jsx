import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMushroomContext } from "@/contexts/MushroomContext";

const SIZES = {
  small: {
    container: "w-[100px]",
    imageContainer: "h-[120px]",
    img: "w-[90px] h-[95px]",
    imageWidth: 90,
    imageHeight: 95,
    warningSize: 16,
    textSize: "text-sm",
    showMatch: false
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
    container: "w-[290px]",
    polaroidContainer: "h-[290px]",
    img: "w-[270px] h-[210px]",
    imageWidth: 270, 
    imageHeight: 210, 
    warningSize: 24,
    textSize: "text-lg",
    showMatch: true,
    badgeFontSize: "text-sm",
    badePadding: "px-2.5 py-1",
    iconSize: 16
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

  if (size === "small" || !sizeConfig.showMatch) {
    return (
      <div
        className={`flex flex-col ${sizeConfig.container} cursor-pointer`}
        onClick={handleClick}
      >
        <div className={`relative ${sizeConfig.imageContainer} bg-white shadow-md flex justify-center items-start`}>
          {hasWarning && (
            <Image
              className="absolute top-2 left-2"
              src="/icons/icon_warning.png"
              alt="Warning Symbol"
              width={sizeConfig.warningSize}
              height={sizeConfig.warningSize}
              priority
            />
          )}
          <Image
            className={`object-cover mt-1 ${sizeConfig.img}`}
            src={imgPath}
            alt={`Image of ${name}`}
            width={sizeConfig.imageWidth}
            height={sizeConfig.imageHeight}
            priority
          />
        </div>
        <h1 className={`text-[#203b5f] ${sizeConfig.textSize} font-semibold mt-2 text-center w-full`}>
          {name}
        </h1>
      </div>
    );
  }
  
  // for medium and large cards
  return (
    <div 
      className={`flex flex-col ${sizeConfig.container} cursor-pointer`} 
      onClick={handleClick}
    >
      <div className={`flex flex-col ${sizeConfig.polaroidContainer || sizeConfig.imageContainer} bg-white shadow-md`}>
        <div className="w-full flex justify-between p-1 mb-1 mt-1">
          {matchPercentage && (
            <div className={`flex items-center text-white rounded-full ${sizeConfig.badgePadding}`}>
              <Image
                src="/icons/skull_icon.png" 
                alt="Skull icon"
                width={sizeConfig.iconSize}
                height={sizeConfig.iconSize}
                className="mr-1"
              />
              <div className={`${sizeConfig.badgeFontSize} font-medium bg-red-500 rounded-md px-1`}>
                {matchPercentage}% Match
              </div>
            </div>
          )}
        </div>
        
        {/* Image section */}
        <div className="flex-grow flex justify-center items-start relative">
          {hasWarning && (
            <Image
              className="absolute top-1 left-4"
              src="/icons/icon_warning.png"
              alt="Warning Symbol"
              width={sizeConfig.warningSize}
              height={sizeConfig.warningSize}
              priority
            />
          )}
          <Image
            className={`object-cover ${sizeConfig.img || ''}`}
            src={imgPath}
            alt={`Image of ${name}`}
            width={sizeConfig.imageWidth}
            height={sizeConfig.imageHeight}
            priority
          />
        </div>
      </div>
    </div>
  );
}
