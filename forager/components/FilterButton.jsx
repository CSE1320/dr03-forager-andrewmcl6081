import Image from "next/image";

export default function FilterButton({ onClick }) {
  return (
    <button className="mr-2 p-2" onClick={onClick}>
      <Image 
        src="/icons/filter.png"
        alt="Filter Button"
        height={20}
        width={20}
      />
    </button>
  );
}