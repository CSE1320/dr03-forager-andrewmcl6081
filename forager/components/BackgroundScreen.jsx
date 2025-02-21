import Image from "next/image"

export default function BackgroundSearch({ children, imageUrl }) {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image 
          src={imageUrl}
          alt="Camera Background"
          fill
          priority
          className="absolute object-cover object-center z-0"
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none"/>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}