import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="w-full h-screen bg-[#579076] relative overflow-hidden">
      {/* Mushroom Vector */}
      <div className="absolute top-0 right-0 z-0">
        <Image 
          src="/images/mushroom_vector.svg"
          alt="Mushroom Vector"
          height={175}
          width={175}
          priority
        />
      </div>

      <div className="relative z-10 px-6 pt-12 flex items-center justify-between">
        <div>
          <p className="text-white text-[24px] font-medium leading-[40px]">Hi,</p>
          <h1 className="text-white text-[40px] font-extrabold leading-[40px]">Chantelle!</h1>
        </div>
        <div className="w-10 h-10 bg-[#5F464B] text-white flex items-center justify-center rounded-full text-lg font-bold mr-4 cursor-pointer">
          C
        </div>
      </div>

      <div className="relative bg-[#F2F2F2] rounded-t-[42px] w-full h-full p-6 shadow-lg z-10 mt-8">
        Testing
      </div>
    </div>
  );
}
