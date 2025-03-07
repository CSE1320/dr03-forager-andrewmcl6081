import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMushroomContext } from "@/contexts/MushroomContext";
import SIZES from "@/data/cardSizes";

export default function MushroomCard({ 
  id, 
  name, 
  imgPath, 
  hasWarning,
  matchPercentage,
  characteristics,
  filters,
  size = "small"
}) {
  const router = useRouter();
  const { setSelectedMushroomId } = useMushroomContext();
  const sizeConfig = SIZES[size] || SIZES.small;
  const isToxic = hasWarning || characteristics?.isToxic || filters?.category?.includes("Poisonous");

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
  
  // For medium cards with match percentage
  else if (size === "medium") {
    return (
      <div 
        className={`flex flex-col ${sizeConfig.container} cursor-pointer`} 
        onClick={handleClick}
      >
        <div className={`relative ${sizeConfig.imageContainer} bg-white shadow-md`}>
          {/* Match percentage badge for medium size */}
          {matchPercentage && (
            <div className={`absolute top-2 left-2 z-10 p-1
              ${isToxic ? "bg-[#F66]" : "bg-[#73D89FE5]"} 
              text-white rounded-md ${sizeConfig.badgeFontSize} font-medium ${sizeConfig.badgePadding}`}>
              {matchPercentage}%
            </div>
          )}
          
          {/* Warning icon */}
          {hasWarning && (
            <Image
              className="absolute top-2 right-2 z-10"
              src="/icons/icon_warning.png"
              alt="Warning Symbol"
              width={sizeConfig.warningSize}
              height={sizeConfig.warningSize}
              priority
            />
          )}
          
          {/* Mushroom image */}
          <div className="flex justify-center items-start w-full h-full pt-2 pl-2 pr-2 pb-6">
            <Image
              className="object-cover"
              src={imgPath}
              alt={`Image of ${name}`}
              width={sizeConfig.imageWidth}
              height={sizeConfig.imageHeight}
              priority
            />
          </div>
        </div>
        <h1 className={`text-[#203b5f] ${sizeConfig.textSize} font-semibold mt-2 text-center w-full`}>
          {name}
        </h1>
      </div>
    );
  }

  // For large cards
  else if (size === "large") {
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
          <div className="flex-grow flex justify-center items-start relative pb-4">
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
}