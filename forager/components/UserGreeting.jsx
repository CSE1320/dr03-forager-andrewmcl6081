
export default function UserGreeting({ name = "Chantelle" }) {
  return (
    <div className="relative z-10 px-6 pt-12 flex items-center justify-between">
      <div>
        <p className="text-white text-[24px] font-medium leading-[40px]">Hi,</p>
        <h1 className="text-white text-[40px] font-extrabold leading-[40px]">{name}!</h1>
      </div>
      <div className="w-10 h-10 bg-[#5F464B] text-white flex items-center justify-center rounded-full text-lg font-bold mr-4 cursor-pointer">
        {name.charAt(0)}
      </div>
    </div>
  );
};