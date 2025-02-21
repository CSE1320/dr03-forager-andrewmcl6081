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
          className="object-cover"
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20"/>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}