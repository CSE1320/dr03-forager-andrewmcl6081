
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
    textSize: "text-base",
    showMatch: true,
    badgeFontSize: "text-xs",
    badgePadding: "px-2 py-0.5",
    iconSize: 14
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
    badgePadding: "px-2.5 py-1",
    iconSize: 16
  }
};

export default SIZES;